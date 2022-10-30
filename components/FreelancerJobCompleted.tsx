type Props = {
  job:  {[index: string]: string}
}

const FreelancerJobCompleted = ({job}: Props) => {
  return (
    <div className="w-[400px] rounded-[5px] shadow-lg px-3 pt-3 bg-white">
      <div>
        <img src={job.image} alt="" className="rounded-[5px]" />
      </div>
      <p className="text-[#080812] font-[400] text-[18px] mt-3 mb-4">{job.desc}</p>
    </div>
  )
};

export default FreelancerJobCompleted;