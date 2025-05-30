import { getPages } from "@/sanity/lib/api"
import NavLink from "./nav-link"
import Link from "next/link"

const Navbar = async() => {

  const pages = await getPages()

  return (
    <nav className="bg-sky-950 py-6 px-10 flex items-center p-4 justify-between text-white">
        <div className="flex flex-col md:flex-row gap-4">
          <Link href='/'>
           <h1 className="text-2xl text-center font-bold cursor-pointer bg-gradient-to-r from-green-400 via-amber-400 to-sky-400 ">Stockholm</h1>
          </Link>
        <p className="text-lg md:text-xl lg:text-2xl font-semibold">The capital of scandinavia</p>
        </div>
        <ul className="flex gap-3 font-bold cursor-pointer text-2xl">
          {
            pages.map(page => (
              <li key={page._id}>
                <NavLink href={`${page.slug === "/" ? '/': `/${page.slug}`}`}>{page.title}</NavLink> 
              </li>
            ))
          }
       </ul> 
    </nav>
  )
}

export default Navbar