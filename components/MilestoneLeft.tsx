import React from "react"

type Props = {
  stage: number,
  stageForm: {
    from: string,
    to: string,
    amount: string
  },
  onChange: (input: string) => (evt: React.ChangeEvent<HTMLInputElement>) => void
}

const MilestoneLeft = ({stage, stageForm, onChange}: Props) => {
  return (
    <>
    { stage === 1 && <p className='border p-2 text-sm font-semibold rounded-sm border-[#f3f4f6]'>
          Starting-Role description
      </p>
    }
    { stage === 2 && <div>
      <p className='border p-2 text-sm font-semibold rounded-sm border-[#f3f4f6]'>
        Progress-Upload prototype
      </p>
      <p className='border p-2 text-sm font-semibold rounded-sm border-[#f3f4f6] mt-2'>
        Describe in details
      </p>
    </div>
    }
    { stage === 3 && <p className='border p-2 text-sm font-semibold rounded-sm border-[#f3f4f6]'>
        Completed-Upload final product
      </p>
    }
    <p className='text-xs py-2 text-orange font-semibold my-2'>
        + Add more to this
    </p>
    <div className='flex items-center space-x-3 pb-2 '>
        <div className='flex flex-col space-y-1'>
          <label className='text-xs font-semibold text-[#6b7280]'>
              From
          </label>
          <input
              type='text'
              value={stageForm.from}
              className='border rounded-md bg-white placeholder:text-xs px-2 py-1 w-full outline-none focus:border focus:border-orange caret-orange'
              placeholder='Jan 2022'
              onChange={onChange("from")}
          />
        </div>
        <div className='flex flex-col space-y-1'>
          <label className='text-xs font-semibold text-[#6b7280]'>
              To
          </label>
          <input
              type='text'
              value={stageForm.to}
              className='border rounded-md bg-white placeholder:text-xs px-2 py-1 w-full outline-none focus:border focus:border-orange caret-orange'
              placeholder='Jan 2022'
              onChange={onChange("to")}
          />
        </div>
    </div>
    <div className='flex flex-col space-y-1 my-3'>
        <label className='text-xs font-semibold text-[#6b7280]'>
          Amount
        </label>
        <input
          type='text'
          value={stageForm.amount}
          className='border rounded-md bg-white placeholder:text-xs px-2 py-1 outline-none focus:border focus:border-orange caret-orange'
          placeholder='Amount'
          onChange={onChange("amount")}
        />
    </div>
    </>
  )
}

export default MilestoneLeft