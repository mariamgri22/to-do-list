import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("lists/getTasks", async () => {
  try {
    const response = await axios.get("http://localhost:8000/lists");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const addTasks = createAsyncThunk(
  "lists/addTasks",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8000/lists", {
        id: nanoid(),
        task: payload.task,
        isComplete: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const toggleTasks = createAsyncThunk(
  "lists/toggleTasks",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/lists/${payload.id}`,
        {
          isComplete: payload.isComplete,
          task: payload.task,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);
export const getFilteredTasks = createAsyncThunk(
  "lists/getFilteredTasks",
  async (payload) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/lists?isComplete=${payload}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "lists/deleteTask",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/lists/${payload.id}`
      );
      return { id: payload.id };
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const listSlice = createSlice({
  name: "lists",
  initialState: {
    isLoading: false,
    lists: [],
  },
  reducers: {},
  extraReducers: {
    [getTasks.pending]: (state) => {
      return { isLoading: true, lists: [] };
    },
    [getTasks.fulfilled]: (state, action) => {
      console.log("🚀 ~ file: listSlice.js:22 ~ action", action);
      return { lists: action.payload, isLoading: false };
    },
    [getTasks.rejected]: (state) => {
      return { isLoading: false, lists: [] };
    },
    [addTasks.fulfilled]: (state, action) => {
      console.log("🚀 ~ file: listSlice.js:49 ~ action", action);
      state.lists.unshift(action.payload);
    },
    [toggleTasks.fulfilled]: (state, action) => {
      const selectedTodo = state.lists.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.isComplete = action.payload.isComplete;
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.lists = state.lists.filter((todo) => todo.id !== action.payload.id);
    },
    [getFilteredTasks.fulfilled]: (state, action) => {
      console.log("🚀 ~ file: listSlice.js:103 ~ action", action);
      state.lists = action.payload;
    },
  },
});

export default listSlice.reducer;
