import * as React from "react"
import css from "./index.module.scss"
import OfficeComponent from "../../common/Office"
import { Office } from "../../../store/storeTypes"

interface OwnProps {
  officesList: Office[]
}

class OfficesList extends React.Component<OwnProps> {
  public render() {
    return (
      <div className={css.officesList}>
        {this.props.officesList.map((office: Office) => {
          return (
            <OfficeComponent
              key={office.id}
              id={office.id}
              phone={office.phone}
              email={office.email}
              isPrimary={office.isPrimary}
              address={office.address}
            />
          )
        })}
      </div>
    )
  }
}

export default OfficesList
