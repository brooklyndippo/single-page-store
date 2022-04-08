import {DisplayText} from '@shopify/polaris'


function Header(props) {

    const { title, productCount, categoryCount } = props

    return (
        <div className="Header">
            <DisplayText size="extraLarge" id="site-title">{props.title}</DisplayText>
            <p> Product Count : {props.productCount} </p>
            <p> Category Count: {props.categoryCount} </p>
        </div>
    )
}

export default Header