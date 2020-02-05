import * as React from "react"
import css from "./index.module.scss"
import PageTitleBlock from "../../common/PageTitleBlock"
import AddButton from "../../common/AddButton"
import BackButton from "../../common/BackButton"
import SkipButton from "../../common/SkipButton"
import ContinueButton from "../../common/ContinueButton"
import Counter from "../../common/Counter"
import OfficesList from "../../common/OfficesList"
import CommentsLink from "../../common/CommentsLink"
import { connect } from "react-redux"
import { addNewOffice } from "../../../store/modules/addNewOffice"
import AddingOffice from "../../common/AddingOffice"
import IStore, { Office, Offices } from "../../../store/storeTypes"
import { getOffices } from "../../../store/modules/getOffices"

interface StoreProps {
  showAdding: boolean
  officesList: Office[]
}

interface DispatchProps {
  addNewOffice: () => void
  getOffices: () => Offices
}

type Props = StoreProps & DispatchProps

class MainContainer extends React.Component<Props> {
  public componentDidMount(): void {
    this.props.getOffices()
  }

  public render() {
    return (
      <div className={css.mainContainer}>
        <PageTitleBlock />
        <div className={css.addingBlock}>
          <AddButton
            onClick={() => this.props.addNewOffice()}
            title={"Add New Office"}
          />
          <Counter count={this.props.officesList.length} />
        </div>
        {this.props.showAdding && <AddingOffice />}
        <OfficesList officesList={this.props.officesList} />
        <div className={css.pageFooter}>
          <div className={css.left}>
            <BackButton title={"Back"} />
            <CommentsLink text={"Provide additional comments"} />
          </div>
          <div className={css.right}>
            <SkipButton title={"Skip this step"} />
            <ContinueButton title={"Continue"} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: IStore): StoreProps => {
  return {
    showAdding: state.addNewOffice.showAdding,
    officesList: state.offices.officesList
  }
}

const mapDispatchToProps = (dispatch): DispatchProps => {
  return {
    addNewOffice: () => dispatch(addNewOffice()),
    getOffices: () => dispatch(getOffices()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)
