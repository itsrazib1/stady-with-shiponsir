import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';
import { useAddTaskMutation } from '../../redux/features/api/baseApi';

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

const [addTask,{data,error}] = useAddTaskMutation();
console.log(data,error)
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    addTask({...data,status:'pending'});
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
            className="w-full py-1 border border-black rounded-md"
            type="text"
            id="title"
            {...register('className')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Student Name
          </label>
          <textarea
            className="w-full border  border-black rounded-md"
            type="text"
            id="description"
            {...register('description')}
          />
        </div>
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
