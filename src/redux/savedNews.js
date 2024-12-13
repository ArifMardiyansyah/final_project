import { createSlice } from '@reduxjs/toolkit';

const savedNews = createSlice({
  name: 'saved',
  initialState: [],
  reducers: {
    saveArticle: (state, action) => {
      if (!state.some(article => article.url === action.payload.url)) {
        state.push(action.payload);
      }
    },
    unsaveArticle: (state, action) => {
      return state.filter(article => article.url !== action.payload.url);
    }
  }
});

export const { saveArticle, unsaveArticle } = savedNews.actions;
export default savedNews.reducer;