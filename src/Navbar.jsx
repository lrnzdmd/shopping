import cart from './assets/cart-variant.svg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function Navbar({ shoppingCart }) {
    return (
        <header className='navbar bg-base-300'>
        <div className='flex-1 px-2 lg:flex-none'>
          <Link to={'/'}>
            <h1 className='text-4xl font-bold cursor-pointer'>Cars & Bikes</h1>
          </Link>
        </div>
        <div className='flex flex-1 justify-end px-2 mr-2 gap-2'>
          <ul className='flex items-stretch join-horizontal join '>
            <li>
              <Link to={'/'} className='btn btn-ghost rounded-btn text-lg join-item'>
                Home
              </Link>
            </li>
            <li className='dropdown dropdown-hover join-item'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost rounded-btn text-lg join-item'
              >
                Products
              </div>
              <ul
                tabIndex={0}
                className='menu dropdown-content bg-base-100 rounded-box z-[1] w-auto p-2 shadow'
              >
                <li>
                  <Link to={'products/cars'} className='text-lg'>Cars</Link>
                </li>
                <li>
                  <Link to={'products/motorcycles'} className='text-lg'>Motorcycles</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={'contacts'} className='btn btn-ghost rounded-btn text-lg join-item'>
                Contacts
              </Link>
            </li>
          </ul>
          <div className='indicator'>
            <Link to={'cart'}className='btn btn-sm btn-ghost btn-circle'>
                <img src={cart} alt='cart' />
            </Link>
            <div className='indicator-item badge badge-accent scale-75'>
              {shoppingCart.length}
            </div>
          </div>
        </div>
      </header>
    )
}

Navbar.propTypes = {
  shoppingCart: PropTypes.array,
}


export default Navbar;