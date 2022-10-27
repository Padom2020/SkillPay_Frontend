import Link from 'next/link';
import Layout from '../components/Layout';
import Home from './home';

const IndexPage = () => (
   <Layout title='SkillPay'>
      <section>
         <Home />
      </section>
   </Layout>
);

export default IndexPage;
