import { configureStore } from "@reduxjs/toolkit";
import { newcode, loginsinfo,updation } from "./authslice";

const store = configureStore({
  reducer: {
    auth: newcode.reducer,      // login/logout state
    modal: loginsinfo.reducer,  // modal state
    updation:updation.reducer,
  },
});

export default store;

