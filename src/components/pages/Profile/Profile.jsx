// Profile.jsx
import { useState } from "react";
import { User } from "./User/User";
import { AllClients } from "./Allclients/AllClients";
import { Percentage } from "./Percentage/Percentage";
import { Info } from "./Info/Info";
import css from "./profilepage.module.css";
import data from "./data/data";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

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

      <AllClients
        selectAll={selectAll}
        onAllCheckChange={handleAllCheckChange}
      />

      <div className={css.info}>
        <Info
          selectedItems={selectedItems}
          onItemCheckChange={handleItemCheckChange}
        />
      </div>
    </div>
  );
}

export default Profile;
