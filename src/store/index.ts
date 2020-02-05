import { createStore, applyMiddleware } from "redux"
import redusers from "./reducer"
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"

function configureStore() {
    const middlewares = [thunkMiddleware]
    const store = createStore(
        redusers,
        composeWithDevTools(applyMiddleware(...middlewares)),
    )
    return store
}

export const store = configureStore()
