import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';

import { useDeleteTaskMutation, useUpdateTaskMutation } from '../../redux/features/api/baseApi';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const TaskCard = ({ task }) => {

  const [updateTasks, { data, error }] = useUpdateTaskMutation();
  const [deleteTask, { deldata, delerror }] = useDeleteTaskMutation();
  const { user } = useContext(AuthContext);
  // admin user define start

  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch('https://stady-with-shiponsir-server.vercel.app/logindata')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  const adminUsers = users.filter(u => u.Role === 'Admin');
  const moderatorUsers = users.filter(u => u.Role === 'Moderator');
  const isAdmin = adminUsers.some(u => u.email === user?.email);
  const ismoderator = moderatorUsers.some(u => u.email === user?.email);
  console.log("Userdata", isAdmin, ismoderator)



  // admin user define End
  let updatedStatus;

  if (task?.status === 'pending') {
    updatedStatus = 'running';
  } else if (task?.status === 'running') {
    updatedStatus = 'done';
  } else {
    updatedStatus = 'archive';
  }
  return (
    <>
      {
        isAdmin ?
          (<>
            <div className="bg-secondary/10 px-2 lg:px-5 rounded-md p-5">
              <h1
                className={`text-lg font-semibold mb-3 ${task.priority === 'Accounting' ? 'text-red-500' : ' '
                  }${task.priority === 'Finance' ? 'text-green-500' : ' '
                  }`}
              >
                {task?.className}
              </h1>
              <p className="mb-3 ">{task?.description}</p>
              <p className="text-sm">Class By - {task?.assignedTo}</p>
              <div className="flex justify-between mt-3">
                <p>{task?.date}</p>
                <div className="flex gap-3">
                  <button onClick={() => deleteTask({ id: task._id, data })} title="Delete">
                    <TrashIcon className="h-5 w-5 text-red-500" />
                  </button>
                  <button
                    onClick={() => updateTasks({ id: task._id, data: { status: updatedStatus } })
                    }
                    title="Update Status"
                  >
                    <ArrowRightIcon className="h-5 w-5 text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </>) : ismoderator ? (
            <>
              <div className="bg-secondary/10 rounded-md p-5">
                <h1
                  className={`text-lg font-semibold mb-3 ${task.priority === 'Accounting' ? 'text-red-500' : ' '
                    }${task.priority === 'Finance' ? 'text-green-500' : ' '
                    }`}
                >
                  {task?.className}
                </h1>
                <p className="mb-3">{task?.description}</p>
                <p className="text-sm">Class By - {task?.assignedTo}</p>
                <div className="flex justify-between mt-3">
                  <p>{task?.date}</p>
                  <div className="flex gap-3">
                    
                    <button
                      onClick={() => updateTasks({ id: task._id, data: { status: updatedStatus } })
                      }
                      title="Update Status"
                    >
                      <ArrowRightIcon className="h-5 w-5 text-primary" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ):
            (<>
              <div className="bg-secondary/10 rounded-md p-5">
                <h1
                  className={`text-lg font-semibold mb-3 ${task.priority === 'Accounting' ? 'text-red-500' : ' '
                    }${task.priority === 'Finance' ? 'text-green-500' : ' '
                    }`}
                >
                  {task?.className}
                </h1>
                <p className="mb-3">{task?.description}</p>
                <p className="text-sm">Class By - {task?.assignedTo}</p>
                <div className="flex justify-between mt-3">
                  <p>{task?.date}</p>
                  <div className="flex gap-3">


                  </div>
                </div>
              </div>
            </>)
      }

    </>

  );
};

export default TaskCard;
