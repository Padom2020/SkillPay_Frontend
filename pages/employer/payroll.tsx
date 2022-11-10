import React, { useState } from 'react';
import Layout from '../../components/employer/Layout';
import ReactApexChart from 'react-apexcharts';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';

const Payroll = () => {
   //data for payroll
   const [chart, setChart] = useState({
      options: {
         chart: {
            id: 'apexchart-example',
         },
         plotOptions: {
            bar: {
               horizontal: false,
               columnWidth: '25%',
               endingShape: 'rounded',
            },
         },
         dataLabels: {
            enabled: false,
         },
         legend: {
            position: 'top',
         },
         title: {
            text: 'Payroll Summary',
            style: {
               fontSize: '14px',
            },
         },
         stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
         },
         // yaxis: {
         //    title: {
         //       text: '$ (thousands)',
         //    },
         // },
         colors: ['#170455', '#F24726'],
         fill: {
            opacity: 1,
         },
         tooltip: {
            y: {
               formatter: function (val) {
                  return '$ ' + val + ' thousands';
               },
            },
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
            ],
         },
      },
      series: [
         {
            name: 'Taxes',
            data: [44, 55, 57, 56, 61, 58, 63],
         },
         {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91],
         },
      ],
   });
   return (
      <Layout title='SkillPay | Employer Payroll'>
         <div className='pt-10 max-w-[90%]'>
            <div className='flex items-center justify-between pb-5'>
               <div className='flex items-baseline space-x-1'>
                  <h3 className='font-semibold'>Payroll</h3>
                  <span className='text-[10px] font-semibold text-[#948D8D]'>
                     110
                  </span>
               </div>
               <div className='flex items-center space-x-3 bg-[#f3f4f6] p-1 rounded-sm'>
                  <FaCalendarAlt className='text-sm' />
                  <div className='flex items-center space-x-2 text-sm'>
                     <p>Time period: Today</p>
                     <AiFillCaretDown />
                  </div>
               </div>
            </div>
            <div className='flex space-x-3'>
               <div className='w-[60%] border'>
                  <div className='p-3'>
                     <ReactApexChart
                        type='bar'
                        series={chart.series}
                        // @ts-expect-error
                        options={chart.options}
                        height={400}
                     />
                  </div>
               </div>
               <div className='w-[40%] border'>
                  <div className='p-3'>
                     <h3 className='font-bold'>Payment status</h3>
                     <p className='flex items-center space-x-5'>
                        <span>34</span>
                        <span>Employees</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Payroll;
