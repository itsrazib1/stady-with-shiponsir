import { useContext, useState } from 'react';
import TaskCard from '../../components/tasks/TaskCard';
import AddTaskModal from '../../components/tasks/AddTaskModal';
import { useGetTaskQuery } from '../../redux/features/api/baseApi';
import { AuthContext } from '../../providers/AuthProvider';

const Myclass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data:tasks,isLoading } = useGetTaskQuery();
  
  const { user } = useContext(AuthContext);

  const pendingTasks = tasks?.filter((item) => item.status == 'pending');
  const runningTasks = tasks?.filter((item) => item.status == 'running');
  const doneTasks = tasks?.filter((item) => item.status == 'done');

  return (
    <>
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className=" min-h-screen">
        <div className=" lg:px-10 px-2 pt-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold lg:text-3xl text-base">Attendance sheet</h1>
            </div>
            <div className="flex gap-5">
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-primary lg:text-base text-xs btn-xs lg:-mt-1 mt-2 lg:btn-md"
              >
                Add Today's attendance
              </button>
              
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
              
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-2 mt-10">
            <div className="relative h-[800px] overflow-auto">
              <div className="flex sticky top-0 lg:text-base text-xs justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Current Class</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {pendingTasks?.length}
                </p>
              </div>
              <div className="space-y-3">
                {pendingTasks?.map((item) => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px] overflow-auto">
              <div className="lg:text-base text-xs flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Total Classes This Month</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {runningTasks?.length}
                </p>
              </div>
              <div className="space-y-3">
                {runningTasks?.map((item) => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px] overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Total month</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {doneTasks?.length}
                </p>
              </div>
              <div className="space-y-3">
                {doneTasks?.map((item) => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Myclass;
