import { configureStore, createSlice } from "@reduxjs/toolkit";

// Define the slice
let usersSlice = createSlice({
    name: "usersShelf",
    initialState: {
        abc: ["Ahmad", "Fareeha", "Muzamil"],
    },
    reducers: {
        addUser: (state, action) => {
            state.abc.push(action.payload);
        },
    }
});

// Export the actions
export const { addUser } = usersSlice.actions;

// Configure the store
export const meraStore = configureStore({
    reducer: usersSlice.reducer
});


































// import { configureStore, createSlice } from "@reduxjs/toolkit";


// let kanjarYaraDiShelf = createSlice({
//     name: "Kanjar Yara Di Shelf",
//     initialState: {

//         products: [
//             "Zunair", "Husnian", "Umair", "Zunair da wada pra Umair", "Foji", "Ty Main Aap"
//         ]
//     }
// })


// export let chachuDaStore = configureStore({
//     reducer: kanjarYaraDiShelf.reducer
// }
// )





