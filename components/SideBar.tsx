"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { links } from '@/data/sideMenu'
import { Settings2 } from 'lucide-react'

const SideBar = () => {
  
  const pathname = usePathname();

  return (
    <section className='w-72 bg-white py-4'>
      <div className='px-4 md:px-8 mb-12'>
            <Link href={'/dashboard'} className='text-base md:text-lg font-extrabold flex items-center gap-x-2'>
                <Settings2 className='h-4 w-4' />
                <p>Dashboard</p>
            </Link>
        </div>
      <div className='flex flex-col justify-between gap-y-6'>
        {links.map(item => (
          <div key={item.title} className='flex flex-col mb-4'>
            <h3 className='font-bold uppercase text-gray-500 text-[16px] px-6'>{item.title}</h3>
            {item.links.map(link => (
              <Link className={`flex items-center gap-x-4 my-2 py-3 px-6  ${pathname === `/${link.name}` ? 'bg-blue-600 text-white' : 'hover:bg-black/10 text-gray-800' }`} key={link.name} href={link.name}>
                <link.icon className='h-4 w-4 opacity-90 hover:opacity-100' />
                <p className='capitalize text-sm font-semibold'>{link.name}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SideBar