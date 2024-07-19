import classes from './SidebarData.module.css';
import { IoIosClose } from "react-icons/io";

const SidebarData = () => {
    return (
        <div className={classes.menu_list}>
        <div className={classes.items}>
          <h3>Home</h3>
          <h3>Service</h3>
          <h3>About</h3>
          <h3>Pages</h3>
          <h3>Blocks</h3>
          <h3>Contacts</h3>
        
        </div>
        <div className={classes.close_btn}>
        <IoIosClose />
        </div>
        
         </div>
    )
}
export default SidebarData;