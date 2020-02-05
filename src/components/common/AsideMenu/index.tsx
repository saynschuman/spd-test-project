import * as React from "react"
import css from './index.module.scss'

const AsideMenu: React.FunctionComponent = () => {
    return (
        <nav className={css.asideMenu}>
            <ul>
                <li>
                    <a href="#">Company info</a>
                    <ul className={css.subMenu}>
                        <li><a href="#" className={css.checked}>Basic info</a></li>
                        <li><a href="#" className={css.active}>Offices</a></li>
                        <li><a href="#" className={css.light}>Competitors</a></li>
                    </ul>
                </li>
                <li><a href="#">My Firm</a></li>
                <li><a href="#">Deals</a></li>
                <li><a href="#">Financials</a></li>
            </ul>
        </nav>
    )
}

export default AsideMenu
