import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import Freelancers from '../components/Freelancers';
import PostedJobs from '../components/PostedJobs';
import Category from '../components/Category';
import Newsletter from '../components/Newsletter';


const Home = () => {
   return (
      <div className=''>
         <section className='bg-white pb-8 lg:pb-16'>
            <Banner />
            <HowItWorks />
         </section>
         <section className='bg-[#F2F3F6]/50 pb-8 lg:pb-16'>
            <Freelancers />
         </section>
         <section className='bg-white pb-8 lg:pb-12'>
            <PostedJobs />
            <Category />
         </section>
         <section className='bg-[#F2F3F6]/50 pb-8 lg:pb-12'>
            <Newsletter />
         </section>
   
      </div>
   );
};

export default Home;
