import {createSlice} from '@reduxjs/toolkit';
import {Task} from '../types';
import {AddNewTask, DeleteTask, EditTask, fetchTasks} from './ToDoListThunks';

interface ToDoListState {
  tasks: Task[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: ToDoListState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const ToDoListSlice = createSlice({
  name: 'ToDoList',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action ) => {
      const tasks: Task[] = [];

      if (action.payload) {
        for (const [key, value] of Object.entries(action.payload)) {
          tasks.push({
            id: key,
            title: value.title,
            status: value.status,
          });
        }
      }
      state.tasks = tasks;
      state.isLoading = false;
    });

    builder.addCase(fetchTasks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(AddNewTask.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(AddNewTask.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(AddNewTask.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(EditTask.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(EditTask.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(EditTask.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(DeleteTask.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });

    builder.addCase(DeleteTask.fulfilled, (state) => {
      state.isLoading = false;
    });

    builder.addCase(DeleteTask.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});


export const ToDoListReducer = ToDoListSlice.reducer;