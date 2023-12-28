import { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../../components/tasks/TaskCard';
import AddTaskModal from '../../components/tasks/AddTaskModal';

const Myclass = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = useSelector((state) => state.tasksSlice);

  const pendingTasks = tasks?.filter((item) => item.status == 'pending');
  const runningTasks = tasks?.filter((item) => item.status == 'running');
  const doneTasks = tasks?.filter((item) => item.status == 'done');

  return (
    <>
      <AddTaskModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className=" min-h-screen">
        <div className=" px-10 pt-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-semibold text-3xl">Attendance sheet</h1>
            </div>
            <div className="flex gap-5">
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="btn btn-primary"
              >
                Add Today's attendance
              </button>
              
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                    alt=""
                    className="object-cover h-full w-full "
                  />
                </div>
              
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-10">
            <div className="relative h-[800px] overflow-auto">
              <div className="flex sticky top-0  justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Current Class</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {pendingTasks.length}
                </p>
              </div>
              <div className="space-y-3">
                {pendingTasks.map((item) => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px] overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Total Classes This Month</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {runningTasks.length}
                </p>
              </div>
              <div className="space-y-3">
                {runningTasks.map((item) => (
                  <TaskCard key={item.id} task={item} />
                ))}
              </div>
            </div>
            <div className="relative h-[800px] overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1>Total month</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {doneTasks.length}
                </p>
              </div>
              <div className="space-y-3">
                {doneTasks.map((item) => (
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
