import React, { useState } from 'react';
import Layout from '../components/Layout';
import { BiBookAdd } from 'react-icons/bi';
//import JobDescEditor from '../components/JobDescEditor';
import MilestoneRight from '../components/MilestoneRight';
import MilestoneLeft from '../components/MilestoneLeft';

type Props = {};

const Milestone = (props: Props) => {
   const [stage1Form, setStage1Form] = useState({
      from: "",
      to: "",
      amount: "",
      uploadOne: "",
      uploadTwo: "",
      desc: "",
   });
   const [uploadStage1, setUploadStage1] = useState({
      file1: "",
      file2: "",
   })
   const onChangeStage1 = (input: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
      setStage1Form({
         ...stage1Form,
         [input]: evt.target.value
      })
   };
   const [stage2Form, setStage2Form] = useState({
      from: "",
      to: "",
      amount: "",
      uploadOne: "",
      uploadTwo: "",
      desc: "",
   });
   const [uploadStage2, setUploadStage2] = useState({
      file1: "",
      file2: "",
   })
   const onChangeStage2 = (input: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
      setStage2Form({
         ...stage2Form,
         [input]: evt.target.value
      })
   };
   const [stage3Form, setStage3Form] = useState({
      from: "",
      to: "",
      amount: "",
      desc: "",
   });
   const [uploadStage3, setUploadStage3] = useState({
      file1: "",
      file2: "",
   })
   const onChangeStage3 = (input: string) => (evt: React.ChangeEvent<HTMLInputElement>) => {
      setStage3Form({
         ...stage3Form,
         [input]: evt.target.value
      })
   };
   const handleSave = (evt: React.MouseEvent) => {
      evt.stopPropagation();
      const formData = new FormData();
      
      formData.append("stage1", JSON.stringify({
         from: stage1Form.from,
         to: stage1Form.to,
         amount: stage1Form.amount
      }));
      formData.append("stage2", JSON.stringify({
         from: stage2Form.from,
         to: stage2Form.to,
         amount: stage2Form.amount
      }));
      formData.append("stage3", JSON.stringify({
         from: stage3Form.from,
         to: stage3Form.to,
         amount: stage3Form.amount
      }));
      console.log(formData.get("stage1"));
      return;
   }
   return (
      <Layout>
         <hr />
         <div className='max-w-[80%] mx-auto'>
            <div className='flex justify-between items-center py-3'>
               <h3 className='font-semibold'>Milestones</h3>
               <div className='flex items-center space-x-2'>
                  <BiBookAdd />
                  <span className='text-sm font-semibold'>Add Milestone</span>
               </div>
            </div>
            <h4 className='font-semibold py-2 text-center md:text-left'>Stage 1</h4>
            <div className='flex space-y-5 md:space-y-0 md:space-x-5 flex-col md:flex-row'>
               {/* left side */}
               <div className='w-full md:w-[20%] pt-6'>
                  <MilestoneLeft stage={1} stageForm={stage1Form} onChange={onChangeStage1} />
               </div>
               {/* right side */}
               <div className='w-full md:w-[80%]'>
                  {/* <JobDescEditor /> */}
                  <MilestoneRight uploadStage={uploadStage1} setUploadStage={setUploadStage1} />
               </div>
            </div>
         </div>
         {/* stage 2 */}
         <div className='my-4'>
           <hr />
            <div className='max-w-[80%] mx-auto'>
               <h4 className='font-semibold py-2 text-center md:text-left'>Stage 2</h4>
               <div className='flex space-y-5 md:space-y-0 md:space-x-5 flex-col md:flex-row'>
                  {/* left side */}
                  <div className='w-full md:w-[20%] pt-6'>
                     <MilestoneLeft stage={2} stageForm={stage2Form} onChange={onChangeStage2} />
                  </div>
                  {/* right side */}
                  <div className='w-full md:w-[80%]'>
                     {/* <JobDescEditor /> */}
                     <MilestoneRight uploadStage={uploadStage2} setUploadStage={setUploadStage2} />
                  </div>
               </div>
            </div>
         </div>
         {/* stage 3 */}
         <div>
           <hr />
            <div className='max-w-[80%] mx-auto'>
               <h4 className='font-semibold py-2 text-center md:text-left'>Stage 3</h4>
               <div className='flex space-y-5 md:space-y-0 md:space-x-5 flex-col md:flex-row'>
                  {/* left side */}
                  <div className='w-[100%] md:w-[20%] pt-6'>
                     <MilestoneLeft stage={3} stageForm={stage3Form} onChange={onChangeStage3} />
                  </div>
                  {/* right side */}
                  <div className='w-full md:w-[80%]'>
                     {/* <JobDescEditor /> */}
                     <MilestoneRight uploadStage={uploadStage3} setUploadStage={setUploadStage3} />
                  </div>
               </div>
               <div className="flex justify-end my-3">
                  <p className='text-xs text-orange font-semibold'>
                     + Add more to this
                  </p>
               </div>
               <div className="flex justify-center md:justify-end my-3">
                  <button className='bg-orange text-white py-1 px-12 rounded-md' onClick={handleSave}>save</button>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Milestone;
