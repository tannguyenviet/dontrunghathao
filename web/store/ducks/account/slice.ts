import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface IAccountStore {
  currentAccount: string;
}


const initialState = {
  currentAccount:'Vũ Long Thịnh'
} as IAccountStore;

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setCurrentAccount(state, action: PayloadAction<any>) {
      return {
        ...state,
        currentAccount: action.payload,
      };
    },
  },
});

export const getAccount = (state: RootState) => state.account.currentAccount;
export const { setCurrentAccount } = accountSlice.actions;
export default accountSlice.reducer;
