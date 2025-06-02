import Link from "next/link";

export default function Home() {
  return (
    <Link href="/pages/select">
      <div className="flex items-center justify-center h-screen">
        <button
          className="
            bg-white text-blue-300 px-4 py-5 rounded-xl hover:bg-gray-100 font-bold text-center text-5xl
          "
        >
        Click to start !
        </button>
      </div>
      
    </Link>
  )
}