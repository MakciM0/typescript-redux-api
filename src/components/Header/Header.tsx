import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../store/appHooks';
import { SetCurrentCategory } from '../../store/productsSlice';

import styles from './Header.module.css'


interface HeaderProps {
    
}
 
const Header: FC<HeaderProps> = () => {

    const dispatch = useAppDispatch();
    
    return ( 
        <header>
            <div className={styles.wrap}>
                <div className={styles.logo}>
                    <h1>Logo</h1>
                </div>
                <div className={styles.links}>
                    <NavLink to={'/Main'}>
                        Main
                    </NavLink>
                    <NavLink to={'/Shop'} onClick={() => {dispatch(SetCurrentCategory(''))}}>
                        Shop
                    </NavLink>
                    <NavLink to={'/Cart'}>
                        Cart
                    </NavLink>
                </div> 
            </div>
        </header>
     );
}
 
export default Header;