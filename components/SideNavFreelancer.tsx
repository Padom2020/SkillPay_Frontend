import React from "react";
import Link from "next/link";
import { BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { MdNotificationsNone, MdOutlineSpaceDashboard } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {  AiOutlineCreditCard, AiOutlineVerified } from "react-icons/ai";
import classNames from "classnames";
import { useRouter } from "next/router";

const SideNavFreelancer = () => {
  const router = useRouter();
  return (
    <div className="hidden md:flex flex-col justify-between pl-16 mt-10 w-[20%] pb-10">
    <div className="flex flex-col space-y-4">
      <div className="hover:cursor-pointer">
        <Link href={""}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/freelancer"
            })}><MdOutlineSpaceDashboard /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/freelancer"})}>Dashboard</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={""}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white ": router.pathname === "/freelancer/messages"
            })}><BiMessageSquareDetail /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/freelancer/messages"})}>Messages</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={""}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/freelancer/notifications"
            })}><MdNotificationsNone /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/freelancer/notification"})}>Notifications</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={""}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/freelancer/profile"
            })}><BiUser /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/freelancer/profile"})}>Profile</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={""}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/freelancer/earnings"
            })}><AiOutlineCreditCard /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/freelancer/earnings"})}>Earnings</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={""}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/freelancer/account"
            })}><AiOutlineVerified /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/freelancer/account"})}>Account</span>
          </a>
        </Link>
      </div>
    </div>
    <div className="">
      <div className="hover:cursor-pointer">
        <Link href={""}>
          <a className="flex items-center space-x-2">
            <span className="p-1"><RiLogoutCircleRLine /></span>
            <span>Logout</span>
          </a>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default SideNavFreelancer