import * as React from "react"
import css from './index.module.scss'

interface OwnProps {
    title: string
}

const AddButton: React.FunctionComponent<OwnProps> = props => {
    return (
        <div>
            <button className={css.button}>{props.title}</button>
        </div>
    )
}

export default AddButton
