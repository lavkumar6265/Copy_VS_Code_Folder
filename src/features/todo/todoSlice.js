import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: "abc",
            task: "demo",
            isDone: false
        }
    ],
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers
})