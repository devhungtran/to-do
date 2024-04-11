import React from "react";
import { todo } from "../constant/todo";

// STATUS 0 đang chờ
// STATUS 1
// STATUS 2

export const Task : React.FunctionComponent<todo> = ({status, title, description,priority,time}) =>{
    return(
        <div className="flex items-center w-full bg-dark-elm px-4 py-2 my-4 rounded-3xl"> 
            <div className=" w-16 h-full py-4 border-r border-primary">

            </div>
            <div className="ml-1r">
                <div className="font-semibold">
                    {title}
                </div>
                <div className="flex items-center text-[15px]">
                    <div className="flex items-center">
                        <div>
                            {status === 0 ? "Hạn cuối:"  : status === 1 ? "Đã hoành thành:" : "Quá hạn"}
                            
                        </div>
                        <div className="ml-2">
                            {time}
                        </div>
                    </div>
                    

                    <div className="text-slate-400 ml-2">
                         {description} 
                    </div>
                </div>
            </div>
        </div>  
    )
}