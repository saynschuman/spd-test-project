import * as React from "react"
import css from "./index.module.scss"
import RemoveButton from "../../common/RemoveButton"
import EditButton from "../../common/EditButton"
import { Office } from "../../../store/storeTypes"
import {connect} from 'react-redux'
import { delOffice } from "../../../store/modules/getOffices"


interface DispatchProps {
  delOffice: (id: number) => void
}

type Props = Office & DispatchProps

const OfficeComponent: React.FunctionComponent<Props> = props => {
  const deleteOffice = () => {
    props.delOffice(props.id)
    console.log(props.id)
  }
  return (
    <div className={css.office}>
      <div className={css.addressBlock}>
        <div className={css.addressTitle}>Address:</div>
        <div className={css.address}>
          {props.isPrimary && <div className={css.primary}>Primary HQ</div>}
          <div className={css.addressContent}>{props.address}</div>
        </div>
      </div>
      <div className={css.infoBlock}>
        <div className={css.infoItem}>
          <div className={css.infoTitle}>Phone:</div>
          <div className={css.infoContent}>{props.phone}</div>
        </div>
        <div className={css.infoItem}>
          <div className={css.infoTitle}>Email:</div>
          <div className={css.infoContent}>{props.email}</div>
        </div>
      </div>
      <div className={css.navBlock}>
        <RemoveButton onClick={deleteOffice} title={"Remove"} />
        <EditButton title={"Edit"} />
      </div>
    </div>
  )
}


const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    delOffice: (id) => dispatch(delOffice(id))
  }
}

export default connect(null, mapDispatchToProps)(OfficeComponent)
