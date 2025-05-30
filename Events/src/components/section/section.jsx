import { getEvents } from "@/sanity/lib/api"
import { Events } from "./Events"
import { Features } from "./features"
import Hero from "./hero"

export const Sections = async({sections}) => {
  const events = await getEvents()

  const seen = new Set()
  const filteredSection = sections.filter((section) => {
    const key = `${section._type}-${section.title}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

      return (
        <div className="space-y-20">
          {
            filteredSection.map(section => {
            switch (section._type) {
              case "featuresSection":
                return <Features key={section._key} title={section.title} features={section.features} />    
              case "heroSection":
                return <Hero key={section._key} headline={section.headline} image={section.image} description={section.description}/>
              case "eventSection":
                return <Events  key={section._key} title={section.title} events={events} />
                default: 
                 return null
            }
          })
         }
        </div>
      )
    }
    
    


