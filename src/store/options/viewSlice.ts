import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type ViewType = {
  viewType: 'list' | 'tiles';
  numberOfNews: number | null;
};

const initialViewState: ViewType = {
  viewType: 'list',
  numberOfNews: null,
};

const viewSlice = createSlice({
  name: 'view',
  initialState: initialViewState,
  reducers: {
    toggleViewType: (state) => {
      if (state.viewType === 'list') state.viewType = 'tiles';
      else state.viewType = 'list';
    },
    setNumberOfNews: (state, action: PayloadAction<number>) => {
      state.numberOfNews = action.payload;
    },
  },
});

export const { toggleViewType, setNumberOfNews } = viewSlice.actions;
export default viewSlice.reducer;
