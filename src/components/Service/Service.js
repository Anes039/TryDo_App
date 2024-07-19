import classes from './Service.module.css';
import Business from '../IMG/icons8-bonds-50.png';
import Website from '../IMG/WebsiteDev.png';
import Marketing from '../IMG/group_p.png';
import Mobile from '../IMG/mobile app development.png';
import Serviceitems from '../ServiceItems/ServiceItems'

const Service = () => {
    const DummyData = [
        {
            img: Business,
            title: 'Business Strategy',
            text: 'I throw myself down around the tall grass by the stream as I lie close to the earth',
        },
        {
            img:  Website,
            title: 'Website Development',
            text: 'I throw myself down around the tall grass by the stream as I lie close to the earth',
        },
        {
            img:  Marketing,
            title: 'Marketing and Reporting',
            text: 'I throw myself down around the tall grass by the stream as I lie close to the earth',
        },
        {
            img:  Mobile,
            title: 'Mobile App Development',
            text: 'I throw myself down around the tall grass by the stream as I lie close to the earth',
        },
    ];

    return (
        <div className={classes.service_container}>
            <div className={classes.service_content}>
                <h3>Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa dolorum error eligendi eius incidunt atque distinctio quae earum sed?</p>
                <br></br>
                <p className={classes.request}>Request Custom Service</p>
                <div className={classes.line}>

                </div>
            </div>
            <div className={classes.container}>
            <ul className={classes.list}>
                {DummyData.map((item, id) => (
                    <Serviceitems key={item.id} img={item.img} title={item.title} text={item.text}/>
                    
            
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Service;
