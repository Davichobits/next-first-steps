'use client'
import { useState } from "react"

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <>
    <span className="text-9xl">{count}</span>

      <div className="flex gap-2">
        <button onClick={increment} className="bg-gray-900 text-white p-2 hover:bg-gray-600 cursor-pointer transition-all w-[100px] rounded-lg">+1</button>
        <button onClick={decrement} className="bg-gray-900 text-white p-2 hover:bg-gray-600 cursor-pointer transition-all w-[100px] rounded-lg">-1</button>
      </div>
    </>
  )
}
