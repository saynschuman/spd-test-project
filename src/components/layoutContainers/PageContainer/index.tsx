import * as React from "react"
import css from './index.module.scss'

const PageContainer: React.FunctionComponent = props => {
    return (
        <div className={css.pageWrapper}>
            <div className={css.pageInner}>
                {props.children}
            </div>
        </div>
    )
}

export default PageContainer
