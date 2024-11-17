/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from "react"
import { useCart } from "@/context/CartContext"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { PiShoppingCartLight, PiTrashLight } from "react-icons/pi"
import Image from "next/image"
import { useRouter } from "next/navigation"
import netflixpremium from "@/assets/images/netflixpremiumuhd.png"
import primevideo from "@/assets/images/amazonprimevideo.png"

const CartModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  const router = useRouter()
  const { cart, updateQuantity, removeFromCart, total, clearCart } = useCart()
  console.log(cart)
  const [showPersonalKeyModal, setShowPersonalKeyModal] = useState(false)
  const [inputPersonalKey, setInputPersonalKey] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<
    "success" | "insufficient" | "error" | null
  >(null)
  const [orderedItems, setOrderedItems] = useState<any[]>([])

  if (!isOpen) return null

  const handleCheckout = async () => {
    const personalKey = localStorage.getItem("personalKey")
    if (!personalKey) {
      setShowPersonalKeyModal(true)
      return
    }

    setLoading(true)

    try {
      // Verify checkout
      const verifyResponse = await fetch("/api/verify_checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personalKey,
          selectedProducts: cart.map((item) => ({
            name: item.appName,
            quantity: item.quantity,
            duration: item.duration,
          })),
        }),
      })

      const verifyData = await verifyResponse.json()
      if (!verifyResponse.ok)
        throw new Error(verifyData.error || "Checkout failed")

      // Update balance after successful verification
      const balanceResponse = await fetch("/api/update_balance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ personalKey, purchaseTotal: total }),
      })

      const balanceData = await balanceResponse.json()
      if (!balanceResponse.ok)
        throw new Error(balanceData.error || "Balance update failed")

      setOrderedItems(cart)
      setStatus("success")
      clearCart()
    } catch (error: any) {
      if (error.message.includes("Insufficient balance")) {
        setStatus("insufficient")
      } else {
        setStatus("error")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSubmitPersonalKey = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputPersonalKey) return

    try {
      const userInfoRes = await fetch("/api/get_info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ personalKey: inputPersonalKey }),
      })

      if (!userInfoRes.ok) throw new Error("Invalid Personal Key")

      localStorage.setItem("personalKey", inputPersonalKey)
      setShowPersonalKeyModal(false)
      handleCheckout()
    } catch (error) {
      setError("An error occurred. Please try again.")
    }
  }

  const PersonalKeyModal = () => (
    <div className='fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-center justify-center'>
      <div className='w-11/12 md:w-1/2 bg-dark-500 p-5 rounded flex flex-col gap-5'>
        <h2 className='text-2xl font-bold text-light-300'>
          Enter Your Personal Key
        </h2>
        <p className='text-light-300'>
          A unique <strong>Personal Key</strong> allows you to manage your
          account and access premium services securely.
        </p>
        <form
          onSubmit={handleSubmitPersonalKey}
          className='flex flex-col gap-4'
        >
          <input
            type='text'
            placeholder='Enter your Personal Key (#ABCD1234)'
            value={inputPersonalKey}
            onChange={(e) => setInputPersonalKey(e.target.value)}
            className='border-primary border px-3 py-2 bg-transparent text-sm'
          />
          <button type='submit' className='bg-primary text-dark-800 px-4 py-2'>
            Submit
          </button>
          {error && <p className='text-red-500'>{error}</p>}
        </form>
        <a href='/register' className='text-primary'>
          Don't Have a Personal Key? Register Here
        </a>
      </div>
    </div>
  )

  const SuccessModal = () => (
    <div className='fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-center justify-center'>
      <div className='bg-gray-800 p-5 rounded-lg flex flex-col items-center'>
        <h2 className='text-light-300 text-center mb-4'>
          Checkout Successful! Balance Updated.
        </h2>
        <div className='w-full mb-4'>
          {orderedItems.map((item) => (
            <div
              key={item.id}
              className='flex justify-between w-full text-light-300 py-2'
            >
              <span>
                {formatProductName(item.appName)} <br /> ({item.duration})
              </span>
              <span>Qty: {item.quantity}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => router.push("/your-premium-apps")}
          className='bg-primary text-dark-800 px-4 py-2 rounded'
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  )

  const InsufficientBalanceModal = () => (
    <div className='fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-center justify-center'>
      <div className='bg-gray-800 p-5 rounded-lg flex flex-col items-center'>
        <p className='text-light-300 text-center mb-4'>
          Insufficient balance to complete checkout.
        </p>
        <button
          onClick={() => setStatus(null)}
          className='bg-primary text-dark-800 px-4 py-2 rounded'
        >
          Close
        </button>
      </div>
    </div>
  )

  const ErrorModal = () => (
    <div className='fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-center justify-center'>
      <div className='bg-gray-800 p-5 rounded-lg flex flex-col items-center'>
        <p className='text-light-300 text-center mb-4'>
          An error occurred during checkout.
        </p>
        <button
          onClick={() => setStatus(null)}
          className='bg-primary text-dark-800 px-4 py-2 rounded'
        >
          Close
        </button>
      </div>
    </div>
  )

  function formatProductName(name: string): string {
    return name.replace(/([A-Z])/g, " $1").trim()
  }

  return (
    <div className='fixed inset-0 bg-dark-800/20 backdrop-blur-lg flex justify-center items-end z-50'>
      <div className='w-full max-w-lg bg-dark-800 p-4 rounded-t-lg border-[1px] border-dark-500'>
        <div className='flex justify-between items-center pb-4 mb-5 border-b-[1px] border-dark-500'>
          <h2 className='text-lg font-bold text-light-200 flex items-center gap-2'>
            <PiShoppingCartLight className='text-primary text-xl' /> Your Cart
          </h2>
          <button
            onClick={onClose}
            className='text-red-600 bg-red-600/20 rounded px-2 py-1'
          >
            Close
          </button>
        </div>

        {cart.length === 0 ? (
          <p className='text-light-200 text-center'>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className='flex justify-between items-center border-b border-dark-600 py-3 gap-5'
              >
                <div className='w-full flex gap-3 items-center'>
                  <Image
                    src={
                      item.appName.includes("Netflix")
                        ? netflixpremium
                        : primevideo
                    }
                    alt={`${item.appName} image`}
                    width={60}
                    height={60}
                    className='select-none'
                    loading='lazy'
                  />
                  <div className='flex flex-col'>
                    <p className='text-xs font-thin'>
                      {formatProductName(item.appName)}
                    </p>
                    <div className='flex gap-3 items-center'>
                      <span className='px-2 py-1 text-sm bg-primary text-dark-800 font-bold'>
                        {item.duration}
                      </span>
                      <p className='text-light-100 font-medium'>
                        ฿ {item.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center'>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className='p-1 text-xs text-light-400 rounded-full border border-light-400'
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className='px-3 text-light-200'>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className='p-1 text-xs text-light-400 rounded-full border border-light-400'
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='text-red-500 bg-red-600/20 rounded p-2'
                  >
                    <PiTrashLight className='text-lg' />
                  </button>
                </div>
              </div>
            ))}
            <div className='flex justify-between items-center pt-4 border-t border-dark-600'>
              <span className='text-light-200 font-bold'>Total:</span>
              <span className='text-light-200 font-bold'>฿ {total}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className={`w-full mt-4 bg-primary text-dark-800 py-2 rounded font-bold text-xl ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Processing..." : "Checkout"}
            </button>
          </div>
        )}
      </div>

      {showPersonalKeyModal && <PersonalKeyModal />}
      {status === "success" && <SuccessModal />}
      {status === "insufficient" && <InsufficientBalanceModal />}
      {status === "error" && <ErrorModal />}
    </div>
  )
}

export default CartModal
