import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FloorAccessState {
  floors: boolean[]; 
}

const initialState: FloorAccessState = {
  floors: [false, false, false, false, false], 
};

const floorSlice = createSlice({
  name: 'floorAccess',
  initialState,
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => {
      const floorIndex = action.payload;
      if (floorIndex >= 0 && floorIndex < state.floors.length) {
        state.floors[floorIndex] = !state.floors[floorIndex];
      }
    },
  },
});

export const { changeAccess } = floorSlice.actions;

export default floorSlice.reducer;
