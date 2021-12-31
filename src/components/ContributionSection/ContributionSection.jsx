import { useInView } from 'react-intersection-observer';
import classes from './ContributionSection.module.scss';

export default function ContributionSection(props) {
  const [headingRef, headingInView, entry] = useInView({
    threshold: 0.5,
  });

  const [contributionRef, contributionInView, entryContribution] = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <section className={classes.contributionSection}>
        <h2
          ref={headingRef}
          className={[
            classes.contributionHeading,
            headingInView ? classes.visible : null,
          ].join(' ')}
        >
          How <span className='highlight'>you</span> can contribute towards this
          goal
        </h2>
        <div
          ref={contributionRef}
          className={[
            classes.contributionContainer,
            contributionInView ? classes.visible : classes.invisible,
          ].join(' ')}
        >
          {props.children.map((child) => {
            return <div>{child}</div>;
          })}
        </div>
      </section>
    </>
  );
}
