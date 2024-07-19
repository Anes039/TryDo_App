import classes from './ImageContent.module.css';
const ImageContent = ({title,text,button}) => {

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.title}>
                    <p>{title}</p>
                </div>
                <div className={classes.text}>
                    <p>{text}</p>
                </div>
                <button className={classes.btn}>Case study</button>
            </div>
        </div>
    )

}
export default ImageContent;