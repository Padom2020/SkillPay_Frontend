import Link from 'next/link';
import Layout from '../components/Layout';
import Home from './home';

const IndexPage = () => (
   <Layout title='SkillPay'>
      <section>
         <Home />
      </section>
      <h1>Hello Next.js 👋</h1>
      <p>
         <Link href='/about'>
            <a>About</a>
         </Link>
      </p>
   </Layout>
);

export default IndexPage;
