import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import Freelancers from '../components/Freelancers';

const Home = () => {
   //    console.log(PostedJobs);

   return (
      <div className='relative'>
         <Banner />
         <HowItWorks />
         <Freelancers />
      </div>
   );
};

export default Home;
