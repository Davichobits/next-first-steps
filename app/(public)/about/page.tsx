import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
  keywords: ['About Page', 'Información acerca de la página']
};

export default function AboutPage() {
  return (
    <span className="text-7xl">About Page</span>
  )
}
