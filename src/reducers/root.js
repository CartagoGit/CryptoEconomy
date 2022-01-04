import { combineReducers } from "redux";
import { main } from "./main";
import { global } from "./global";
import {data} from './data';

export const rootReducer = combineReducers({ main, global, data });
