import * as React from "react"
import css from './index.module.scss'

interface OwnProps {
    text: string
}

const CommentsLink: React.FunctionComponent<OwnProps> = props => {
    return (
        <div className={css.link}>
            {props.text}
        </div>
    )
}

export default CommentsLink
