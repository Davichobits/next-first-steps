import { CartCounter } from "@/shopping-cart/components/CartCounter"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Counter page for the dashboard',
}

const getCount = async (): Promise<{count:number}> =>{
  const data = await fetch('http://localhost:3000/api/counter').then(data=>data.json());
  console.log('DATA', data);
  return data;
}

export default async function Counter() {

  const {count} = await getCount();
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      {
        count !== undefined && <CartCounter value={count} />
      }
      
    </div>
  )
}