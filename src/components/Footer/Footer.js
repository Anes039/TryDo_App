import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

import classes from './Footer.module.css';
const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.first_container}>
            <div className={classes.contentt}>
                <div className={classes.title}>
               
                    <p>Ready To Do This</p>
                </div>
                <div className={classes.text}>
                    <p>Let's get to Work</p>
                </div>
                <button className={classes.btn}>Contact us</button>
                </div>
            </div>
                <div className={classes.second_container}>
                    <div className={classes.content}>
                    <div className={classes.first_list}>
                        <p>Quick Link</p>
                        <p className={classes.items}>Work</p>
                        <p className={classes.items}>About</p>
                        <p className={classes.items}>Lets Talk</p>
                    </div>
                        <div className={classes.second_list}>
                        <p>Say Hello</p>
                        <p>admin@example.com</p>
                        <p>hr@example.com</p>
                        <div className={classes.social_icons}>
                            <FaFacebook className={classes.ic}/>
                            <FaLinkedinIn className={classes.ic}/>
                            <CiInstagram className={classes.ic} />
                            <FaTwitter  className={classes.ic}/>

                        </div>
                        </div>
                        <p className={classes.copyright}>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
                        </div>

                </div>
                <p></p>
        </div>
    )
}
export default Footer;