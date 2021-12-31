import classes from './About.module.scss';

export default function About(props) {
  return (
    <section className={classes.about} id='about'>
      <h2 className='aboutTitle'>About</h2>
      <p className='firstParagraph'>
        We are a group of food enthusiasts based in Paris who are excited to
        improve your dish repertoire! Foodies was established back in 2016. and
        we have spent years collecting all of the best recipes around the world
        in order to build the ultimate collection of the tastiest dishes in the
        world.
      </p>
      <p className='secondParagraph'>
        Down below we have a quick preview of our collection. Take a look and
        try to find something that suits you. We hope you enjoy your stay!
      </p>
    </section>
  );
}
