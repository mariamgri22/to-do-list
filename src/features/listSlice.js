import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("lists/getTasks", async () => {
  try {
    const response = await axios.get("http://localhost:8000/lists");
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

const localStorageSet = (state) =>
  localStorage.setItem("list/get", JSON.stringify(state));

const initialState = JSON.parse(localStorage.getItem("list/get")) || {
  isLoading: false,
  lists: [],
};

const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: {
    [getTasks.pending]: (state) => {
      return { isLoading: true, lists: [] };
    },
    [getTasks.fulfilled]: (state, action) => {
      state.lists = action.payload;
      localStorageSet(state.lists); 
    },
    [getTasks.rejected]: (state) => {
      return { isLoading: false, lists: [] };
    },
    [addTasks.fulfilled]: (state, action) => {
      state.lists.unshift(action.payload);
      localStorageSet(state.lists);
    },
    [toggleTasks.fulfilled]: (state, action) => {
      const selectedTodo = state.lists.find(
        (todo) => todo.id === action.payload.id
      );
      selectedTodo.isComplete = action.payload.isComplete;
      localStorageSet(selectedTodo);
    },
    [deleteTask.fulfilled]: (state, action) => {
      state.lists = state.lists.filter((todo) => todo.id !== action.payload.id);
      localStorageSet(state.lists);
    },
    [getFilteredTasks.fulfilled]: (state, action) => {
      state.lists = action.payload;
      localStorageSet(state.lists);
    },
  },
});

export default listSlice.reducer;
