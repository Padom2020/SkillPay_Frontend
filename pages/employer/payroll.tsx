import React, { useState } from 'react';
import Layout from '../../components/employer/Layout';
import ReactApexChart from 'react-apexcharts';

const Payroll = () => {
   //data for payroll
   const [chart, setChart] = useState({
      options: {
         chart: {
            id: 'apexchart-example',
         },
         xaxis: {
            categories: [
               '1 Oct',
               '2 Oct',
               '3 Oct',
               '4 Oct',
               '5 Oct',
               '6 Oct',
               '7 Oct',
               '8 Oct',
               '9 Oct',
               '10 Oct',
               '11 Oct',
               '12 Oct',
            ],
         },
         fill: {
            type: 'solid',
         },
         colors: [
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
            '#F24726',
         ],
         dataLabels: {
            enabled: false,
         },
      },
      series: [
         {
            name: 'Earnings',
            data: [0, 30, 10, 35, 15, 40, 50, 65, 45, 65, 70, 0],
         },
      ],
   });
   return (
      <Layout title='SkillPay | Employer Payroll'>
         <div>Payroll now</div>
         <div>
            <ReactApexChart
               type='bar'
               series={chart.series}
               options={chart.options}
               height={300}
            />
         </div>
      </Layout>
   );
};

export default Payroll;
