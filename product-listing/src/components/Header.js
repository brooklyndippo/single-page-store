import {DisplayText} from '@shopify/polaris'
import './Header.css'

function Header(props) {

    const { title, productCount, categoryCount } = props

    return (
        <div className="header">
            <div className="title">
                <DisplayText size="extraLarge" element="h1">{title}</DisplayText>
            </div>
            <p> Product Count : {productCount} </p>
            <p> Category Count: {categoryCount} </p>
        </div>
    )
}

export default Header