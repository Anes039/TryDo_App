import classes from './OurWorks.module.css';
import FunFactitem from '../FunFactItem/FunFactItem';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
const OurWorks = ( ) => {
    const DummyData = [
        {
            title:'199' ,
            text:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
        },
        {
            title:'575',
            text:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
        },
        {
            title:'69',
            text:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.',
        },
        
    ]
    return (
        <div className={classes.container}> 
            
            <div className={classes.content}>
                <div className={classes.upper_content}>
                    <h3>Our works</h3>
                    <p>There are many variations of passages of Lorem Ipsum available,
                         but the majority have suffered alteration.</p>
                </div>
                <div className={classes.carousel}>
                    <ImageCarousel />
                </div>
                <div className={classes.ourFunFacts}>
                       <p className={classes.text}>Our Fun Facts</p>
                        <div className={classes.item_container}>
                            <ul>
                                {DummyData.map((item) => 
                                <li>
                                   <FunFactitem title={item.title} text={item.text} />
                                   </li>
                                )}
                                </ul>
                        </div>
                </div>
            </div>

        </div>
    )

}
export default OurWorks;