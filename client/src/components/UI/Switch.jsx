import React, { forwardRef } from "react";
import { FaCheck } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Switch = forwardRef((props, forwardedRef) => {
    return (
      <label className="cursor-pointer flex items-center gap-5">
        <input type="checkbox" className="hidden" ref={forwardedRef} {...props} />
        <div
          className={`w-14 p-1 rounded-full ${
            props.checked ? "bg-orange-200" : "bg-gray-200"
          }`}
        >
          <div
            className={`w-fit p-0.5 shadow-sm rounded-full transition-all duration-300 text-white
        ${
          props.checked
            ? "bg-orange-500 translate-x-6 rotate-0"
            : "bg-gray-400 -rotate-180"
        }`}
          >
            {props.checked ? <FaCheck size={20} /> : <IoCloseOutline size={20} />}
          </div>
        </div>
        <span className={`text-lg font-bold ${props.checked ? "text-orange-500" : "text-gray-400"}`}>{props.label}</span>
      </label>
    );
  });
  

export default Switch;
