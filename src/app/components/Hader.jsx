'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Header() {
  const pathname = usePathname()
 
  return (
    <nav 
    className= "bg-yellow-100 h-20 flex justify-around p-8 font-extrabold font-serif"
    

    >
      <Link className={`link ${pathname === '/' ? 'active underline' : ''}`} href="/">
        Home
      </Link>
      <Link
        className={`link ${pathname === '/dashborad' ? 'active underline' : ''}`}
        href="/dashborad"
      >
        DashBorad
      </Link>
 
      <Link
        className={`link ${pathname === '/about' ? 'active underline' : ''}`}
        href="/about"
      >
        About
      </Link>
    </nav>
  )
}