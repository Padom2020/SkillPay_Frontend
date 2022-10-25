import { freelancers, PostedJobs } from '../mockData';
import { freelancerTRype } from '../interfaces';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
   //    console.log(PostedJobs);

   return (
      <div className='relative'>
         <Banner />

         <HowItWorks />
      </div>
   );
};

export default Home;
