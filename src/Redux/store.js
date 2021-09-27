import { configureStore } from '@reduxjs/toolkit';
import storageSession from 'redux-persist/lib/storage/session';
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
  storage: storageSession,
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
