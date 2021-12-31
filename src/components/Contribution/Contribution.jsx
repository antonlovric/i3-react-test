import Image from 'next/image';
import classes from './Contribution.module.scss';
export default function Contribution(props) {
  return (
    <>
      <div className={classes.contributionContainer}>
        <div className={classes.imageContainer}>
          <Image src={props.image} width={350} height={400}></Image>
        </div>
        <p className='contributionDescription'>{props.text}</p>
      </div>
    </>
  );
}
