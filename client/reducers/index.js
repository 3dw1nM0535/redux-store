//This is the root reducer which returns one big
//data object for our app state
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { posts } from './posts';
import { comments } from './comments';

export const rootReducer = combineReducers({ posts, comments, router: routerReducer });



