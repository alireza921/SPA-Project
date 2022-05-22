import { Link } from "react-router-dom";
import styles from "./style.module.css";



const Navigation = (props) => {
  console.log(props);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to='/'> Home</Link>
        </li>
        <li className={styles.item}>
          <Link to='/Profile'> Profile</Link>
        </li>
        <li className={styles.item}>
          <Link to='/About-Us'> AboutUs </Link>
        </li>
        <li  className={styles.item}> 
          <Link to = "/blogs" > BlogPage </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
