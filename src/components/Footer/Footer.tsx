import { FC } from "react";

import styles from './Footer.module.css'

interface FooterProps {
    
}
 
const Footer: FC<FooterProps> = () => {
    return ( 
        <footer>
            <div className={styles.footer}>
                <h1>Footer</h1>
            </div>
        </footer> 
    );
}
 
export default Footer;