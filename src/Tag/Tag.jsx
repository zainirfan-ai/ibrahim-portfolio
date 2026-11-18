import React from 'react'

const Tag = ({ text = "IBRAHIM_YOUSUF" }) => {
  return (
    <div>
      <h4 className="text-sm text-center w-56 py-1 border border-indigo-500/30 rounded-full bg-[#22212171] font-medium tracking-wider text-[#ac8bc8]">
        {text}
      </h4>
    </div>
  )
}

export default Tag