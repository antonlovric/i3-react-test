import Carousel from '../Carousel/Carousel';
import classes from './Recipes.module.scss';
export default function Recipes(props) {
  return (
    <div id='recipes' className={classes.recipes}>
      <h2 className={classes.heading}>Recipes</h2>
      <Carousel information={props.information}></Carousel>
    </div>
  );
}
