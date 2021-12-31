import { useState } from 'react';
import classes from './MobileNavBar.module.scss';
export default function MobileNavBar(props) {
  const [navBarShown, setNavBarShown] = useState(false);
  return (
    <>
      <div
        className={classes.hamburger}
        onClick={() => setNavBarShown(!navBarShown)}
      >
        <div className='hamburgerLine'></div>
        <div className='hamburgerLine'></div>
      </div>
      <div
        className={[
          classes.navigationScreen,
          navBarShown
            ? classes.showNavigationScreen
            : classes.hideNavigationScreen,
        ].join(' ')}
      >
        {props.links}
      </div>
    </>
  );
}
