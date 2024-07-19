import classes from './CompanyStaff.module.css';
const CompanyStaff = () => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.text}>
                    <p>Aklima The standard chunk of Lorem Ipsum used since the 1500s is
                         reproduced below for those interested. Sections Bonorum et Malorum original.</p>
                </div>
                    <div className={classes.title}>
                        <p>Aklima - COO,AMERIMAR ENTERPRSES,INC</p>
                    </div>
                    <div className={classes.photo_list}>
                        <div className={classes.first_row}>
                            <img src="https://trydo.rainbowit.net/assets/images/client/testimonial-1.jpg" alt="" />
                            <img src="https://trydo.rainbowit.net/assets/images/client/testimonial-2.jpg" alt="" />
                            <img src="https://trydo.rainbowit.net/assets/images/client/testimonial-3.jpg" alt="" />
                            <img src="https://trydo.rainbowit.net/assets/images/client/testimonial-4.jpg" alt="" />
                            <img src="https://trydo.rainbowit.net/assets/images/client/testimonial-5.jpg" alt="" />
                        </div>
                        <div className={classes.second_row}>
                            <img src="https://trydo.rainbowit.net/assets/images/client/testimonial-6.jpg" alt="" />
                            <img src="https://trydo.rainbowit.net/assets/images/client/testimonial-7.jpg" alt="" />
                            <img src="https://trydo.rainbowit.net/assets/images/client/testimonial-8.jpg" alt="" />
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default CompanyStaff;