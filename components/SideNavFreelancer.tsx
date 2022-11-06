import React from "react";
import Link from "next/link";
import { BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { MdNotificationsNone, MdOutlineSpaceDashboard } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {  AiOutlineCreditCard, AiOutlineVerified } from "react-icons/ai";

const SideNavFreelancer = () => {
  return (
    <div className="hidden md:flex flex-col justify-between pl-16 mt-10 w-[20%] pb-10">
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2 hover:cursor-pointer">
        <Link href={""}>
          <>
          <span className="bg-orange text-white p-[2px]"><MdOutlineSpaceDashboard /></span>
          <span className="text-[#020648] font-[500]">Dashboard</span>
          </>
        </Link>
      </div>
      <div className="flex items-center space-x-2 hover:cursor-pointer">
        <Link href={""}>
          <>
          <span className="p-1"><BiMessageSquareDetail /></span>
          <span>Messages</span>
          </>
        </Link>
      </div>
      <div className="flex items-center space-x-2 hover:cursor-pointer">
        <Link href={""}>
          <>
          <span className="p-1"><MdNotificationsNone /></span>
          <span>Notifications</span>
          </>
        </Link>
      </div>
      <div className="flex items-center space-x-2 hover:cursor-pointer">
        <Link href={""}>
          <>
          <span className="p-1"><BiUser /></span>
          <span>Profile</span>
          </>
        </Link>
      </div>
      <div className="flex items-center space-x-2 hover:cursor-pointer">
        <Link href={""}>
          <>
          <span className="p-1"><AiOutlineCreditCard /></span>
          <span>Earnings</span>
          </>
        </Link>
      </div>
      <div className="flex items-center space-x-2 hover:cursor-pointer">
        <Link href={""}>
          <>
          <span className="p-1"><AiOutlineVerified /></span>
          <span>Account</span>
          </>
        </Link>
      </div>
    </div>
    <div className="">
      <div className="flex items-center space-x-3 hover:cursor-pointer">
        <Link href={""}>
          <>
          <span className="p-1"><RiLogoutCircleRLine /></span>
          <span>Logout</span>
          </>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default SideNavFreelancer