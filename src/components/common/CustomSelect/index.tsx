import * as React from "react"
import css from "./index.module.scss"
import { reduxForm, Field } from "redux-form"

interface SelectValue {
  label: string
  value: string
}

interface StateProps {
  value: string
  showOptions: boolean
}

interface OwnProps {
  data: SelectValue[]
  name: string
}

class CustomSelect extends React.Component<OwnProps, StateProps> {
  public state = {
    value: "",
    showOptions: false
  }
  public handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      value: e.target.value
    } as { value: string })
  }
  public selectOption = (value: string) => {
    this.setState({
      value
    } as { value: string })
    setTimeout(() => this.hideOptionsHandle(), 10)
  }
  public showOptionsHandle = (): void => {
    this.setState({
      showOptions: true
    } as { showOptions: boolean })
  }
  public hideOptionsHandle = (): void => {
    setTimeout(
      () =>
        this.setState({
          showOptions: false
        } as { showOptions: boolean }),
      200
    )
  }
  public render(): React.ReactNode {
    return (
      <div className={css.customSelect}>
        <Field
          component={() => {
            return (
              <input
                type="text"
                onChange={this.handleChange}
                value={this.state.value}
                onFocus={this.showOptionsHandle}
                name={this.props.name}
              />
            )
          }}
        />
        {this.state.showOptions && (
          <div className={css.options}>
            {this.props.data
              // .filter(item => item.value.includes(this.state.value))
              .map((item, index) => {
                const { value } = item
                return (
                  <div
                    key={index}
                    className={css.disabled}
                    onClick={() => this.selectOption(value)}
                  >
                    {value}
                  </div>
                )
              })}
          </div>
        )}
      </div>
    )
  }
}

export default reduxForm({
  form: "addOffice"
})(CustomSelect)
