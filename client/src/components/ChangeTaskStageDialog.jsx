// import React, { useState } from 'react';
// import ModalWrapper from "./ModalWrapper";
// import { Dialog } from '@headlessui/react';
// import { useUpdateTaskMutation } from "../../src/redux/slices/api/taskApiSlice"
// import { toast } from 'sonner';

// const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];

// const ChangeTaskStageDialog = ({ open, setOpen, task }) => {
//     const [stage, setStage] = useState(task?.stage?.toUpperCase() || LISTS[0]);
//     const [updateTask] = useUpdateTaskMutation();

//     const changeStageHandler = async () => {
//         try {
//             const res = await updateTask({ ...task, stage: stage.toLowerCase() }).unwrap();
//             toast.success(res.message);
//             setTimeout(() => {
//                 setOpen(false);
//                 window.location.reload();
//             }, 500);
//         } catch (err) {
//             console.log(err);
//             toast.error(err?.data?.message || err.error);
//         }
//     };

//     return (
//         <ModalWrapper open={open} setOpen={setOpen}>
//             <Dialog.Title as="h2" className="text-base font-bold leading-6 text-gray-900 mb-4">
//                 Change Task Stage
//             </Dialog.Title>
//             <div className="mt-2 flex flex-col gap-6">
//                 {LISTS.map((stageOption) => (
//                     <button
//                         key={stageOption}
//                         className={`w-full p-2 rounded ${stage === stageOption ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}
//                         onClick={() => setStage(stageOption)}
//                     >
//                         {stageOption}
//                     </button>
//                 ))}
//                 <div className='bg-gray-50 py-6 sm:flex sm:flex-row-reverse gap-4'>
//                     <button
//                         className='bg-blue-100 px-8 text-sm font-semibold text- hover:bg-blue-700 '
//                         onClick={changeStageHandler}
//                     >
//                         Submit
//                     </button>
//                     <button
//                         className='bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto'
//                         onClick={() => setOpen(false)}
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </div>
//         </ModalWrapper>
//     );
// };

// export default ChangeTaskStageDialog;


// import React from 'react';
// import { useUpdateTaskMutation } from "../../src/redux/slices/api/taskApiSlice";
// import { toast } from 'sonner';

// const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];

// const ChangeTaskStageDialog = ({ open, setOpen, task }) => {
//     const [updateTask] = useUpdateTaskMutation();

//     const changeStageHandler = async (stage) => {
//         try {
//             const res = await updateTask({ ...task, stage: stage.toLowerCase() }).unwrap();
//             toast.success(res.message);
//             setTimeout(() => {
//                 setOpen(false);
//                 window.location.reload();
//             }, 500);
//         } catch (err) {
//             console.log(err);
//             toast.error(err?.data?.message || err.error);
//         }
//     };

//     return (
//         <div className={`absolute z-10 p-2 bg-white rounded shadow-md w-48  `}>
//             <div className="flex flex-col gap-2">
//                 {LISTS.map((stageOption) => (
//                     <button
//                         key={stageOption}
//                         className={`w-full p-2 rounded ${task.stage.toUpperCase() === stageOption ? 'bg-gray-100 text-black' : ' text-black-500'}`}
//                         onClick={() => changeStageHandler(stageOption)}
//                     >
//                         {stageOption}
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ChangeTaskStageDialog;



import React from 'react';
import { useUpdateTaskMutation } from "../../src/redux/slices/api/taskApiSlice";
import { toast } from 'sonner';

const LISTS = ["TODO", "IN PROGRESS", "COMPLETED"];

const ChangeTaskStageDialog = ({ open, setOpen, task }) => {
    const [updateTask] = useUpdateTaskMutation();

    const changeStageHandler = async (stage) => {
        try {
            const res = await updateTask({ ...task, stage: stage.toLowerCase() }).unwrap();
            toast.success(res.message);
            setTimeout(() => {
                setOpen(false);
                window.location.reload();
            }, 500);
        } catch (err) {
            console.log(err);
            toast.error(err?.data?.message || err.error);
        }
    };

    return (
        <div className="'absolute p-4 right-0  mt-5  w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none ">
            <div className="flex flex-col gap-2 ">
                {LISTS.map((stageOption) => (
                    <button
                        key={stageOption}
                        className={`w-full p-2 rounded hover:bg-gray-100 ${task.stage.toLowerCase() === stageOption ? 'bg-gray-100 text-black' : 'bg-white-200 text-gray-900'}`}
                        onClick={() => changeStageHandler(stageOption)}
                    >
                        {stageOption}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChangeTaskStageDialog;

