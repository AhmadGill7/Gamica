import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";


// redux kay two versions
// 1). core redux
// 2). reduxtool kit

// store ka aik section create kara 
let productSection =  createSlice({
    name:'products',
    initialState:{
        abc:[10,20,30,40]
    },
    reducers:{
        addName:(puranaData, newData)=>{

            puranaData.abc.push(newData.payload)

        },
        updateName:(puranaData, newData)=>{
            
            puranaData.abc[newData.payload.meraIndex] = newData.payload.newName;

        },
        removeName:(puranaData, newData)=>{
            
            puranaData.abc.splice(newData.payload, 1);

        }
        
    }
})


let productSection1 =  createSlice({
    name:'products1',
    initialState:{
        abc:[10,20,30,40]
    },
    reducers:{
        addName:(puranaData, newData)=>{

            puranaData.abc.push(newData.payload)
   
        },
        updateName:(puranaData, newData)=>{
            
            puranaData.abc[newData.payload.meraIndex] = newData.payload.newName;

        },
        removeName:(puranaData, newData)=>{
            
            puranaData.abc.splice(newData.payload, 1);

        }
        
    }
})

// multiple slices ko aik bara slice banane keliye
let root = combineReducers({
    p1:productSection.reducer,
    p2:productSection1.reducer
});

// yahan store create kra
export let meraStore = configureStore({
    reducer:root
});

export let  {addName, removeName, updateName} = productSection.actions;














