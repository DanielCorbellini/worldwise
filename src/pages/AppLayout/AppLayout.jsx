import Map from "../../components/Map/Map";
import SideBar from "../../components/SideBar/SideBar";
import User from "../../components/User/User";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <User />
      <Map />
    </div>
  );
}

export default AppLayout;
