import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import roles from "../data/roles.json";
interface RoleState {
  role: string;
}

const initialState: RoleState = {
  role: roles[0],
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<number>) => {
        const roleIndex = action.payload;
        if (roleIndex >= 0 && roleIndex < roles.length) {
            state.role = roles[roleIndex];
        }    
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
