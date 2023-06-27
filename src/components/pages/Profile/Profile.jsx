import { useState } from "react";
import { User } from "./User/User";
// import { AllClients } from "./Allclients/AllClients";
import { Percentage } from "./Percentage/Percentage";
import { Info } from "./Info/Info";
import css from "./profilepage.module.css";
import data from "./data/data";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "../../Header/Navbar";
import Side from "../../SideMenu/Side";
import "../../../App.css";


function Profile() {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAllCheckChange = (checked) => {
    setSelectAll(checked);
    if (checked) {
      const allItemIds = data.map((item) => item.id);
      setSelectedItems(allItemIds);
    } else {
      setSelectedItems([]);
    }
  };

  const handleItemCheckChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="sideandpage">
        <Side />
        <div className="PageContent">

    <div className={css.ProfilePageBlock}>
      <div className={css.profileNav}>
        <Link to="/dashboard">Home</Link>
        <BiChevronRight className={css.icon} />
        <Link to="/settings">Profile</Link>
      </div>

      <div className={css.containerfixed}>
        <User />
      </div>
      <div className={css.containerNotfix}>
        <Percentage />
      </div>

      <div className={css.info}>
        <Info
          selectedItems={selectedItems}
          onItemCheckChange={handleItemCheckChange}
        />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Profile;
