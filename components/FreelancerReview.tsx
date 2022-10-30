import { AiFillStar, AiOutlineStar } from "react-icons/ai";

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
            {
              review.rating === 0 && <div className="flex items-start">
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
              review.rating === 1 && <div className="flex items-start">
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
              review.rating === 2 && <div className="flex items-start">
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
              review.rating === 3 && <div className="flex items-start">
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
              review.rating === 4 && <div className="flex items-start">
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
              review.rating === 5 && <div className="flex items-start">
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
              review.rating === 6 && <div className="flex items-start">
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
              review.rating === 7 && <div className="flex items-start">
                <span className="text-[#FFC303]"><AiFillStar /></span>
                <span className="text-[#FFC303]"><AiFillStar /></span>
                <span className="text-[#FFC303]"><AiFillStar /></span>
                <span className="text-[#FFC303]"><AiFillStar /></span>
                <span className="text-[#FFC303]"><AiFillStar /></span>
                <span className="text-[#FFC303]"><AiFillStar /></span>
                <span className="text-[#FFC303]"><AiFillStar /></span>
              </div>
            }
          </div>
          <div className="text-[rgba(8, 8, 18, 0.7)] font-[400]">{review.role} {review.workPlace}</div>
        </div>
      </div>
    </div>
  )
};

export default FreelancerReview;