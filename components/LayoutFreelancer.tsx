
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import classNames from "classnames";
import HeaderFreelancer from "./HeaderFreelancer";
import SideNavFreelancer from "./SideNavFreelancer";
import MobileSideNavFreelancer from "./MobileSideNavFreelancer";

type Props = {
  title?: string,
  children?: React.ReactNode
}
const LayoutFreelancer = ({title, children}: Props) => {
  const router = useRouter();
  const [isScrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY === 0) setScrolling(false);
      else setScrolling(true);
    }
  }, [])
  return (
    <div>
      <Head>
         <title>{title}</title>
         <meta charSet='utf-8' />
         <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
         />
      </Head>
      {/* HAEDER NAV */}
      <div className={classNames("flex pl-8 md:px-12 items-center justify-between py-3 sticky top-0 left-0 right-0 border-b-2", {
        "bg-white shadow-xl z-70": isScrolling
      })}>
        <div className="hover:cursor-pointer">
          <Link href='/'>
            <>
            <span className='text-primary font-[700] text-[20px]'>
                Skill
            </span>
            <span className='text-orange font-[700] text-[20px]'>Pay</span>
            </>
          </Link>
        </div>
        <div>
          <HeaderFreelancer />
        </div>
        {/* HANBURDER */}
        <div className="text-orange text-xl cursor-pointer mr-2 block md:hidden" onClick={() => setShowMenu(true)}><FaBars /></div>
      </div>
      <div className="flex">
        {/* SIDE NAV */}
        <SideNavFreelancer />
        <MobileSideNavFreelancer showMenu={showMenu} setShowMenu={setShowMenu} />
        {/* CONTENT */}
        <div className="w-[100%] md:w-[80%]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default LayoutFreelancer