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


let authSection =  createSlice({
    name:'products1',
    initialState:{
        loggedWalaUser:{}
    },
    reducers:{
        loginHogya:(puranaData, newData)=>{

            puranaData.loggedWalaUser = newData.payload;

        },
        logoutHogya:(puranaData, newData)=>{

            puranaData.loggedWalaUser = {};
            localStorage.removeItem('meraToken')

        }
        
    }
})

// multiple slices ko aik bara slice banane keliye
let root = combineReducers({
    p1:productSection.reducer,
    p2:authSection.reducer
});

// yahan store create kra
export let meraStore = configureStore({
    reducer:root
});

export let  {loginHogya, logoutHogya} = authSection.actions;