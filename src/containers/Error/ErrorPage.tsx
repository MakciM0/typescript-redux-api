import React, {FC} from 'react';
import { useAppSelector } from '../../store/appHooks';

import styles from './Error.module.scss'

interface ErrorPageProps {
  
}
 
const ErrorPage: FC<ErrorPageProps> = () => {

  return (
  <div className={styles.ErrorPage}>
    <p>Error 404 </p>
  </div> 
  );
}
 
export default ErrorPage;