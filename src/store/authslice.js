import { createSlice } from "@reduxjs/toolkit";

const newcode = createSlice({
  name: "newcode",
  initialState: {
    status: false,
    userdata: null,
  },
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userdata = action.payload?.userdata ?? action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userdata = null;
    },
  },
});


const loginsinfo = createSlice({
  name: "loginsinfo",
  initialState: {
    status: false,
    info: "signup",
  },
  reducers: {
    openmodel: (state, action) => {
      state.status = true;
      state.info = action.payload;
    },
    closemodel: (state) => {
      state.status = false;
      state.info = null;
    },
  },
});

const updation=createSlice({
  name:"updatation",
  initialState: {
   info:false
  },
  reducers: {
    update:(state)=>{
      state.info=true
    },
    notupdate:(state)=>{
      state.info=false
    }
  },
})


export const { login, logout } = newcode.actions;
export const { openmodel, closemodel } = loginsinfo.actions;
export const {update,notupdate}=updation.actions


export { newcode, loginsinfo ,updation};

