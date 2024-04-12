import React, { useEffect, useState } from "react";
import moment from 'moment'

import { Task } from "../components/task";
import ChangeTask from "../components/change-task";

const Home: React.FunctionComponent = () => {


    const [todo, setTodo] = useState<boolean>(true);
    const [popupChange, setPopupChange] = useState<boolean>(false);
    const [item, setItem] = useState<any>({});
    const [index, setIndex] = useState<number>(0);
    const [hideInput, setHideInput] = useState<boolean>(false);
    const [deadlineTime, setDeadlineTime] = useState<Date>(new Date());
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [task, setTask] = useState<any[]>(() => {
        const taskLoadFromStorge: any[] = JSON.parse(localStorage.getItem("tasks") || '[]');
        return taskLoadFromStorge
    })
    useEffect(() => {
        const currentDate = new Date();
        setDeadlineTime(currentDate);

    }, []);





    useEffect(() => {
        const timer = setTimeout(() => {
            if (task.length > 0) {
                for (let i = 0; i < task.length; i++) {
                    const timeNow = moment();
                    const current = task[i];
                    const deadlineTime = moment(current.deadlineTime);
                    if (deadlineTime.isBefore(timeNow)) {
                       if(current.status == 0){
                            current.status = 2;
                            alert("Task của bạn đã hết hạn làm ăn như ***.")
                       }
                    }
                }
                localStorage.setItem('tasks', JSON.stringify(task));
                const taskLoadFromStorge: any[] = JSON.parse(localStorage.getItem("tasks") || '[]');
                setTask(taskLoadFromStorge)

            }
        }, 60000);

        return () => clearTimeout(timer);
    }, [task]);



    // 
    const handleEndTask: (index: number) => void = (index: number) => {
        const confirmed: boolean = window.confirm("Bạn có chắc chắn nhiệm vụ này đã hoàn thành chưa?");

        if (confirmed) {
            task[index].status = 1;
            localStorage.setItem("tasks", JSON.stringify(task));
            const taskLoadFromStorge: any[] = JSON.parse(localStorage.getItem("tasks") || '[]');
            setTask(taskLoadFromStorge)
        } else {
            return;
        }
    }
    // 
    const handleDeleteTask: (index: number) => void = (index: number) => {
        const confirmed: boolean = window.confirm("Bạn có chắc chắn nhiệm vụ này đã hoàn thành chưa?");
        if (confirmed) {
            task.splice(index, 1)
            localStorage.setItem('tasks', JSON.stringify(task));
            const taskLoadFromStorge: any[] = JSON.parse(localStorage.getItem("tasks") || '[]');
            setTask(taskLoadFromStorge)
        } else {
            return;
        }
    };


    const reloadTask = () => {
        const taskLoadFromStorge: any[] = JSON.parse(localStorage.getItem("tasks") || '[]');
        setTask(taskLoadFromStorge)
    }

    const handleChangeTask: (index: number, item?: any) => void = (index: number, item?: any) => {
        setIndex(index)
        const itemNow = task[index]
        setItem(itemNow)
        setPopupChange(true)


    };

    const handleHideInput = () => {
        setHideInput(!hideInput);
    }
    const handleTodo = () => {
        setTodo(!todo);
    };
    const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        const today = new Date()
        if (!title) {
            return alert("Vui lòng nhập tên task")
        }
        if (!description) {
            return alert("Vui lòng nhập mô tả")
        }
        if (today > deadlineTime) {
            return alert("Thời gian phải lớn hơn hiện tại")
        }

        const data = {
            title: title,
            description: description,
            deadlineTime: deadlineTime,
            status: 0,
        };

        setTask(prev => {
            const newTask = [...task, data]
            const tasksData = JSON.stringify(newTask)
            localStorage.setItem('tasks', tasksData)
            return newTask
        })



    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(e.target.value);

        setDeadlineTime(selectedDate);
        console.log(deadlineTime);

    }
    const handleClosePopup = (): void => {
        setPopupChange(false)
    }

    return (
        <div className="bg-dark h-full min-h-screen px-32 text-white max-lg:px-2">
            {popupChange && <ChangeTask
                item={item}
                reloadTask={reloadTask}
                handleClose={handleClosePopup}
                index={index}
            />}
            <div className="w-full py-4 text-center text-3xl font-bold text-primary">
                TODO LIST
            </div>
            <div className="bg-dark-elm px-2 py-3 w-full rounded-3xl shadow-box-shadow-light flex items-center">
                <div className="flex items-center">
                    <div onClick={handleTodo} className={`px-8 py-1 rounded-3xl cursor-pointer ${todo ? "bg-primary" : "bg-dark"}`} >
                        Nhiệm vụ
                    </div>
                    <div onClick={handleTodo} className={`mx-4 px-8 py-1 rounded-3xl cursor-pointer ${!todo ? "bg-primary" : "bg-dark"}`} >
                        Đã hoàn thành
                    </div>
                </div>
            </div>

            {/* todo */}
            <div className=" bg-dark pb-32">

                {
                    todo ?
                        <div className="h-[25rem] overflow-y-auto hover:overflow-y-scroll">
                            <div className="w-full border-b border-primary py-4 px-4">
                                Tất cả công việc
                            </div>
                            <div>


                                {task.map((task, index) => {
                                    if (task.status !== 1) {
                                        return (
                                            <Task
                                                key={index}
                                                deleTask={handleDeleteTask}
                                                endTask={handleEndTask}
                                                editTask={handleChangeTask}
                                                index={index}
                                                status={task.status}
                                                title={task.title}
                                                description={task.description}
                                                priority={1}
                                                time={task.deadlineTime}
                                            />
                                        )
                                    } else {
                                        return <div>

                                        </div>
                                    }
                                })}

                            </div>
                        </div>
                        :
                        <div>
                            <div className="w-full border-b border-primary py-4 px-4">
                                Đã hoàn thành
                            </div>
                            <div>

                                {task.map((task, index) => {

                                    if (task.status === 1) {
                                        return (
                                            <Task
                                                key={index}
                                                deleTask={handleDeleteTask}
                                                editTask={handleChangeTask}
                                                endTask={handleEndTask}
                                                index={index}
                                                status={task.status}
                                                title={task.title}
                                                description={task.description}
                                                priority={1}
                                                time={new Date(deadlineTime)}
                                            />
                                        )
                                    } else {
                                        return <div>

                                        </div>
                                    }
                                })}
                            </div>
                        </div>
                }
            </div>

            <div className="flex justify-center fixed bottom-6 w-full left-0 px-36">
                {hideInput &&
                    <div className="py-2 px-4 bg-dark-elm relative w-full bottom-24 rounded-3xl flex items-center justify-between">
                        <div>
                            <input
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                                className="bg-dark px-12 py-1 rounded-3xl "
                                type="text"
                                required
                                placeholder="Tên công việc"
                            />
                            <input
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                                className="bg-dark px-12 py-1 rounded-3xl ml-[10px]"
                                type="text"
                                required
                                placeholder="Mô tả công việc"
                            />
                        </div>
                        <div className="w-[20%]">
                            <input

                                onChange={handleDateChange}
                                id="date"
                                className="bg-dark py-1 rounded-3xl text-slate-400 px-12"
                                type="datetime-local"
                            />
                        </div>
                        <div className="flex items-center">
                            <div className="px-6 py-1 bg-waring rounded-3xl cursor-pointer">
                                Hủy
                            </div>
                            <button onClick={handleAddTodo} className="px-6 py-1 bg-primary rounded-3xl cursor-pointer ml-1r">
                                Thêm
                            </button>
                        </div>
                    </div>
                }
                <div onClick={handleHideInput} className="h-12 w-12 rounded-full absolute bg-primary flex justify-center items-center font-bold cursor-pointer bottom-1r">
                    +
                </div>
            </div>
        </div>
    );
}

export default Home;
