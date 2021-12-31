import classes from './NavLink.module.scss';
import Link from 'next/link';
export default function NavLink(props) {
  return (
    <>
      <Link href={props.link}>
        <a className={classes.navLink}>{props.children}</a>
      </Link>
    </>
  );
}
