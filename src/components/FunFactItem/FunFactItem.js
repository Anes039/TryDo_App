import classes from './FunFactItem.module.css';
const ItemContainer = ({img,title,text}) => {
    return (
        <div className={classes.container}>
                <div className={classes.content}>
                
                    <div className={classes.title} >
                        {title} <span>+</span>
                    </div>
                    <div  className={classes.text}>
                        <p>{text} </p>
                    </div>
                </div>
        </div>
    )
}
export default ItemContainer;