import Image from 'next/image';
import crueltyFreeImage from '../../../public/crueltyFreeImage.jpg';
import classes from './CrueltyFreeHero.module.scss';
export default function CrueltyFreeHero() {
  return (
    <>
      <div className={classes.heroContainer}>
        <div className={classes.heroTextContainer}>
          <p className={classes.heroText}>
            Throughout human history many different animal species have suffered
            and have even been eradicated from planet Earth. We are therefore
            calling for an end to <span className='highlight'> ALL</span> forms
            of animal cruelty.{' '}
          </p>
          <p className={classes.heroText}>
            Our support of <span className='highlight'> #BeCrueltyFree</span> is
            a first step towards ending animal cruelty. We hope to continue
            together on our path towards making this planet a more friendly
            habitat for all of it’s residents.{' '}
          </p>
        </div>
        <div className={classes.heroImageContainer}>
          <Image src={crueltyFreeImage} layout='fill'></Image>
        </div>
      </div>
    </>
  );
}
