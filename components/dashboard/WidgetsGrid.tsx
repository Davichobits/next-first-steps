'use client';
import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoAirplane } from "react-icons/io5"

export const WidgetsGrid = () => {

  const counter = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2">
        <SimpleWidget 
          title={`${counter}`} 
          subtitle='unidades'
          label='Contador'
          icon={<IoAirplane size={50}/>} 
          href="/dashboard/counter"
        />
        <SimpleWidget title="otro" />
      </div>
  )
}
