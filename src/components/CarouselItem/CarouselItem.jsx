import Image from 'next/image';
import classes from './CarouselItem.module.scss';
export default function CarouselItem(props) {
  return (
    <div className={classes.carouselItem}>
      <Image
        height={250}
        width={250}
        src={props.information.image}
        className={classes.image}
      ></Image>
      <p className={classes.recipeTitle}>{props.information.title}</p>
    </div>
  );
}
