import classes from './GenerateRecipeSection.module.scss';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
export default function GenerateRecipeSection(props) {
  const summary = useRef(null);
  const [headingRef, headingInView, entry] = useInView({
    threshold: 0.3,
  });
  const [descriptionRef, descriptionInView, entryDesc] = useInView();
  const [buttonRef, buttonInView, entryButton] = useInView();
  const [recipeTitleRef, recipeTitleInView, entryTitle] = useInView();
  const [recipeImageRef, recipeImageInView, entryImage] = useInView();
  const [recipeIngredientsRef, recipeIngredientsInView, entryIngredients] =
    useInView();
  const [recipeInstructionsRef, recipeInstructionsInView, entryInstructions] =
    useInView();
  const [recipeSummaryRef, recipeSummaryInView, entrySummary] = useInView();

  const [recipeVisibility, setRecipeVisibility] = useState(false);
  return (
    <>
      <section className={classes.generateRecipeSection}>
        <h2
          ref={headingRef}
          className={[
            classes.generateRecipeHeading,
            headingInView ? classes.visible : classes.invisible,
          ].join(' ')}
        >
          Vegan Dishes
        </h2>
        <p
          className={descriptionInView ? classes.visible : classes.invisible}
          ref={descriptionRef}
        >
          Promoting vegan culture is detrimental to stopping animal cruelty and
          we can help you take your first step in the right direction! Click on
          the button below and allow us to recommend a delicious vegan dish you
          can create out of the comfort of your home.
        </p>
        <div className={classes.generateButtonContainer}>
          <button
            className={buttonInView ? classes.visible : classes.invisible}
            ref={buttonRef}
            onClick={() => {
              setRecipeVisibility(!recipeVisibility);
            }}
          >
            Generate a new recipe
          </button>
        </div>

        <div
          className='newRecipeContainer'
          style={{ display: recipeVisibility ? 'block' : 'none' }}
        >
          <div
            ref={recipeImageRef}
            className={
              (classes.recipeImageContainer,
              recipeImageInView ? classes.visible : classes.invisible)
            }
          >
            <Image
              className={classes.recipeImage}
              src={props.recipe.image}
              width={556}
              height={370}
            ></Image>
          </div>

          <h3
            ref={recipeTitleRef}
            className={recipeTitleInView ? classes.visible : classes.invisible}
          >
            {props.recipe.title}
          </h3>

          <p
            dangerouslySetInnerHTML={createMarkup(props.recipe.summary)}
            ref={summary}
          ></p>

          <div
            className={
              recipeIngredientsInView ? classes.visible : classes.invisible
            }
            ref={recipeIngredientsRef}
          >
            <h4>Ingredients:</h4>
            <ul>
              {props.recipe.extendedIngredients.map((ingredient) => {
                return <li>{ingredient.original}</li>;
              })}
            </ul>
          </div>
          <h4>Instructions:</h4>
          <div
            ref={recipeInstructionsRef}
            className={[
              classes.instructions,
              recipeInstructionsInView ? classes.visible : classes.invisible,
            ]}
            dangerouslySetInnerHTML={createMarkup(props.recipe.instructions)}
          ></div>
        </div>
      </section>
    </>
  );
}

function createMarkup(summary) {
  return { __html: summary };
}
