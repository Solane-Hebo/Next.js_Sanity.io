import Link from "next/link"


const NotFound = () => {
  return (
    <div className="space-y-10 items-center text-center justify-center" >
        <h1 className="text-2xl md:text-4xl font-bold mt-20">404 - Can't find the page you are looking for</h1>
        <button className="bg-sky-950 mt-6 px-4 py-2 text-white rotate-1">
            <Link href="/" replace> Back to Home</Link>
            </button>

    </div>
  )
}

export default NotFound