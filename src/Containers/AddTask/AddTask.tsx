import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch, Task} from '../../types';
import {AddNewTask, fetchTasks} from '../ToDoListThunks';


const AddTask = () => {
  const dispatch: AppDispatch = useDispatch();
  const [task, setTask] = useState<Task>({
    title: '',
    status: false,
  });

  const changeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (task.title.trim().length > 0) {
      await dispatch(AddNewTask({...task}));
      await dispatch(fetchTasks());
    } else {
      alert('The filed must be full');
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="mb-5 mx-auto w-75">
      <div className="mb-3 w-75 mx-auto d-flex justify-content-between">
        <label htmlFor="title" className="form-label">Title for task:</label>
        <input className="ms-2 w-50 form-control" value={task.title} type="text" name="title" id="title" onChange={changeForm}/>
        <button className="ms-3 btn-primary btn" type="submit">Add task</button>
      </div>
    </form>
  );
};

export default AddTask;