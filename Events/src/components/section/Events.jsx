"use client"
import Image from "next/image"
import Link from "next/link"
import { formatDate } from "../formatDate"
import { GoLocation } from "react-icons/go"
import { AiOutlineCalendar } from "react-icons/ai"
import { useMemo, useState } from "react"

export const Events = ({title = "Events", events = []}) => {
  const [filter, setFilter] = useState("upcoming")

  const filteredEvents = useMemo(() => {
    const now = new Date()
    return events 
    .filter((event) => {
      const date = new Date(event.date)
      if (filter === "upcoming") return date >= now
      if (filter === "past") return date < now
      return true
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
  }, [events, filter])

  return (
    <div className="wrapper">
       <h2 className="text-4xl mb-10 font-bold">{title}</h2>
      
      <div className="flex mb-10 gap-4"> 
        {["upcoming", "past", "all"].map((type) => (
        <button 
        key={type} 
        onClick={() => setFilter(type)}
        className={`px-4 py-3 rounded border font-semibold ${ 
          filter === type
          ? "bg-sky-500 text-white"
          : "bg-sky-950 hover:bg-sky-900"
        }`}
        >
          {type === "upcoming"
          ? "Kommande"
          : type === "past"
          ? "Passerade"
          : "Alla"
          }

        </button>

        ))}
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
       {
       filteredEvents.map(event =>(
        <Link key={event._id} href={`/events/${event.slug}`} className=" border border-slate-500 rounded-xl overflow-hidden shadow-md hover:border-3 transition duration-300 mb-6 ease-in-out"> 
        <div className="w-full h-50 md:h-80 lg:h-80 xl:h-90 relative">
            <Image 
            src={event.image.url} 
            alt={event.image.alt} 
            fill 
            className="w-full h-full object-cover"/>
        </div>
        <h3 className="text-center p-3 text-xl">{event.title}</h3>
        <div className="text-gray-400 text-center">
        <p> <GoLocation className="inline-block mr-2" size={20} />
        {event.location}</p>
        <p> <AiOutlineCalendar className="inline-block mr-2" size={20} />
          {formatDate(event.date)}</p> 
        </div>
        </Link>
       ))
      }
       </div>
    </div>
  )
}
