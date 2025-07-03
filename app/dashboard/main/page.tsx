import { Metadata } from "next"
import { SimpleWidget } from "@/components"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Main page for the dashboard',
}

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información General</span>
      <div className="flex flex-wrap p-2">
        <SimpleWidget />
      </div>
    </div>
  )
}