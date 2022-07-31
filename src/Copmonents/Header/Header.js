import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return <nav>
        <ul>
            <li>
                <NavLink to={'/dashboard/new-medicine'}>Yangi dori qo'shish</NavLink>
            </li>
            <li>
                <NavLink to={'/dashboard/out-medicine'}>Dori chiqarish</NavLink>
            </li>
            <li>
                <NavLink to={'/dashboard/in-medicine'}>Dori Kiritish</NavLink>
            </li>
        </ul>
    </nav>
}

export default Header;