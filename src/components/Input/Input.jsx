import React from 'react'

const Input = ({ label, placeholder, value, handleChange, name, required, labelStyle, inputStyle, type = "text" }) => {
    return (
        <div className="flex flex-col">
            <label className={"text-[#333333] opacity-70 text-[14px] " + labelStyle || ""}>{label} {
                required ? <span className="text-[#FF0000]">*</span> : null
            }</label>
            <input name={name} type={type} value={value} onChange={handleChange} className={"border-[1px] rounded-[4px] px-[10px] py-[5px] h-[40px] mt-[5px] flex items-center " + inputStyle || ""} placeholder={placeholder} />
        </div>
    )
}

export default Input