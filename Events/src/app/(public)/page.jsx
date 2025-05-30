import { Sections } from "@/components/section/section";
import { getPageBySlug } from "@/sanity/lib/api";


export default async function HomePage() {

   const pageResult = await getPageBySlug('/')
  
  return (
   <div>
         <Sections sections={pageResult.sections}/>
   
   
   </div>
  );
}
