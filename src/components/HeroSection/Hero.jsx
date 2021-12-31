import Image from 'next/image';
import classes from './Hero.module.scss';
import logoPicture from '../../../public/logo.png';

export default function Hero(props) {
  return (
    <div className={classes.hero}>
      <Image className={classes.logoPicture} src={logoPicture}></Image>
      <div className={classes.heroText}>
        <h1>Foodies</h1>
        <h2>
          Various recipes, ingredients and general nutritional knowledge all in
          one place!
        </h2>
      </div>
    </div>
  );
}
