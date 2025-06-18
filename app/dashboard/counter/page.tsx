import { CartCounter } from "@/app/shopping-cart/components/CartCounter"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Counter page for the dashboard',
}

export default function Counter() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  )
}