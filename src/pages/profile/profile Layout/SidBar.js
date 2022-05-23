import { Link } from "react-router-dom";
import ProfileRoutes from "./ProfileRoutes";
import styles from "./style.module.css";

const SideBar = () => {
  return (
    <aside>
      <h2> well Come back Dear Alireza !!!</h2>
      <ul className={styles.list}>
        {ProfileRoutes.map((item) => (
          <li key={item.id} className={styles.item}>
            <Link to={item.path}> {item.name} </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
