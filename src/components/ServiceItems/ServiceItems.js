import classes from './ServiceItems.module.css';
const Serviceitems = ({img,title,text}) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
            <div className={classes.img_container}>
                <img src={img} alt="" />
            </div>
            <div className={classes.title}>
                <p>{title}</p>
            </div>
            <div className={classes.text}>
                <p>{text}</p>
            </div>
            </div>
        </div>
    )
}
export default Serviceitems;