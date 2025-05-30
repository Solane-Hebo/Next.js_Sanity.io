"use client"
import { useRouter } from "next/navigation"
import { startTransition, useEffect } from "react"

function Error({ error, reset}) {

    const router = useRouter()

    useEffect(() => {
        console.error("Something went wrong:", error)
    }, [error])

    const reload = () => {
        startTransition(() => {
            router.refresh()
            reset()
        })
    }

  return (
    <div className="text-6xl h-96 flex flex-col item-center justify-center">
        {error.message}
      <button className="hover:bg-sky-500 rounded bg-sky-700 p-2" onClick={() => reload()}>Try again</button>
    </div>
  )
}

export default Error