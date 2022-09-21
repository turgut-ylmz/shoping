import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//Redux Toolkit, Redux ve eklentilerini derleyip, best practice'leri uygulayarak bir araya getiren bir kütüphane.
import axios from "axios";

const initialState = {
  productsList: [],
  loading: true,
};



export const getProducts = createAsyncThunk( //Async isteklerinizi bu fonksiyonla kullandığınızda Promise'in dönüş durumuna bağlı olarak  bir action çağırır.
  "products/getProducts", 
  async () => {
    const url = `https://mazaka-api.herokuapp.com/data`;
    try {
      const { data } = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  
);

const Slice = createSlice({//Slice komponentlerin oluşturulmasını sağlar. createSlice içerisinde ; name, initialState ve reducers tanımlamalarını yapmamız gerekmektedir.
  name: "products",
  initialState,
  reducers: {
    clearProductsList: (state) => {
      state.productsList = [];
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.productsList = payload;
    },
    [getProducts.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { clearProductsList } = Slice.actions;
export default Slice.reducer;
