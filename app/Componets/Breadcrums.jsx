"use client"
import React from 'react'
import { usePathname } from "next/navigation";
import Link from 'next/link';
import arrow from "../Assets/arrow.png"
import Image from 'next/image';

const Breadcrums = () => {

  const pathname = usePathname();

  const pathnameLocation = pathname.split("/").filter(Boolean);

  return (
    <div className='container border-t-2 border-[#F0EFED] '>
        <div className="flex items-center gap-2  text-sm mt-6">
          <Link href="/">Home</Link>
          {pathnameLocation.map((item, index) => {
            const href = "/" + pathnameLocation.slice(0, index + 1).join(">");

            return (
              <div key={index} className="flex items-center gap-2">
                <span> <Image src={arrow} /> </span>

                <Link href={href} className="capitalize hover:text-blue-500">
                  {item.replace("-", " ")}
                </Link>
              </div>
            );
          })}
        </div>

    </div>
  )
}

export default Breadcrums
