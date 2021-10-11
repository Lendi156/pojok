import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer, persistStore,
} from 'redux-persist';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import searchEssayReducer from './searchEssay';
import openEssayReducer from './openEssay';
import tagFilterReducer from './tagFilter';
import writerFilterReducer from './writerFilter';
import likeandCommentReducer from './likeandComment';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  search: persistReducer(persistConfig, searchEssayReducer),
  open: persistReducer(persistConfig, openEssayReducer),
  tagFilter: persistReducer(persistConfig, tagFilterReducer),
  writerFilter: persistReducer(persistConfig, writerFilterReducer),
  likeandComment: persistReducer(persistConfig, likeandCommentReducer),
});

const store = configureStore({
  reducer: reducers,
  middleware: [logger],
});

const persistor = persistStore(store);

export { store, persistor };
