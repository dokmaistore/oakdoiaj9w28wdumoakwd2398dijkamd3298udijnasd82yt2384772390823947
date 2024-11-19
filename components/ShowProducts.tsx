/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState, useEffect } from "react"
import { ProductsList } from "@/components/ProductsList"
import CartModal from "@/components/CartModal"
import PageHeadline from "./PageHeadline"
import Loading from "@/components/Loading"
import { useCart } from "@/context/CartContext"

const ShowProducts = () => {
  const [isCartOpen, setCartOpen] = useState(false)
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { cart } = useCart()
  console.log()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products from /api/get_products...")

        const response = await fetch("/api/get_products?all=true")
        const data = await response.json()
        console.log("Fetched products:", data)
        const productsWithIds = data.map((product: any) => ({
          ...product,
          name: product.name,
          details: product.details.map((detail: any) => ({
            ...detail,
            id: `${product.name.replace(/\s+/g, "")}-${detail.duration.replace(
              /\s+/g,
              "-",
            )}`,
          })),
        }))
        console.log("Processed products:", productsWithIds)
        setProducts(productsWithIds)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [cart])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PageHeadline
            headline='สินค้า'
            description='รับชม Netflix Premium ในราคาสุดประหยัด แต่คุณภาพเต็มขั้น เลือกแพ็กเกจที่คุ้มค่าที่สุดสำหรับคุณ พร้อมใช้งานทันที'
          />{" "}
          {cart.length > 0 && (
            <div className='fixed bottom-0 px-10 pt-10 pb-5 w-full bg-dark-700/40 backdrop-blur h-fit flex justify-center items-center border-t-[1px] border-dark-500'>
              <button
                onClick={() => setCartOpen(true)}
                className='bg-primary text-dark-800 py-2 rounded active:bg-primary/80 font-aktivGroteskBold text-xl px-4 w-full max-w-lg'
              >
                View Cart
              </button>
            </div>
          )}
          <ProductsList priceData={products} />
        </>
      )}
      <CartModal isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

export default ShowProducts
