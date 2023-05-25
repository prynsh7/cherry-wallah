import React from 'react'
import { Select } from 'antd'

const CustomSelect = ({ label, placeholder, options, value, handleChange, name, required, labelStyle, selectStyle, }) => {
    return (
        <div className="flex flex-col">
            <label className={"text-[#333333] opacity-70 text-[16px] font-medium " + labelStyle || ""}>{label} {
                required ? <span className="text-[#FF0000]">*</span> : null
            }</label>
            <Select
                showSearch
                name={name}
                value={value}
                className='h-[40px] '
                style={{
                    width: '100%',
                    height: '40px',
                    marginTop: '5px',
                    borderRadius: '4px',
                }}
                onChange={handleChange}
                placeholder={placeholder || "Search to Select"}
                options={options}
            />
        </div>
    )
}

export default CustomSelect