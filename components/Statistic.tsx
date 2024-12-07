/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect, useState } from "react"
import LineChart from "@/components/LineChart"
import Image from "next/image"
import dokmailogosquare from "@/assets/images/dokmailogosquare.png"
import { PiChartLine } from "react-icons/pi"

const Statistics = () => {
  const [view, setView] = useState<"daily" | "monthly">("daily") // Daily or Monthly
  const [activeData, setActiveData] = useState<
    "deposit" | "spent" | "products" | "users"
  >("deposit") // Active data type
  const [labels, setLabels] = useState<string[]>([]) // X-axis labels
  const [dataPoints, setDataPoints] = useState<number[]>([]) // Y-axis data points
  const [loading, setLoading] = useState<boolean>(false) // Loading state

  // Fetch statistics from API
  const fetchStatistics = async () => {
    setLoading(true)
    try {
      const date =
        view === "daily"
          ? new Date().toISOString().split("T")[0] // YYYY-MM-DD for daily
          : new Date().toISOString().slice(0, 7) // YYYY-MM for monthly
      const response = await fetch(
        `/api/get_statistic?type=${view}&date=${date}`
      )
      if (!response.ok) throw new Error("Failed to fetch statistics")

      const data = await response.json()
      processStatistics(data.data)
    } catch (error) {
      console.error("Error fetching statistics:", error)
      setLabels([])
      setDataPoints([])
    } finally {
      setLoading(false)
    }
  }

  const processStatistics = (statistics: any[]) => {
    if (!statistics || !statistics.length) {
      setLabels([])
      setDataPoints([])
      return
    }

    // Filter and process data based on the active metric
    const filteredData = statistics.filter((entry) => {
      switch (activeData) {
        case "deposit":
          return entry.depositAmount > 0
        case "spent":
          return entry.spentAmount > 0
        case "products":
          return entry.productsSold > 0
        case "users":
          return entry.userLogins > 0
        default:
          return false
      }
    })

    if (view === "daily") {
      setLabels(filteredData.map((entry) => entry.time)) // Filtered hourly labels
      setDataPoints(
        filteredData.map((entry) => {
          switch (activeData) {
            case "deposit":
              return entry.depositAmount
            case "spent":
              return entry.spentAmount
            case "products":
              return entry.productsSold
            case "users":
              return entry.userLogins
            default:
              return 0
          }
        })
      )
    } else if (view === "monthly") {
      setLabels(filteredData.map((entry) => entry.date)) // Filtered daily labels
      setDataPoints(
        filteredData.map((entry) => {
          switch (activeData) {
            case "deposit":
              return entry.depositAmount
            case "spent":
              return entry.spentAmount
            case "products":
              return entry.productsSold
            case "users":
              return entry.userLogins
            default:
              return 0
          }
        })
      )
    }
  }

  // Fetch data on component mount and when filters change
  useEffect(() => {
    fetchStatistics()
  }, [view, activeData])

  return (
    <div className='flex flex-col justify-start items-start gap-5 p-5 rounded border-[1px] w-full h-fit bg-dark-700 border-dark-500'>
      <div className='flex items-center justify-start gap-2 w-full font-bold mb-5 border-b-[1px] border-dark-500 pb-3'>
        <PiChartLine className='text-xl' />
        {["deposit", "spent", "products", "users"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveData(type as typeof activeData)}
            className={`px-2 py-1 rounded-sm text-start text-xs hover:text-dark-800 hover:bg-primary/90 bg-dark-800 ${
              activeData === type
                ? "bg-primary text-dark-800"
                : "bg-dark-600 text-light-600"
            }`}
          >
            {type === "deposit"
              ? "Deposit Amount"
              : type === "spent"
              ? "Spent Amount"
              : type === "products"
              ? "Products Sold"
              : "Users Login"}
          </button>
        ))}
      </div>
      <div className='min-h-fit w-full'>
        {loading ? (
          <div className='pt-10 h-full w-full'>
            <div className='relative flex items-center justify-center h-full w-full'>
              <div className='w-10 h-10 border-2 border-b-transparent border-primary rounded-full animate-spin'></div>
              <Image
                src={dokmailogosquare}
                alt='Loading Logo | Dokmai Store'
                width={25}
                height={25}
                loading='lazy'
                className='absolute'
              />
            </div>
          </div>
        ) : labels.length > 0 ? (
          <LineChart
            labels={labels}
            datasetLabel={
              activeData === "deposit"
                ? "Deposit Amount"
                : activeData === "spent"
                ? "Spent Amount"
                : activeData === "products"
                ? "Products Sold"
                : "Users Login"
            }
            dataPoints={dataPoints}
            lineColor='#b8fe13'
            gradientColorStart='rgba(184, 254, 19, 0.4)'
            gradientColorEnd='rgba(184, 254, 19, 0)'
            className='w-full h-full'
          />
        ) : (
          !loading && <p className='text-light-800'>No data available</p>
        )}
      </div>
      <div className='flex items-center justify-end gap-2 w-full'>
        {["daily", "monthly"].map((type) => (
          <button
            key={type}
            onClick={() => setView(type as typeof view)}
            className={`px-2 py-1 rounded-sm text-start  text-xs hover:text-dark-800 hover:bg-primary/90 bg-dark-800 ${
              view === type
                ? "bg-primary text-dark-800"
                : "bg-dark-600 text-light-800"
            }`}
          >
            {type === "daily" ? "Today" : "Monthly"}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Statistics
