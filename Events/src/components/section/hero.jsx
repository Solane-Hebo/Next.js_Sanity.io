import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default function Hero({ headline, image }) {

  const opacityValue = image?.darken ? image.darken / 100 : 0
  return (
    <header className="h-90vh flex flex-col justify-center items-center text-center gap-6 relative">
      <h1 className={cn ("text-4xl font-bold py-4 relative z-20",
        image && "text-white"
      )}>{headline}</h1>
      {
        image?.asset && (
          <>
          <Image className="absolute w-full h-full object-cover z-0"
           src={urlFor(image.asset).url()} alt={image.alt} width={1080} height={900}/>
          <div className="bg-black absolute z-10 inset-0"  style={{opacity: 0.5}}></div>
          </>
        )
      }
    </header>
  )
}
