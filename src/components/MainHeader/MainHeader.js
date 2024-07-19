import classes from "./MainHeader.module.css";
import ItemContainer from "../ItemContainer/ItemContainer.js";
import BurgerMenu from "../BurgerMenu/BurgerMenu.js";


const MainHeader = ({ items }) => {
 
  
  return (
   
    <div className={classes.container}>
      <div className={classes.img_and_text}>
        <img
          src="https://trydo.rainbowit.net/assets/images/logo/logo.png"
          alt=""
        />
      </div>
      
      <div className={classes.menu_list}>
        <div className={classes.items}>
          <h3>Home</h3>
          <i class="fa-sharp fa-thin fa-square-xmark"></i>
          <h3>Service</h3>
          <h3>About</h3>
          <h3>Pages</h3>
          <h3>Blocks</h3>
          <h3>Contacts</h3>
         
        </div>
        <div className={classes.button}>
          <button>Buy now</button>
        </div>
      </div>
      <div className={classes.agency_container}>
        <h1> A Digital </h1>
        <h1>Agency</h1>
      </div>
    
      <BurgerMenu />
      <div className={classes.item_container}>
      {items.map((item) => {
        return (
          
          <ItemContainer
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          />
          
        );
      })}
      </div>
    </div>
  );
};
export default MainHeader;
