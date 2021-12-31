import { useEffect, useState } from 'react';
import classes from './NavBar.module.scss';
import MobileNavBar from '../MobileNavBar/MobileNavBar';

export default function NavBar(props) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
    } else setIsDesktop(false);

    const updateIsDesktop = () => {
      if (window.innerWidth > 900) {
        setIsDesktop(true);
      } else setIsDesktop(false);
    };

    window.addEventListener('resize', updateIsDesktop);

    return () => {
      window.removeEventListener('resize', updateIsDesktop);
    };
  }, []);

  return (
    <div className={isDesktop ? classes.navigation : null}>
      {isDesktop ? (
        props.children
      ) : (
        <MobileNavBar links={props.children}></MobileNavBar>
      )}
    </div>
  );
}
