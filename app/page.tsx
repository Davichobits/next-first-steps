import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-7xl">Home</span>
      <Link href='/about'>About Page</Link>
    </div>
  );
}
