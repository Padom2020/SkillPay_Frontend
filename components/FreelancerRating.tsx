import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type Props = {
  rating: number
}
const FreelancerRating = ({rating}: Props) => {
  return (
    <>
    {
      rating === 0 && <div className="flex items-start">
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
      </div>
    }
    {
      rating === 1 && <div className="flex items-start">
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
      </div>
    }
    {
      rating === 2 && <div className="flex items-start">
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
      </div>
    }
    {
      rating === 3 && <div className="flex items-start">
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
      </div>
    }
    {
      rating === 4 && <div className="flex items-start">
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
      </div>
    }
    {
      rating === 5 && <div className="flex items-start">
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
      </div>
    }
    {
      rating === 6 && <div className="flex items-start">
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiOutlineStar /></span>
      </div>
    }
    {
      rating === 7 && <div className="flex items-start">
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
        <span className="text-[#FFC303]"><AiFillStar /></span>
      </div>
    }
    </>
  )
};
export default FreelancerRating;