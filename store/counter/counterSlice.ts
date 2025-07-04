import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state){
      state.count++;
    },
    substracctOne(state){
      if(state.count === 0) return;
      state.count--;
    },
    resetCount(state, action: PayloadAction<number>){
      if(action.payload < 0 ) action.payload = 0;
      state.count = action.payload;
    },
    initCounter(state, action: PayloadAction<number>){
      if(state.isReady) return;
      state.count = action.payload;
      state.isReady = true;
    }
  }
});

export const {addOne, substracctOne, resetCount, initCounter} = counterSlice.actions;

export default counterSlice.reducer;