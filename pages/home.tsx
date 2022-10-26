import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import Freelancers from '../components/Freelancers';
import PostedJobs from '../components/PostedJobs';

const Home = () => {
   //    console.log(PostedJobs);

   return (
      <div className=''>
         <section className='bg-white pb-16'>
            <Banner />
            <HowItWorks />
         </section>
         <section className='bg-[#F2F3F6]/50 pb-16'>
            <Freelancers />
         </section>
         <section className='bg-white'>
            <PostedJobs />
         </section>
      </div>
   );
};

export default Home;
