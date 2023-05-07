import React from 'react'

const Button = ({ type = "primary", label, onClick, className = ""}) => {
    return (
        <button
            className={
                type == "primary" ?  'bg-primary-6 flex gap-[10px] justify-center py-[12px] px-[20px] align text-neutral-1 text-Medium+/Label/Small-Strong rounded-[4px] ' :
                    type == "linear" ? "bg-linear flex gap-[10px] justify-center py-[12px] px-[20px] align text-neutral-1 text-Medium+/Label/Small-Strong rounded-[4px] " :
                        type == "outlined" ? " flex gap-[10px] justify-center border-[1px] border-primary-6 py-[12px] px-[20px] align text-primary-6 text-Medium+/Label/Small-Strong rounded-[4px] " : null
                        + (className ? className : "")
            }
            onClick={onClick}
        >{label}</button>
    )
}

export default Button