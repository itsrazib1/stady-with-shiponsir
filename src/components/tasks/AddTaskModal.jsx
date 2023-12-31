import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';
import { useAddTaskMutation } from '../../redux/features/api/baseApi';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const { user } = useContext(AuthContext);
  const [addTask, { data, error }] = useAddTaskMutation();
  console.log(data, error)
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    addTask({ ...data, status: 'pending' });
    onCancel();
    console.log(data)
  };


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Stady-With-SheponSir">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2 ">
            Today Class Name
          </label>
          <input
            className="w-full py-1 ps-3 border border-black rounded-md"
            type="text"
            id="title"
            {...register('className')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Student Name
          </label>
          <input
            className="w-full border py-1 ps-3 border-black rounded-md"
            type="text"
            id="description"
            value={user?.displayName}
            {...register('description')}
          />
        </div>
        {/* Date Batch Start  */}
        <div className='grid grid-cols-3 gap-3 text-center'>

          <div className="flex flex-col mb-5 text-center">
            <label htmlFor="title" className="mb-2">
              Batch
            </label>
            <select
              className="w-full rounded-md text-center border border-black"
              id="assignedTo"
              {...register('Batch')}
            >
              <option className="text-black" value="2019-20">2019-20</option>
              <option className="text-black" value="2020-21">2020-21</option>
              <option className="text-black" value="2021-22">2021-22</option>
              <option className="text-black" value="2021-22">2022-23</option>

            </select>
          </div>

          <div className="flex  flex-col mb-5">
            <label htmlFor="title" className="mb-2 ">
            Time
            </label>
            <select
              className="w-full rounded-md text-center border border-black"
              id="assignedTo"
              {...register('Time')}
            >
              <option className="text-black" value="7:00-8:00">7:00-8:00</option>
                    <option className="text-black" value="8:00-9:00">8:00-9:00</option>
                    <option className="text-black" value="12:00-1:00">12:00-1:00</option>
                    <option className="text-black" value="1:00-2:00">1:00-2:00</option>
                    <option className="text-black" value="2:00-3:00">2:00-3:00</option>
                    <option className="text-black" value="3:00-4:00">3:00-4:00</option>
                    <option className="text-black" value="4:00-5:00">4:00-5:00</option>
                    <option className="text-black" value="5:00-6:00">5:00-6:00</option>


            </select>
          </div>
          <div className="flex  flex-col mb-5">
            <label htmlFor="title" className="mb-2 ">
            Date
            </label>
            <select
              className="w-full rounded-md text-center border border-black"
              id="assignedTo"
              {...register('Date')}
            >
              <option className="text-black" value="Sun,Tus,Thu">Sun,Tus,Thu</option>
              <option className="text-black" value="Sat,Mon,Wed">Sat,Mon,Wed</option>


            </select>
          </div>

        </div>
        {/* Date Batch End  */}
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Class Date
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register('date')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register('assignedTo')}
          >
            <option value="Shepon  Sir">Shepon  Sir</option>

          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Subject Name
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register('priority')}
          >

            <option value="Accounting">Accounting</option>
            <option defaultValue value="Finance">
              Finance
            </option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => onCancel()}
            type="button"
            className="btn btn-danger "
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ">
            submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
