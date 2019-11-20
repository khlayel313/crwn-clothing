import React from 'react';
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {setCurrentCart} from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

const cartIcon = ({setCurrentCart}) => (
<div className="cart-icon" onClick={setCurrentCart}>
<ShoppingIcon className="shopping-icon" />

<span className="item-count">5</span>

</div>
)

const mapStateToProps = ({cart}) => ({
    currentCart: cart.currentCart
  })

const mapDispatchToProps = dispatch => ({
    setCurrentCart: () => dispatch(setCurrentCart())
    })
export default connect(mapStateToProps,mapDispatchToProps)(cartIcon);