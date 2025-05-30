import { formatDate } from "@/components/formatDate"
import { getEventBySlug } from "@/sanity/lib/api"
import { PortableText } from "next-sanity"
import { notFound } from "next/navigation" //Todo
import { GoLocation } from 'react-icons/go'
import { AiOutlineCalendar } from 'react-icons/ai'
import Image from "next/image"

async function EventDetailsPage( { params }) {

    const { slug } = params

    const event = await getEventBySlug(slug)
    if(!event) {
      notFound()
    }

    return (
    <div className="wrapper">
      <div className="w-full h-auto max-w-4xl mx-auto mt-10 ">
        <Image className="h-full w-full object-cover rounded-xl mt-10" 
        src={event.image.url} 
        alt={event.image.alt} 
        height={400} 
        width={600}/>
      </div>
      <div className="flex flex-col item-center justify-between gap-2 my-10">
        <h1 className="text-3xl font-bold">{event.title}</h1>
       
        <div className=" ml-6 text-gray-400">
                <p> 
                  <GoLocation className="inline-block mr-2" size={20} />
                  {event.location}</p>
                <p>
                  <AiOutlineCalendar className="inline-block mr-2" size={20} />
                  {formatDate(event.date)}
                </p> 
          </div>
          <div className="prose text-gray-400 mt-4">
    
            <h2 className="text-2xl text-gray-300 font-bold">Description</h2>
            <PortableText className="text-gray-400" value={event.description} />
          </div>

      </div>
    </div>

  )
}

export default EventDetailsPage