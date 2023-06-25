import css from './AllUser.module.css';
import { useState } from "react";
import userData from './data/data';
import { UserPermission } from "./UserPermission";
import { UsePermissionInfo } from "./UserPermissionInfo";
import { BiChevronRight } from 'react-icons/bi';
import {Link, Outlet} from 'react-router-dom'



function NewApp() {

  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAllCheckChange = (checked) => {
    setSelectAll(checked);
    if (checked) {
      const allItemIds = userData.map((item) => item.id);
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
    <div>
    <div className={css.userPermissionNav}>
        <Link to="/dashboard">Home</Link>
        <BiChevronRight className={css.icon} />
        <Link to="/settings">Settings</Link>
        <BiChevronRight className={css.icon} />
        <Link to="#">User Permission</Link>
      </div>
    <div className={css.loans}>
      <div className={css.loanheader}>
      <UserPermission selectAll={selectAll} onAllCheckChange={handleAllCheckChange}/>
      </div>
      <div className={css.infocontainer}>
        <div className={css.infowrapper}>
          <div className={css.infoscroll}>
          <UsePermissionInfo selectedItems={selectedItems}
              onItemCheckChange={handleItemCheckChange}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
    
}

export default NewApp