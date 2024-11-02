/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import dokmaithinoutlinelogo from "@/assets/images/dokmaithinoutline.png"
import dokmailogosquare from "@/assets/images/dokmailogosquare.png"
import dokmaicoin from "@/assets/images/dokmaicoin.png"
import { FaUserLock } from "react-icons/fa6"
import { accountBadge } from "@/constant"
import netflixpremiumlogo from "@/assets/images/netflixpremiumuhd.png"
import primevideo from "@/assets/images/amazonprimevideo.png"
import { MdOutlineAccountBalanceWallet } from "react-icons/md"
import Link from "next/link"
import Loading from "@/components/Loading"
import EmailList from "./EmailList"
import CopyToClipboard from "./CopyToClipboard"

export const ShowPremiumApps = () => {
  const [inputPersonalKey, setInputPersonalKey] = useState<string>("")
  const [personalKey, setPersonalKey] = useState<string | null>(null)
  const [userInfo, setUserInfo] = useState<any>(null)
  const [premiumData, setPremiumData] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  const [checkingLocalStorage, setCheckingLocalStorage] = useState(true)
  const [validatingPersonalKey, setValidatingPersonalKey] = useState(false)
  const [fetchingData, setFetchingData] = useState(false)
  const [emails, setEmails] = useState([])
  const [searchEmail, setSearchEmail] = useState("")
  const [lastSearchedEmail, setLastSearchedEmail] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  const [loadingEmail, setLoadingEmail] = useState(false)
  const [refreshCountdown, setRefreshCountdown] = useState(120)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchEmails = async (email: string) => {
    setLoadingEmail(true)
    setIsRefreshing(true)
    try {
      const response = await fetch(
        `/api/emails_reset_password?search=${encodeURIComponent(email)}`
      )
      if (!response.ok) {
        throw new Error("Failed to fetch emails")
      }
      const data = await response.json()
      setEmails(data)
    } catch (error) {
      console.error("Error fetching emails:", error)
    } finally {
      setLoadingEmail(false)
      setIsRefreshing(false)
      setHasSearched(true)
    }
  }

  const emailAllowedReset = premiumData
    .map((item: any) => item.email) // Extract each email
    .filter((email: string | undefined) => email !== undefined) as string[]

  const handleSearch = () => {
    if (emailAllowedReset.includes(searchEmail.trim())) {
      setError(null)
      fetchEmails(searchEmail)
      setLastSearchedEmail(searchEmail)
      setRefreshCountdown(120)
    } else {
      setError("This email is not allowed for reset.")
    }
  }

  // Update onSubmitForm to prevent form submission default behavior
  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault() // Prevents the page refresh
    handleSearch()
  }
  useEffect(() => {
    let countdownInterval: NodeJS.Timeout
    if (
      hasSearched &&
      searchEmail.trim() &&
      searchEmail === lastSearchedEmail
    ) {
      countdownInterval = setInterval(() => {
        setRefreshCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            fetchEmails(searchEmail)
            return 120
          } else {
            return prevCountdown - 1
          }
        })
      }, 1000)
    }
    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval)
      }
    }
  }, [hasSearched, searchEmail, lastSearchedEmail])

  useEffect(() => {
    const storedPersonalKey = localStorage.getItem("personalKey")
    if (storedPersonalKey) {
      setPersonalKey(storedPersonalKey)
      validatePersonalKey(storedPersonalKey)
    } else {
      setCheckingLocalStorage(false)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputPersonalKey) return
    setPersonalKey(inputPersonalKey)
    setValidatingPersonalKey(true)
    await validatePersonalKey(inputPersonalKey)
    setValidatingPersonalKey(false)
  }

  const validatePersonalKey = async (key: string) => {
    try {
      setError(null)
      const userInfoRes = await fetch("/api/get_info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ personalKey: key }),
      })

      if (userInfoRes.ok) {
        const userInfoData = await userInfoRes.json()
        setUserInfo(userInfoData.data)
        localStorage.setItem("personalKey", key)
        fetchPremiumData(key)
      } else {
        const errorData = await userInfoRes.json()
        setError(errorData.error || "Invalid Personal Key.")
        setUserInfo(null)
        localStorage.removeItem("personalKey")
      }
    } catch (err) {
      setError("An error occurred. Please try again later.")
    } finally {
      setCheckingLocalStorage(false)
      setValidatingPersonalKey(false)
    }
  }

  const fetchPremiumData = async (key: string) => {
    setFetchingData(true)
    try {
      const premiumDataRes = await fetch("/api/your_premium_apps_data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ personalKey: key }),
      })

      if (premiumDataRes.ok) {
        const premiumAppsData = await premiumDataRes.json()
        setPremiumData(premiumAppsData.data)
      } else {
        const errorData = await premiumDataRes.json()
        setError(errorData.error || "No premium data found.")
        setPremiumData([])
      }
    } catch (err) {
      setError("Failed to fetch premium data. Please try again.")
    } finally {
      setFetchingData(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("personalKey")
    setPersonalKey(null)
    setUserInfo(null)
    setPremiumData([])
    setError(null)
    setInputPersonalKey("") // Reset the input field as well
  }

  const getLabelDisplayName = (label: string) =>
    ({
      orderDate: "Order Date",
      expireDate: "Expire Date",
      email: "Email",
      password: "Password",
      profile: "Profile",
      pin: "PIN",
    }[label] || null)

  console.log(`Searching ${searchEmail}`)

  return (
    <div className='w-full'>
      {checkingLocalStorage && <Loading />}
      {!checkingLocalStorage && !personalKey && (
        <div className='w-full flex flex-col min-h-96 justify-center items-start h-full gap-10'>
          <div className='text-light-300'>
            <h2 className='text-2xl font-bold mb-2'>
              ทำความรู้จักกับ Personal Key
            </h2>
            <p>
              <strong>Personal Key</strong>{" "}
              คือรหัสเฉพาะที่ไม่ซ้ำกันและเป็นของคุณคนเดียว!
              คุณจะได้รับรหัสนี้เพียงหนึ่งชุดเท่านั้น
              ซึ่งช่วยให้คุณจัดการข้อมูลและการเข้าถึงบัญชีของคุณอย่างปลอดภัย
              รวมถึงการซื้อแอปพรีเมียมเพิ่มเติมได้สะดวกยิ่งขึ้น
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className='mb-4 w-full flex flex-col md:flex-row'
          >
            <input
              type='text'
              placeholder='Enter your Personal Key'
              className='border-[1px] border-primary p-2 px-3 w-full focus:outline-none focus:ring-0 bg-transparent text-sm'
              value={inputPersonalKey}
              onChange={(e) => setInputPersonalKey(e.target.value)}
            />
            <button
              type='submit'
              className='bg-primary text-dark-800 px-4 py-2 w-full md:w-fit font-aktivGroteskBold'
            >
              Submit
            </button>
          </form>
        </div>
      )}
      {validatingPersonalKey && (
        <div className='items-center justify-center w-full rounded-3xl border-[1px] border-black/40 md:h-full flex flex-col mt-10'>
          <div className='relative flex items-center justify-center'>
            <div className='w-24 h-24 border-2 border-b-transparent border-primary rounded-full animate-spin' />
            <Image
              src={dokmailogosquare}
              alt='Loading Logo'
              width={100}
              height={100}
              loading='lazy'
              className='absolute p-5 animate-pulse'
            />
          </div>
          <p className='mt-2'>Validating Personal Key ...</p>
        </div>
      )}
      {!checkingLocalStorage && !validatingPersonalKey && userInfo && (
        <div className='flex gap-5 flex-col lg:flex-row'>
          <div className='bg-white/10 relative rounded-xl overflow-hidden h-fit group w-full md:min-w-96 md:w-fit'>
            <div className='bg-gradient-to-tl from-white/5 to-dark-800 rounded-lg p-5 w-full'>
              <div className='justify-end flex items-start'>
                <div className='flex gap-2 items-center select-none'>
                  <Image
                    src={dokmaicoin}
                    width={500}
                    height={500}
                    className=' w-6 h-6'
                    alt='Dokmai Coin Icon'
                  />
                  <p className='text-2xl font-aktivGroteskBold'>
                    {userInfo.balance}
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-start justify-center gap-2'>
                <div className='flex gap-2 items-center'>
                  {accountBadge(userInfo.badge)}
                </div>
                <div className='flex gap-2 items-center'>
                  <FaUserLock className='w-8 h-8 text-white p-2 bg-white/10 rounded-lg' />
                  <p className='text-lg select-none'>{userInfo.personalKey}</p>
                </div>
                <Link
                  href='/deposit'
                  className='flex gap-2 items-center bg-white/10 text-xs hover:bg-primary/10 hover:text-primary rounded-lg p-2 kontol'
                >
                  <MdOutlineAccountBalanceWallet className='w-5 h-5 ' />
                  Deposit Dokmai Coin
                </Link>
              </div>
              <button
                onClick={handleLogout}
                className='mt-8 bg-white/10 hover:bg-red-500/40 text-white text-xs rounded px-2 py-1 font-aktivGroteskRegular'
              >
                Logout
              </button>
              <Image
                src={dokmaithinoutlinelogo}
                alt='Dokmai Store Logo'
                width={300}
                height={300}
                className='absolute -bottom-5 -right-5 opacity-10 group-hover:opacity-40 select-none duration-1000 '
              />
            </div>
          </div>
          <div className='text-light-300 text-xs'>
            <h3 className='text-xl font-semibold mt-4'>
              ทำไมต้องเก็บ Personal Key ให้ปลอดภัย?
            </h3>
            <ul className='list-disc ml-6 text-light-500'>
              <li>
                <strong>ง่ายและสะดวก:</strong> ไม่ต้องจำอีเมลหรือรหัสผ่านมากมาย
                แค่รหัส 8 หลัก (ประกอบด้วยตัวอักษร 4 ตัว และตัวเลข 4 ตัว)
                คุณก็สามารถใช้งานได้เลย
              </li>
              <li>
                <strong>ใช้ในการตรวจสอบตัวตน:</strong>{" "}
                ใช้รหัสนี้เพื่อเข้าถึงข้อมูลบัญชีแอปพรีเมียม
                และดูรายละเอียดการซื้อของคุณ
              </li>
              <li>
                <strong>เครื่องมือเข้าถึงพิเศษ:</strong>{" "}
                ใช้รหัสนี้เพื่อรีเซ็ตรหัสผ่านของบัญชีแอปพรีเมียม
                ซื้อแอปพรีเมียมเพิ่มเติม และเข้าถึงยอด{" "}
                <strong>Dokmai Coin</strong> ของคุณ
              </li>
            </ul>

            <h3 className='text-xl font-semibold mt-4'>
              สิ่งที่ควรจำเกี่ยวกับ Personal Key
            </h3>
            <p>
              โปรดเก็บรักษารหัสนี้เป็นความลับ! หากมีใครได้รู้รหัสของคุณ
              พวกเขาจะสามารถ:
            </p>
            <ul className='list-disc ml-6 text-light-500'>
              <li>ดูข้อมูลบัญชีแอปพรีเมียมที่คุณซื้อ</li>
              <li>เข้าถึงยอด Dokmai Coin และข้อมูลสำคัญอื่นๆ ในบัญชีของคุณ</li>
            </ul>

            <p className='mt-4'>
              ด้วย Personal Key
              คุณสามารถจัดการและรักษาความปลอดภัยของบัญชีได้อย่างง่ายดาย
              มั่นใจในความปลอดภัย และสะดวกสบายกับการใช้งานทุกฟีเจอร์ของเรา!
            </p>
          </div>
        </div>
      )}

      {fetchingData && (
        <div className='items-center justify-center w-full rounded-3xl border-[1px] border-black/40 md:h-full flex flex-col mt-10'>
          <div className='relative flex items-center justify-center'>
            <div className='w-24 h-24 border-2 border-b-transparent border-primary rounded-full animate-spin' />
            <Image
              src={dokmailogosquare}
              alt='Loading Logo'
              width={100}
              height={100}
              loading='lazy'
              className='absolute p-5 animate-pulse'
            />
          </div>
          <p className='mt-2'>กำลังโหลดข้อมูลของคุณ ...</p>
        </div>
      )}

      {!checkingLocalStorage &&
        !validatingPersonalKey &&
        !fetchingData &&
        premiumData.length > 0 && (
          <div className='mt-52 w-full'>
            <h2 className='font-aktivGroteskBold text-2xl text-light-100 mb-24'>
              Your Ordered{" "}
              <span className='text-dark-800 bg-primary p-1'>Premium Apps</span>
            </h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-fit lg:w-full'>
              {premiumData.map((item: any, index: any) => (
                <div
                  key={index}
                  className='shadow pt-5 pb-10 flex flex-col gap-2 border-b-[1px] border-white/20 bg-dark-700 px-5'
                >
                  {Object.entries(item).map(([label, value], idx) => (
                    <>
                      {String(value) === "Netflix Premium" ? (
                        <Image
                          src={netflixpremiumlogo}
                          alt='Netflix Premium Ultra HD Icon'
                          width={50}
                          height={50}
                        />
                      ) : null}
                      {String(value) === "Prime Video" ? (
                        <Image
                          src={primevideo}
                          alt='Netflix Premium Ultra HD Icon'
                          width={75}
                          height={75}
                        />
                      ) : null}
                      {String(label) === "accessType" ? (
                        <span
                          className='text-xs font-aktivGroteskThin text-white/70'
                          key={idx}
                        >
                          {String(value)}
                        </span>
                      ) : null}
                    </>
                  ))}
                  {Object.entries(item).map(([label, value], idx) => (
                    <div className='flex flex-col ml-7' key={idx}>
                      <p className='font-aktivGroteskMedium text-white/60 text-xs '>
                        {getLabelDisplayName(String(label))}
                      </p>
                      <p className='font-aktivGroteskBold flex gap-2 items-center'>
                        {String(label) !== "accessType" &&
                        String(label) !== "appName" ? (
                          <>
                            {String(value)}{" "}
                            {String(label) !== "accessType" &&
                            String(label) !== "orderDate" &&
                            String(label) !== "appName" ? (
                              <CopyToClipboard textToCopy={String(value)} />
                            ) : null}
                          </>
                        ) : null}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className='w-full flex flex-col justify-center items-center pt-48 pb-40'>
              <h2 className='font-aktivGroteskBold text-2xl text-light-100 mb-24'>
                Get Email{" "}
                <span className='text-dark-800 bg-primary p-1'>
                  Link Or Code
                </span>{" "}
                For Reset Password Your{" "}
                <span className='text-dark-800 bg-primary p-1'>
                  Premium Apps
                </span>{" "}
                Here
              </h2>
              <div className='flex w-full justify-start items-start gap-5 flex-col lg:flex-row '>
                <div className='w-full h-full flex flex-col gap-5 '>
                  <form
                    onSubmit={onSubmitForm}
                    className='w-full flex border-[1px] border-primary/40 rounded-sm'
                  >
                    {/* <input
                      type='email'
                      placeholder='email@dokmaistore.com'
                      required
                      value={searchEmail}
                      onChange={(e) => setSearchEmail(e.target.value)}
                      className='px-3 w-full focus:outline-none focus:ring-0 bg-transparent text-sm'
                    /> */}
                    <select
                      required
                      value={searchEmail}
                      onChange={(e) => setSearchEmail(e.target.value)}
                      className='px-3 w-full focus:outline-none focus:ring-0 bg-transparent text-sm'
                    >
                      <option value='' disabled>
                        Select an email
                      </option>
                      {premiumData.map((item: any, index: number) => {
                        const email = item.email
                        return email ? (
                          <option key={index} value={email}>
                            {email}
                          </option>
                        ) : null
                      })}
                    </select>
                    <button
                      type='submit'
                      className='ml-4 bg-primary hover:bg-primary/70 active:bg-primary/50 text-sm text-dark-800 px-4 py-2 font-aktivGroteskBold'
                    >
                      Submit
                    </button>
                  </form>
                  <div className='flex w-full h-full'>
                    {loadingEmail ? (
                      <div className='items-center justify-center w-full rounded-3xl border-[1px] border-black/40 md:h-full flex flex-col mt-10'>
                        <div className='relative flex items-center justify-center'>
                          <div className='w-24 h-24 border-2 border-b-transparent border-primary rounded-full animate-spin' />
                          <Image
                            src={dokmailogosquare}
                            alt='Loading Logo'
                            width={100}
                            height={100}
                            loading='lazy'
                            className='absolute p-5 animate-pulse'
                          />
                        </div>
                        <p className='mt-2'>กรุณารอสักครู่ ...</p>
                      </div>
                    ) : (
                      <>
                        {hasSearched ? (
                          <div className='w-full'>
                            <div className='flex items-center justify-between mb-2'>
                              {/* Display countdown timer */}
                              <p className='text-gray-500'>
                                Refreshing ({lastSearchedEmail})
                                <br className='md:hidden' /> in{" "}
                                {refreshCountdown} seconds...
                              </p>
                              {/* Show "Refreshing..." message when refreshing */}
                              {isRefreshing && (
                                <p className='text-blue-500 animate-pulse'>
                                  Refreshing emails...
                                </p>
                              )}
                            </div>
                            <EmailList emails={emails} />
                          </div>
                        ) : null}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {!checkingLocalStorage &&
        !validatingPersonalKey &&
        !fetchingData &&
        error && <p className='text-red-500 mt-4'>{error}</p>}
    </div>
  )
}
