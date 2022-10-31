import { BiMessageAltDetail } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import FreelancerRating from "./FreelancerRating";

type Props = {
  freelancer: {
    id: number,
    picture: string,
    name: string,
    title: string,
    Bio: string,
    jobCompleted: number,
    rating: number,
    verified: boolean,
  },
  handleViewProfile?: (id: number) => (evt: React.MouseEvent) => void,
}
const Freelancer = ({freelancer, handleViewProfile}: Props) => {
  const handleMsgClick = (evt: React.MouseEvent) => {

  };


  return (
    <div className="py-5 px-3 shadow-xl">
      <div className="flex justify-between">
        <div className="flex space-x-3">
          <img src={freelancer.picture} alt="" className="rounded-full w-12 h-12" />
          <div>
            <p className="font-[500] text-[14px] md:text-[20px]">{freelancer.name}</p>
            <p className="font-[400] text-sm text-[16px]">{freelancer.title}</p>
          </div>
        </div>
        {
          freelancer.verified && <div><BsCheckCircle className="text-[#0CA789]" /></div>
        }
      </div>
      <div className="my-2 text-xs truncate-line-clamp text-[rgba(8, 8, 18, 0.7)] md:text-[14px] font-[400]">{freelancer.Bio}</div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          {
            freelancer.verified && <div><BsCheckCircle className="text-[#0CA789]" /></div>
          }
          <div className="flex items-center space-x-1">
            <span className="font-[500]">{freelancer.jobCompleted}</span>
            <span>Job Completed</span>
          </div>
        </div>
        <div><FreelancerRating rating={freelancer.rating} /></div>
      </div>
      <div className="flex items-center space-x-3 justify-between">
        <div className="border-2 border-orange py-[2px] px-3 rounded-lg flex items-center space-x-3 text-orange hover:cursor-pointer hover:shadow-md" onClick={handleMsgClick}>
          <span><BiMessageAltDetail /></span>
          <span>Message</span>
        </div>
        <div className="text-white bg-orange py-1 px-3 rounded-lg flex items-center space-x-3 hover:cursor-pointer hover:shadow-md" onClick={handleViewProfile(freelancer.id)}>
          <span><RiUser3Line /> </span>
          <span>View Profile</span>
        </div>
      </div>
    </div>
  )
};

export default Freelancer;