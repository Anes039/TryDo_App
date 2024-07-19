import classes from './ItemContainer.module.css';
const ItemContainer = ({img,title,text}) => {
    return (
        <div className={classes.container}>
                <div className={classes.content}>
                    <img  src={img} alt="" />
                    <div className={classes.title} >
                        {title}
                    </div>
                    <div  className={classes.text}>
                        <p>{text}</p>
                    </div>
                </div>
        </div>
    )
}
export default ItemContainer;