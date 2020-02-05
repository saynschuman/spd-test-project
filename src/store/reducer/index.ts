import { combineReducers } from "redux";
import IStore from "../storeTypes";
import addNewOffice from "../modules/addNewOffice";
import offices from "../modules/getOffices";
import {reducer as form} from 'redux-form'

export default combineReducers<IStore>({
  addNewOffice,
  offices,
  form,
});
