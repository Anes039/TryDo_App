import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <img
          src="https://trydo.rainbowit.net/assets/images/about/about-1.jpg"
          alt=""
        />
      </div>
      <div className={classes.side_content}>
        <div className={classes.about_content}>
          <div className={classes.title}>
            <h1>About</h1>
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of lorem ipsum.
          </p>
        </div>
        <div className={classes.content_group}>
          <div className={classes.first_content}>
            <div className={classes.title}>
              <h3>Who we are</h3>
            </div>
            <div className={classes.text}>
              <p>
                There are many vtions of passages of Lorem Ipsum available, but
                the majority have suffered.
              </p>
            </div>
          </div>
          <div className={classes.second_content}>
            <div className={classes.title}>
              <h3>Who we are</h3>
            </div>
            <div className={classes.text}>
              <p>
                There are many vtions of passages of Lorem Ipsum available, but
                the majority have suffered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
