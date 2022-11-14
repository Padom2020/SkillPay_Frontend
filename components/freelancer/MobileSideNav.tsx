import React, {useEffect} from "react";
import Link from "next/link";
import { BiMessageSquareDetail, BiUser } from "react-icons/bi";
import { MdNotificationsNone, MdOutlineSpaceDashboard, MdClose } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {  AiOutlineCreditCard, AiOutlineVerified } from "react-icons/ai";
import classNames from "classnames";
import { useRouter } from "next/router";

type Props = {
  showMenu: boolean,
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileSideNav = ({showMenu, setShowMenu}: Props) => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) setShowMenu(false)
  }, [router.isReady])

  return (
    <div className={classNames({
      "left-0 top-0 right-0 bottom-0 bg-orange/20 z-70 ease-in-out fixed duration-800": showMenu,
      "md:hidden z-70": !showMenu
    })}>
      <div className={classNames("fixed top-0 bg-gradient-to-r from-primary to-primary/90 shadow-xl shadow-orange w-[80%] sm:w-[50%] ease-in", {
        "left-0 duration-700": showMenu,
        "-left-[100%] duration-900": !showMenu
      })}>
        <div className="my-3">
          <div className="flex justify-end">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center mr-3">
              <MdClose className="w-6 h-6 text-orange" onClick={() => setShowMenu(false)} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pl-4 mt-10 pb-10">
          <div className="flex flex-col space-y-4">
            <div className={classNames("flex items-center space-x-2 hover:cursor-pointer text-white", {
              "bg-orange font-[500] px-2 rounded-md mr-6": router.pathname === "/freelancer"
            })}>
              <Link href={"/freelancer"}>
                <a className="flex items-center space-x-2">
                  <span className=" p-[2px]"><MdOutlineSpaceDashboard /></span>
                  <span className="">Dashboard</span>
                </a>
              </Link>
            </div>
            <div className={classNames("hover:cursor-pointer text-white", {
              "bg-orange font-[500] px-2 rounded-md mr-6": router.pathname === "/freelancer/messages"
            })}>
              <Link href="/freelancer/messages">
                <a className="flex items-center space-x-2 ">
                  <span className="p-[2px]"><BiMessageSquareDetail /></span>
                  <span className="">Messages</span>
                </a>
              </Link>
            </div>
            <div className={classNames("hover:cursor-pointer text-white", {
              "bg-orange font-[500] px-2 rounded-md mr-6": router.pathname === "/freelancer/notifications"
            })}>
              <Link href={"/freelancer/notifications"}>
                <a className="flex items-center space-x-2">
                  <span className="p-[2px] text-white"><MdNotificationsNone /></span>
                  <span className="">Notifications</span>
                </a>
              </Link>
            </div>
            <div className={classNames("hover:cursor-pointer text-white", {
              "bg-orange font-[500] px-2 rounded-md mr-6": router.pathname === "/freelancer/earnings"
            })}>
              <Link href={"/freelancer/earnings"}>
                <a className="flex items-center space-x-2">
                  <span className="p-[2px]"><AiOutlineCreditCard /></span>
                  <span>Earnings</span>
                </a>
              </Link>
            </div>
            <div className={classNames("hover:cursor-pointer text-white", {
              "bg-orange font-[500] px-2 rounded-md mr-6": router.pathname === "/freelancer/products"
            })}>
              <Link href={"/freelancer/products"}>
                <a className="flex items-center space-x-2">
                  <span className="p-[2px]"><AiOutlineCreditCard /></span>
                  <span>Products</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-14">
            <div className={classNames("flex items-center space-x-2 hover:cursor-pointer text-white")}>
              <Link href={""}>
                <>
                <span className="p-[2px]"><RiLogoutCircleRLine /></span>
                <span>Logout</span>
                </>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSideNav