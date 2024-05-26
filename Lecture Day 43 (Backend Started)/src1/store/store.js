import { configureStore, createSlice } from "@reduxjs/toolkit";


// redux kay two versions
// 1). core redux
// 2). reduxtool kit

// store ka aik section create kara 
let productSection = createSlice({
    name: 'products',
    initialState: {
        abc: [10, 20, 30, 40],
        def: [50, 60, 70, 80],
    }
})

// yahan store create kra
export let meraStore = configureStore({
    reducer: productSection.reducer
});