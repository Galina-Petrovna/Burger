import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  name: '',
  phone: '',
  format: 'delivery',
  address: '',
  floor: '',
  intercom: '',
};

const formSlice = createSlice ({
  name: 'form',
  initialState,
  reducers: {
    uppdateFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    }
  }
});

export const {uppdateFormValue} = formSlice.actions;

export default formSlice.reducer;