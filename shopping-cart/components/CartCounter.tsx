'use client'
import { useAppDispatch, useAppSelector } from "@/store"
import { addOne, substracctOne, initCounter } from "@/store/counter/counterSlice"
import { useEffect, useState } from "react"

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [loading, setLoading] = useState(true);

  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    console.log('useEffect');
    dispatch(initCounter(value))
    setLoading(false)
  }, [dispatch, value]);

  return (
    <>
    {
      loading ? <span className="text-9xl">Cargando...</span> : <span className="text-9xl">{count}</span>
    }

      <div className="flex gap-2">
        <button onClick={()=>dispatch(addOne())} className="bg-gray-900 text-white p-2 hover:bg-gray-600 cursor-pointer transition-all w-[100px] rounded-lg">+1</button>
        <button onClick={()=>dispatch(substracctOne())} className="bg-gray-900 text-white p-2 hover:bg-gray-600 cursor-pointer transition-all w-[100px] rounded-lg">-1</button>
      </div>
    </>
  )
}
