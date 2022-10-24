import Link from 'next/link';
import Layout from '../components/Layout';
import Home from './home';

const IndexPage = () => (
   <Layout title='SkillPay'>
      <h1>Hello Next.js 👋</h1>
      <p>
         <Link href='/about'>
            <a>About</a>
         </Link>
      </p>
      <Home />
   </Layout>
);

export default IndexPage;
