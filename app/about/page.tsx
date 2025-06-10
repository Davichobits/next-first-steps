import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
  keywords: ['About Page', 'Información acerca de la página']
};

export default function AboutPage() {
  return (
    <div className="text-7xl">About Page</div>
  )
}
