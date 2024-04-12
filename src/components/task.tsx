import React from "react";
import { FaPenAlt } from "react-icons/fa";

import { FaCalendarCheck } from "react-icons/fa";
import moment from "moment";
import { FORMAT_DATE_TIME } from "../utils/format";
import { RiDeleteBin2Fill } from "react-icons/ri";

// STATUS 0 đang chờ
// STATUS 1 ĐÃ HOÀN THÀNH
// STATUS 2
export interface todoProps {
    status: number,
    index: number,
    title: string,
    description: string,
    priority: number,
    time: Date,
    endTask: (index: number) => void;
    deleTask: (index: number) => void;
    editTask: (index: number) => void;

}



export const Task: React.FunctionComponent<todoProps> = ({ status, title, description, priority, time, index, deleTask, endTask, editTask }) => {
    const now = moment(time);
    const formattedDate = now.format(FORMAT_DATE_TIME);
    const tasks: any[] = JSON.parse(localStorage.getItem("tasks") || '[]');

    return (
        <div className="flex items-center w-full bg-dark-elm  my-4 rounded-3xl relative group ease-in-out transition ">
            <div onClick={() => { endTask(index) }} className={` w-16 h-full py-6 rounded-tl-3xl   rounded-bl-3xl border-r text-center flex justify-center border-primary hover:bg-primary ${status === 1 ? "bg-primary" : status === 2 ? "bg-waring" : ""} `}>
                <FaCalendarCheck />
            </div>
            <div className="ml-1r">
                <div className="font-semibold">
                    {title}
                </div>
                <div className="flex items-center text-[15px]">
                    <div className="flex items-center">
                        <div>
                            {status === 0 ? "Hạn cuối:" : status === 1 ? "Đã hoành thành:" : "Quá hạn"}

                        </div>
                        <div className="ml-2">
                            {formattedDate}
                        </div>
                    </div>


                    <div className="text-slate-400 ml-2">
                        {description}
                    </div>
                </div>
            </div>
            <div className="absolute w-1/3  items-center right-4 hidden group-hover:flex  ease-in-out">
                <div className="ml-auto px-4  transition duration-300 flex ">
                    <div onClick={() => editTask(index)} className="text-2xl cursor-pointer mr-1r text-warning text-waring">
                        <FaPenAlt />
                    </div>
                    <div onClick={() => deleTask(index)} className="text-2xl cursor-pointer text-warning text-waring">
                        <RiDeleteBin2Fill />
                    </div>
                </div>
            </div>

        </div>
    )
}