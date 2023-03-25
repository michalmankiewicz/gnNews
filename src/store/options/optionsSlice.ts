import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type OptionsType = {
  options: 'list' | 'tiles';
};

const initialOptionsState: OptionsType = {
  options: 'list',
};

const optionsSlice = createSlice({
  name: 'options',
  initialState: initialOptionsState,
  reducers: {
    toggleOption: (state) => {
      if (state.options === 'list') state.options = 'tiles';
      else state.options = 'list';
    },
  },
});

export const { toggleOption } = optionsSlice.actions;
export default optionsSlice.reducer;
