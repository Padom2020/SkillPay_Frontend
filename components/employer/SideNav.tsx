import React from "react";
import Link from "next/link";
import { BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { MdNotificationsNone, MdOutlineSpaceDashboard } from "react-icons/md";
import { RiLogoutCircleRLine, RiGroupLine } from "react-icons/ri";
import {  AiOutlineCreditCard, AiOutlineVerified } from "react-icons/ai";
import classNames from "classnames";
import { useRouter } from "next/router";

const SideNav = () => {
  const router = useRouter();
  return (
    <div className="hidden md:flex flex-col justify-between pl-16 mt-10 w-[20%] pb-10">
    <div className="flex flex-col space-y-4">
      <div className="hover:cursor-pointer">
        <Link href={"/employer"}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/employer"
            })}><MdOutlineSpaceDashboard /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/employer"})}>Dashboard</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={"/employer/messages"}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white ": router.pathname === "/employer/messages"
            })}><BiMessageSquareDetail /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/employer/messages"})}>Messages</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={"/employer/notifications"}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/employer/notifications"
            })}><MdNotificationsNone /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/employer/notifications"})}>Notifications</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={"/employer/profile"}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/employer/profile"
            })}><BiUser /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/employer/profile"})}>Profile</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={"/employer/candidates"}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/employer/candidates"
            })}><RiGroupLine /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/employer/candidates"})}>Candidates</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={"/employer/employees"}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/employer/employees"
            })}><RiGroupLine /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/employer/employees"})}>Employees</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={"/employer/payroll"}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/employer/payroll"
            })}><AiOutlineCreditCard /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/employer/payroll"})}>Payroll</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={"/employer/projects"}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/employer/projects"
            })}><AiOutlineCreditCard /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/employer/projects"})}>Projects</span>
          </a>
        </Link>
      </div>
      <div className="hover:cursor-pointer">
        <Link href={"/employer/account"}>
          <a className="flex items-center space-x-2">
            <span className={classNames("p-[2px]", {
              "bg-orange text-white": router.pathname === "/employer/account"
            })}><AiOutlineVerified /></span>
            <span className={classNames({"text-[#020648] font-[500]": router.pathname === "/employer/account"})}>Account</span>
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

export default SideNav