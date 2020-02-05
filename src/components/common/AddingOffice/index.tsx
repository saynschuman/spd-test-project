import * as React from "react"
import css from "./index.module.scss"
import CancelButton from "../../common/CancelButton"
import EditButton from "../../common/EditButton"
import CustomInput from "../../common/CustomInput"
import { cancelAdding } from "../../../store/modules/addNewOffice"
import CustomCheckbox from "../../common/CustomCheckbox"
import { addOffice } from "../../../store/modules/getOffices"
import { connect } from "react-redux"
import { reduxForm, formValueSelector } from "redux-form"
import { Form } from "../../../store/storeTypes"

interface DispatchProps {
  cancelAdding: () => void
  addOffice: (values: Form) => void
}

type Props = {} & Form & DispatchProps

const AddingOffice: React.FunctionComponent<Props> = props => {
  const handleAdd = (): void => {
    const preValues = {
      country: props.country,
      state: props.state,
      code: props.code,
      city: props.city,
      address: props.address,
      address2: props.address2,
      phone: props.phone,
      fax: props.fax,
      email: props.email,
      officeType: props.officeType
    }
    const values = JSON.parse(JSON.stringify(preValues, (k, v) => {
      if (v === undefined) { return null; } return v;
    }));
    props.addOffice(values)
    props.cancelAdding()
  }
  return (
    <div className={css.office}>
      <div className={css.block}>
        <div className={css.field}>
          <label className={css.label}>*Country:</label>
          <CustomInput name="country" />
        </div>
        <div className={css.field}>
          <label className={css.label}>*State/Province:</label>
          <CustomInput name={"state"} />
        </div>
        <div className={css.field}>
          <label className={css.label}>*Postal Code:</label>
          <CustomInput name={"code"} />
        </div>
        <div className={css.field}>
          <label className={css.label}>*City:</label>
          <CustomInput name={"city"} />
        </div>
        <div className={css.field}>
          <label className={css.label}>*Street Address:</label>
          <CustomInput name={"address"} />
        </div>
        <div className={css.field}>
          <label className={css.label}>Address 2:</label>
          <CustomInput name={"address2"} />
        </div>
      </div>
      <div className={css.block}>
        <div className={css.field}>
          <label className={css.label}>Phone:</label>
          <CustomInput name={"phone"} />
        </div>
        <div className={css.field}>
          <label className={css.label}>Fax:</label>
          <CustomInput name={"fax"} />
        </div>
        <div className={css.field}>
          <label className={css.label}>Email:</label>
          <CustomInput name={"email"} />
        </div>
        <div className={css.field}>
          <label className={css.labelOffice}>*Office Type:</label>
          <CustomCheckbox name={"officeType"} title={"Primary HQ"} />
        </div>
      </div>
      <div className={css.navBlock}>
        <CancelButton onClick={() => props.cancelAdding()} title={"Cancel"} />
        <EditButton onClick={handleAdd} title={"Save"} />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    cancelAdding: () => dispatch(cancelAdding()),
    addOffice: (values) => dispatch(addOffice(values))
  }
}
const selector = formValueSelector("addOffice")
export default reduxForm({
  form: "addOffice"
})(
  connect(
    store => {
      const country = selector(store, 'country')
      const state = selector(store, 'state')
      const code = selector(store, 'code')
      const city = selector(store, 'city')
      const address = selector(store, 'address')
      const address2 = selector(store, 'address2')
      const phone = selector(store, 'phone')
      const fax = selector(store, 'fax')
      const email = selector(store, 'email')
      const officeType = selector(store, 'officeType')
      const id = selector(store, 'id')
      return {
        country,
        state,
        code,
        city,
        address,
        address2,
        phone,
        fax,
        email,
        officeType,
        id
      }
    },
    mapDispatchToProps
  )(AddingOffice)
)
