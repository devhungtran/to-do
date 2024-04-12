import React, { useState } from "react";


interface ChangeProps {
    index: number,
    item?: any;
    handleClose: () => void;
    reloadTask: () => void
}

const ChangeTask: React.FunctionComponent<ChangeProps> = ({ index, item, handleClose, reloadTask }) => {
    const [title, setTitle] = useState<string>(() => {
        if (item) {
            return item.title
        } else {
            return ""
        }
    });
    const [description, setDescription] = useState<string>(() => {
        if (item) {
            return item.title
        } else {
            return ""
        }
    });
    const handleChangeTask: (index: number) => void = (index: number) => {

        if (title.length < 5 || description.length < 5) {
            alert("Vui lòng nhập đầy đủ thông tin")
            return
        }
        const confirmed: boolean = window.confirm("Bạn có chắc chắn muốn sửa task này?");
        if (confirmed) {
            const tasks: any[] = JSON.parse(localStorage.getItem("tasks") || '[]');

            tasks[index].title = title;
            tasks[index].description = description;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            handleClose()
            reloadTask()

        } else {
            return;
        }
    };

    return (
        <div className="flex justify-center items-center h-screen w-full z-10 bg-bg-opa fixed top-0 left-0">
            <div className="px-4 py-6 bg-dark rounded-3xl shadow-box-shadow  w-[500px] ">
                <h1 className=" font-semibold text-primary text-center">
                    SỬA TASK
                </h1>
                <div>
                    <input
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        className="bg-dark-elm px-12 py-3 my-6 rounded-3xl block w-full "
                        type="text"
                        required
                        placeholder="Tên công việc"
                    />
                    <input
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        className="bg-dark-elm px-12 py-3 my-6 rounded-3xl block w-full"
                        type="text"
                        required
                        placeholder="Mô tả công việc"
                    />
                </div>
                <div className="w-full">
                    <div onClick={() => handleChangeTask(0)} className="bg-primary text-center cursor-pointer font-semibold px-12 py-3 my-6 rounded-3xl block w-full">
                        Sửa
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangeTask