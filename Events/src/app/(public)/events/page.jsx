
import { Sections } from "@/components/section/section"
import { getPageBySlug } from "@/sanity/lib/api"
import { notFound } from "next/navigation"

export default async function EventsPage() {

 const pageResult = await getPageBySlug('events')

 if(!pageResult || !pageResult.sections) {
  notFound()
 }

  return (
    <div>
      <Sections sections={pageResult.sections}/>
    </div>
  )
}

