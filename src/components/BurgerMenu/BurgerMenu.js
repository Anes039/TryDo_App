import classes from "./BurgerMenu.module.css";
import { useState } from "react";
import SidebarData from "../SidebarData/SidebarData";
const BurgerMenu = () => {
  const [isShow, setIsShow] = useState(false);
  const onClickHandler = () => {
    setIsShow(!isShow);
  };
  return (
    <div className={classes.container} onClick={onClickHandler}>
      <img
        src="https://cdn-icons-png.flaticon.com/128/9451/9451364.png"
        alt=""
      />
      {isShow ? <SidebarData />  : ""}
    </div>
  );
};
export default BurgerMenu;
