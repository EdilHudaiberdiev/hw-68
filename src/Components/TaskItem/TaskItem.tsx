import React from 'react';
import {useDispatch} from 'react-redux';
import {DeleteTask, EditTask, fetchTasks} from '../../Containers/ToDoListThunks';
import {AppDispatch, Task} from '../../types';

interface Props {
  task: Task
}

const TaskItem: React.FC<Props> = ({task}) => {
  const dispatch: AppDispatch = useDispatch();

  const changeCheckBox = async (e: React.ChangeEvent, task: Task) => {
    if ('checked' in e.target && typeof e.target.checked === 'boolean') {
      const updateTask = {...task};
      updateTask.status = e.target.checked;
      await dispatch(EditTask(updateTask));
      await dispatch(fetchTasks());
    }
  };

  const onDeleteTask = async (id?: string) => {
    if (id) {
      await dispatch(DeleteTask(id));
      await dispatch(fetchTasks());
    }
  };

  return (
    <div className="task card w-50 mx-auto mb-4">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div className="w-50"><p className="m-0">{task.title}</p></div>
        <div><input className="form-check-input" type="checkbox" checked={task.status} onChange={e => changeCheckBox(e, task)}/></div>
        <div>
          <button className="ms-4 btn btn-danger" onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;