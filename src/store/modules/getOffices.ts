import { firebaseInited } from "../../api/config"
import { remove } from "../../api"
export const GET_OFFICES = "GET_OFFICES"
export const DEL_OFFICE = "DEL_OFFICE"
export const ADD_OFFICE = "ADD_OFFICE"
import { Form, Offices } from "../storeTypes"

const ref = firebaseInited.db.ref()

const initialState: Offices = {
  officesList: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_OFFICES:
      if (action.officesList === null) {
        return { ...state, officesList: state.officesList }
      } else {
        return {
          ...state,
          officesList: state.officesList.concat(action.officesList)
        }
      }
    case DEL_OFFICE:
      return {
        ...state,
        officesList: state.officesList.filter(item => item.id !== action.id)
      }
    case ADD_OFFICE:
      return {
        ...state,
        officesList: state.officesList.concat(action.payload)
      }
    default:
      return state
  }
}

export const getOffices = () => dispatch => {
  ref.once("value", snapshot => {
    if (snapshot.val() === null || snapshot.val() === undefined) {
      return
    } else {
      const normalized = Object.keys(snapshot.val()).map(
        item => snapshot.val()[item]
      )
      dispatch({ type: GET_OFFICES, officesList: normalized })
    }
  })
}

export const delOffice = (id: number) => dispatch => {
  remove(id)
  dispatch({ type: DEL_OFFICE, id })
}

export const addOffice = (values: Form) => dispatch => {
  const id = Date.now()
  const val = {
    id,
    country: values.country,
    state: values.state,
    code: values.code,
    city: values.city,
    address: values.address || "default address",
    address2: values.address2,
    phone: values.phone || "default phone",
    fax: values.fax,
    email: values.email || "default email"
  }
  ref.child("/").child(`${id}`).set(val)

  dispatch({
    type: ADD_OFFICE,
    payload: {
      id,
      country: values.country,
      state: values.state,
      code: values.code,
      city: values.city,
      address: values.address || "default address",
      address2: values.address2,
      phone: values.phone || "default phone",
      fax: values.fax,
      email: values.email || "default email"
    }
  })
  console.log(val)
}
