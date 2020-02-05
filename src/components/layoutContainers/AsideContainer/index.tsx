import * as React from "react"
import css from './index.module.scss'
import AsideHeader from '../../common/AsideHeader'
import AsideMenu from '../../common/AsideMenu'

const AsideContainer: React.FunctionComponent = () => {
    return (
        <div className={css.aside}>
            <AsideHeader />
            <AsideMenu />
        </div>
    )
}

export default AsideContainer
