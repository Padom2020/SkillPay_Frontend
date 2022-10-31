import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import FreelancerRating from "./FreelancerRating";

type Props ={
  review: {
    [index: string]: string | number,
    rating: number
  }
}
const FreelancerReview = ({review}: Props) => {
  return (
    <div className="w-[400px] rounded-[5px] px-3 pt-3 bg-[#FAFBFC]">
      <div className="text-[rgba(8, 8, 18, 0.7)] text-[14px] font-[400]">{review.comment}</div>
      <div className="flex items-center space-x-2 mb-3 mt-8">
        <div>
          <img src={review.avatar as string} alt="" className="" />
        </div>
        <div>
          <div className="flex justify-between items-center">
            <p className="text-[#080812] font-[500] text-[14px]">{review.name}</p>
            <FreelancerRating rating={review.rating} />
          </div>
          <div className="text-[rgba(8, 8, 18, 0.7)] font-[400]">{review.role} {review.workPlace}</div>
        </div>
      </div>
    </div>
  )
};

export default FreelancerReview;