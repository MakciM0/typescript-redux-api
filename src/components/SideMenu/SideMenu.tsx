import React, {FC, useState} from "react";
import { TProducts } from "../../types/types";
import { SetCurrentCategory } from "../../store/productsSlice";
import { useAppDispatch } from "../../store/appHooks";
import styles from './SideMenu.module.css'

interface SideMenuProps {
    products: TProducts[]
}
 
const SideMenu: FC<SideMenuProps> = (products : SideMenuProps) => {

    const [category, setCategory] = useState<string[]>(["men's clothing" , "jewelery" , "electronics" , "women's clothing"]);

    // console.log(category)
    const dispatch = useAppDispatch();

    const handleCategory = (cat:string) =>{
        dispatch(SetCurrentCategory(cat))
        //СТили для нажатой кнопки
    }

    return ( 
    <div className={styles.side}>
        {category.map((cat) =>(
            <button key={cat} onClick={() => handleCategory(cat)}>{cat}</button>
        ))}
    </div>
    );
}
 
export default SideMenu;