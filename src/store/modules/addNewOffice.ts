import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { AddNewOffice } from '../storeTypes'

const INITIAL_STATE: AddNewOffice = {
    showAdding: false
}

const ACF = actionCreatorFactory()

export const addNewOffice = ACF<void>("SHOW_ADDING");
export const cancelAdding = ACF<void>("CANCEL_ADDING");

export default reducerWithInitialState(INITIAL_STATE)
    .case(addNewOffice, state => ({ ...state, showAdding: true}))
    .case(cancelAdding, state => ({ ...state, showAdding: false}))