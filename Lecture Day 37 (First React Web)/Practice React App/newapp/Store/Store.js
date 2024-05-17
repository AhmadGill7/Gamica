import { configureStore, createSlice } from "@reduxjs/toolkit";


let kanjarYaraDiShelf = createSlice({
    name: "Kanjar Yara Di Shelf",
    initialState: {

        products: [
            "Zunair", "Husnian", "Umair", "Zunair da wada pra Umair", "Foji", "Ty Main Aap"
        ]
    }
})


export let chachuDaStore = configureStore({
    reducer: kanjarYaraDiShelf.reducer
}
)