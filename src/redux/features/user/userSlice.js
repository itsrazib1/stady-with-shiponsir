import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Razib',
  email: 'razib@gmail.com',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
