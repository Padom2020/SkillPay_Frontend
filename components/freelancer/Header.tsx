import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  return (
    <div className="hidden md:flex items-center space-x-6 text-[20px]">
      <Link href={"/messages"}>
        <a className={router.pathname === "/messages"?"text-orange":""}><BiMessageSquareDetail /></a>
      </Link>
      <Link href={""}>
        <a className={router.pathname==="/notifications"?"text-orange":""}><MdNotificationsNone /></a>
      </Link>
      <div className="flex items-center space-x-2 text-base">
        <img src="/images/freelancer.svg" alt="avatar" className="w-6 h-6 rounded-full" />
        <span>John Doe</span>
      </div>
    </div>
  )
}

export default Header