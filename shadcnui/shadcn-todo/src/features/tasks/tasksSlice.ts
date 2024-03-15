import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./TaskForm";

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.unshift(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
  },
});

export const { addTask, updateTask, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
