import { freelancers, PostedJobs } from '../mockData';
import { freelancerTRype } from '../interfaces';

const Home = () => {
   //    console.log(PostedJobs);

   return (
      <div>
         {freelancers &&
            (freelancers as any).map((freelancer: freelancerTRype) => (
               <div key={freelancer.id} className=''>
                  {freelancer.title}
               </div>
            ))}
      </div>
   );
};

export default Home;
