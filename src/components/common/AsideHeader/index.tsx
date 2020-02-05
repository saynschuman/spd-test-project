import * as React from "react"
import css from './index.module.scss'

const AsideHeader: React.FunctionComponent = () => {
    return (
        <div className={css.header}>
            <div className={css.logo} />
        </div>
    )
}

export default AsideHeader
