import React, { useState } from "react";
import { Task } from "../components/task";
import { ImPriceTags } from "react-icons/im";


const Home: React.FunctionComponent = () => {

    const [todo, setTodo] = useState<boolean>(true)

    const [hideInput, setHideInput] = useState<boolean>(false)


    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const handleHideInput = () => {
        return setHideInput(!hideInput)
    }


    const handleTodo = () => {
        if (todo) {
            return
        } else {
            setTodo(true)
        }
    };
    const handleTabSuccess = () => {
        if (!todo) {
            return
        } else {
            setTodo(false)
        }

    };


    const handleAddTodo = () => {

    }

    return (
        <div className="bg-dark min-h-screen px-32 text-white">
            <div className="w-full py-4 text-center text-3xl font-bold text-primary">
                TODO LIST
            </div>

            <div className="bg-dark-elm px-2 py-3 w-full rounded-3xl shadow-box-shadow-light flex items-center">
                <div className="flex items-center">
                    <div onClick={handleTodo} className={`px-8 py-1 rounded-3xl cursor-pointer ${todo ? "bg-primary" : "bg-dark"}`}   >
                        Nhiệm vụ
                    </div>
                    <div onClick={handleTabSuccess} className={` mx-4 px-8 py-1 rounded-3xl cursor-pointer ${!todo ? "bg-primary" : "bg-dark"}`} >
                        Đã hoàn thành
                    </div>
                </div>
                <div>
                    <input className="bg-dark px-4 py-1 rounded-3xl w-[50rem]" type="text" placeholder="Tìm kiếm công việc..." />
                </div>
                <div>

                </div>
            </div>

            {/*  todo */}
            <div>
                {
                    todo ?
                        <div>
                            <div className="w-full border-b border-primary py-4 px-4">
                                Công việc sắp tới
                            </div>

                            <div>
                                <Task
                                    status={0}
                                    title="Học làm todolist"
                                    description="hungdeptrai"
                                    priority={1}
                                    time={"19/8"}
                                />

                            </div>


                        </div>
                        :
                        <div>
                            <div className="w-full border-b border-primary py-4 px-4">
                                Đã hoàn thành
                            </div>




                        </div>
                }
            </div>
            {/*  */}

            <div className="flex justify-center fixed bottom-6 w-full left-0 px-36">

                {hideInput &&
                    <div className="py-2 px-4 bg-dark-elm relative w-full bottom-24 rounded-3xl  flex items-center justify-between">

                        <div>
                            <input className="bg-dark px-12 py-1 rounded-3xl " type="text" placeholder="Tên công việc" />
                            <input className="bg-dark px-12 py-1 rounded-3xl ml-[10px]" type="text" placeholder="Mô tả công việc" />


                        </div>
                        <div className="">
                            <select className="bg-dark px-12 py-1 rounded-3xl  text-slate-400">
                                <option value="1"> <ImPriceTags /> Quan trong</option>
                                <option value="1"> <ImPriceTags /> Cao nhất</option>

                                <option value="1"> <ImPriceTags /> Cao nhất</option>

                            </select>
                        </div>

                        <div className="w-[20%] ">
                            <input className="bg-dark px-4 py-1 rounded-3xl text-slate-400 px-12" type="date" />
                        </div>

                        <div className="flex items-center">
                            <div className="px-6 py-1 bg-waring rounded-3xl cursor-pointer">
                                Hủy
                            </div>
                            <div className="px-6 py-1 bg-primary rounded-3xl cursor-pointer ml-1r">
                                Thêm
                            </div>
                        </div>
                    </div>

                }

                <div onClick={handleHideInput} className="h-12 w-12 rounded-full absolute bg-primary flex justify-center items-center font-bold cursor-pointer bottom-1r">

                </div>


            </div>

        </div>
    )
}

export default Home 