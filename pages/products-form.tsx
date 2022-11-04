import React, { useCallback, useRef, useState } from "react"
import { useDropzone } from "react-dropzone";
import { FaFileUpload } from "react-icons/fa"

const ProductsForm = () => {
  const [uploadLevel, setUploadLevel] =  useState(0);
  const [productForm, setProductForm] = useState({
    name: "",
    cat: "",
    desc: "",
    amount: 0
  });
  const onChange = (input: string) => (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProductForm({
      ...productForm,
      [input]: evt.target.value
    })
  }
  const progressBar = useRef<HTMLDivElement | null>(null)
  const [uploadData, setUpload] = useState([
    {
      name: "",
      size: 0,
      level: 0,
    }
  ])
  const onDrop = useCallback((files: File[]) => {
    //const byte = files[0].size;
    files.forEach((file, index) => {
      const progressList = document.getElementsByClassName("main");
      setUpload([
        ...uploadData,
        {
          name: file.name,
          size: file.size*0.001,
          level: 0
        }
      ])

      let width = 1;
    
      const progress = () => {
        if (width >= 100) {
          clearInterval(interId);
        } else {
          width++;
          const currEl = progressList[index] as HTMLElement;
          if (currEl) {
            currEl.style.width = `${width}%`;
            setUpload([...uploadData, {name: uploadData[index].name, size: uploadData[index].size, level: width}])
            setUploadLevel(width);
          }
        }
      }

      const interId = setInterval(progress, 10);

      progressList[index].classList.remove("main");
      //console.log(progressList.length);
    })
    
  }, [])
  const { getRootProps, getInputProps} = useDropzone({onDrop});
  
  return (
    <div>
      <div className="bg-white">
        <div className="flex justify-end">
            <span className="text-xl hover:cursor-pointer pt-2 pr-6">&times;</span>
          </div>
        <div>
          <div className="border border-gray3 p-6 mx-10 md:mx-20 mt-3">
            <div className="my-5 md:my-0">
              <h1 className="text-[#080812] text-[26px] font-[500] text-center md:text-left">Job Milestones</h1>
              <p className="mt-1 text-[rgba(8, 8, 18, 0.7)] font-[400] text-center md:text-left">Need a professional logo with writing <br />underneath for our...</p>
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="prod">Product Name</label>
              <input value={productForm.name} type="text" name="" id="prod" placeholder="Input name here" className="p-1 border outline-none focus:border-orange caret-orange rounded-md" onChange={onChange("name")} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="categ">Category</label>
              <input type="text" value={productForm.cat} id="categ" placeholder="Ex 087654456780000" className="p-1 border outline-none focus:border-orange caret-orange rounded-md" onChange={onChange("cat")} />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="desc">Description</label>
              <textarea rows={4} cols={10} value={productForm.desc} id="desc" placeholder="Wriite decription here" className="p-1 border outline-none focus:border-orange caret-orange rounded-md resize-none" onChange={onChange("desc")} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="amount">Amount</label>
              <input type="text" value={productForm.amount} name="" id="amount" placeholder="Input amount here" className="p-1 border outline-none focus:border-orange caret-orange rounded-md" onChange={onChange("amount")} />
            </div>
             {/* Drag and Drop */}
            <div>
              <p className="font-[400] text-xs md:text-sm lg:text-base text-[rgba(8, 8, 18, 0.7)] mt-2">Upload prototype</p>
              <div {...getRootProps({
                className:"flex flex-col justify-center items-center space-y-2 h-32 border border-dashed rounded-[1px] bg-[#F8F9FB] hover:cursor-pointer"
              })}>
                <input {...getInputProps()} />
                <span className="text-orange text-3xl"><FaFileUpload /></span>
                <p className="text-[#19191C] font-[400] text-xs md:text-base">Drop your file(s) here or browse </p>
                <p className="text-[#19191C] font-[400] text-center md:text-left text-xs md:text-base">PNG, SVG, JPG, GIF, or PDF Ma. file size 800*400px</p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-5 p-2 border rounded-[5px] my-7">
                <span className="text-orange text-3xl hidden md:block"><FaFileUpload /></span>
                <div className="w-[100%]">
                <p className="text-[#19191C] font-[400] text-center md:text-left">Tech Design template.pdf</p>
                <p className="font-[400] text-[rgba(8, 8, 18, 0.4)] text-center md:text-left">{300}kb</p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center md:space-x-1">
                  <div className="bar border bg-slate-50 w-full rounded-2xl main">
                    <div className="progress w-[100%] h-[6px] rounded-2xl main"></div>
                  </div>
                  <div>100%</div>
                </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-5 p-2 border rounded-[5px] my-7">
                <span className="text-orange text-3xl hidden md:block"><FaFileUpload /></span>
                <div className="w-[100%]">
                <p className="text-[#19191C] font-[400] text-center md:text-left">Tech Design template.pdf</p>
                <p className="font-[400] text-[rgba(8, 8, 18, 0.4)] text-center md:text-left">{300}kb</p>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center md:space-x-1">
                  <div className="bar border bg-slate-50 w-full rounded-2xl">
                    <div className="progress w-[40%] h-[6px] rounded-2xl main"></div>
                  </div>
                  <div>{40}%</div>
                </div>
                </div>
              </div>
              {/* <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-5 p-2 border rounded-[5px] my-7">
                <span className="text-orange text-3xl hidden md:block"><FaFileUpload /></span>
                <div className="w-[100%]">
                  <p className="text-[#19191C] font-[400] text-center md:text-left">{uploadData.name}</p>
                  <p className="font-[400] text-[rgba(8, 8, 18, 0.4)] text-center md:text-left">{uploadData.size}kb</p>
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-5 items-center md:space-x-5">
                    <div className="bar border bg-slate-50 w-full rounded-2xl ">
                      <div className="progress h-[6px] rounded-2xl" ref={progressBar}></div>
                    </div>
                    <div>{uploadLevel}%</div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="flex justify-center md:justify-end">
              <div><button className="text-white bg-orange py-1 px-20 md:px-10 rounded-md">List of Sale</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductsForm