import * as React from "react"
import css from "./index.module.scss"
import { reduxForm, Field } from "redux-form"

export interface InputCheckboxProps {
  name: string
  title?: string
}

class InputCheckbox extends React.Component<InputCheckboxProps> {
  public state = {
    isChecked: false
  }
  public handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked
    } as { isChecked: boolean })
  }
  public render(): React.ReactNode {
    return (
      <label className={css.container}>
        <Field
          name={this.props.name}
          component={"input"}
          type={"checkbox"}
          className={css.input}
          checked={this.state.isChecked}
          onChange={this.handleCheck}
        />
        <span className={css.mark} />
        <span className={css.title}>{this.props.title}</span>
      </label>
    )
  }
}

export default reduxForm({
  form: "addOffice"
})(InputCheckbox)
