import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import roels from '../data/roles.json';


interface RoleState {
  role: string; 
}

const initialState: RoleState = {
  role: roels[0], 
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      const newRole = action.payload;
      if (roels.includes(newRole)) {
        state.role = newRole;
      }
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
