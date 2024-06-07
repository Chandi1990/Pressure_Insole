import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {login} from 'services/api';
import {loginDataType} from './type';

const initialState: loginDataType = {
  id: '',
  token: '',
  username: '',
  firstName: '',
  LastName: '',
  isLoading: false,
};

export const userLogin = createAsyncThunk(
  'loginData/userLogin',

  async (_state: any, {dispatch}: any) => {
    try {
      const response = await login('');
      return {
        result: response.data.result,
        data: response.data as loginDataType,
      };
    } catch (error) {
      const message = JSON.stringify(error);
      console.log('login_error', message);
      throw new Error('Invalied Username or Password');
    }
  },
);

export const loginSlice = createSlice({
  name: 'loginData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.id = action.payload.data.id;
        state.token = action.payload.data.token;
        state.username = action.payload.data.username;
        state.firstName = action.payload.data.firstName;
        state.LastName = action.payload.data.LastName;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default loginSlice.reducer;
