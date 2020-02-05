import { firebaseInited } from "./config"
import { Form } from "../store/storeTypes"

export const ref = firebaseInited.db.ref()

export const set = (val: Form) => {
  const id = Date.now()
  ref.child("/").child(`${id}`).set({...val, id})
}

export const update = (key: string, value: string) => {
  ref
    .update({
      [key]: value
    })
    .then(() => {
      console.log("Document successfully written!")
    })
    .catch((error: any) => {
      console.error("Error writing document: ", error)
    })
}

export const remove = (key: number) => {
  const value = key.toString()
  ref.child("/").child(value).set(null)
}
