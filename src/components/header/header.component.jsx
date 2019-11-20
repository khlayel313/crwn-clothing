import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {ReactComponent as Logo} from '../../assets/crown.svg'



const Header = ({currentUser,currentCart}) => (
   

    <div className='header'>
        <Link to='/' className="logo-container"><Logo className="logo" /></Link>
        <div className="options">
        <Link to='/shop' className="option">SHOP</Link>
        <Link to='/' className="option">CONTACT</Link>
        
        {
           
            currentUser ?
            <div className="option" onClick={() => auth.signOut() }>SIGN OUT</div>
            :
            <Link to='/signin' className="option">SIGN IN</Link>
        }

        <CartIcon />
       
        </div>
{
    currentCart ? null :
        <CartDropdown></CartDropdown>
}
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {currentCart}}) => ({
    currentUser,
    currentCart
})

export default connect(mapStateToProps)(Header);