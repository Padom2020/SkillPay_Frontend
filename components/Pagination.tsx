import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";

const Pagination = () => {
  return (
    <div className="flex items-center space-x-3 md:pr-10">
      <div className="w-7 h-7 flex items-center justify-center hover:cursor-pointer">
        <span className="text-2xl rounded-full border border-[#020648]"><VscArrowSmallLeft /></span>
      </div>
      <div className="w-7 h-7 rounded-full text-center bg-gray-pagination text-white hover:cursor-pointer">1</div>
      <div className="w-7 h-7 rounded-full text-center hover:cursor-pointer">2</div>
      <div className="w-7 h-7 rounded-full text-center hover:cursor-pointer">3</div>
      <div className="w-7 h-7 rounded-full text-center">...</div>
      <div className="w-7 h-7 rounded-full text-center hover:cursor-pointer">12</div>
      <div className="w-7 h-7 flex items-center justify-center hover:cursor-pointer">
        <span className="text-2xl bg-[#020648] text-white rounded-full"><VscArrowSmallRight /></span>
      </div>
    </div>
  )
};

export default Pagination;