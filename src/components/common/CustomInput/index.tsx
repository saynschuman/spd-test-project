import * as React from "react"
import css from "./index.module.scss"
import classNames from "classnames"
import { reduxForm, Field } from "redux-form"

interface IState {
  filled: boolean
}

interface OwnProps {
    name: string
}

class CustomInput extends React.Component<OwnProps, IState> {
  public state = {
    filled: false
  }
  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      this.setState({
        filled: true
      } as IState)
    } else {
      this.setState({
        filled: false
      } as IState)
    }
  }
  public render(): React.ReactNode {
    return (
      <div className={css.customInput}>
        <Field
          onChange={e => this.handleChange(e)}
          className={classNames({ [css.filled]: this.state.filled })}
          name={this.props.name}
          component={"input"}
        />
      </div>
    )
  }
}

export default reduxForm({
  form: "addOffice"
})(CustomInput)
