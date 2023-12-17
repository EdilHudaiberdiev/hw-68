import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import TaskItem from '../../Components/TaskItem/TaskItem';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {AppDispatch} from '../../types';
import AddTask from '../AddTask/AddTask';
import {fetchTasks} from '../ToDoListThunks';

const Home = () => {
  const tasks = useSelector((state: RootState) => state.ToDoList.tasks);
  const tasksLoading = useSelector((state: RootState) => state.ToDoList.isLoading);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      {tasksLoading ? <Spinner/> :
        <>
          <AddTask/>
          <hr/>
          <div className="tasksList mx-auto">
            {tasks.length > 0 ?
              <>
                {tasks.map(task => (
                  <TaskItem key={task.id} task={task}/>
                ))}
              </>
              : <h4 className="text-center">No tasks</h4>
            }
          </div>
        </>
      }
    </div>
  );
};

export default Home;