import * as React from "react"
import css from './index.module.scss'

interface OwnProps {
    count: number
}

const Counter: React.FunctionComponent<OwnProps> = props => {
    return (
        <div className={css.counter}>
            {props.count} Offices
        </div>
    )
}

export default Counter
