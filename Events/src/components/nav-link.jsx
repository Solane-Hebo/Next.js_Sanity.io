"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ children, href, className}) {

  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(href + '/')
  return (
    <Link href={href} className={cn(' hover:bg-sky-500 p-1', isActive ? 'bg-sky-400' : 'text-white')}>
       {children}
    </Link>
  )
}
