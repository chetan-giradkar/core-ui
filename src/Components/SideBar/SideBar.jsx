import React, {useState} from 'react';
import { FaChevronLeft } from "react-icons/fa";

const SideBar = () => {
    const [open, setopen] = useState(false);

    return (
        <div className="pages sidebar">
            <div className={open ? "sidebar-section sidebar-open" : "sidebar-section sidebar-close"}>
                SideBar Content
            </div>
            <div className="arrow-section" onClick={()=>setopen(!open)}>
                <FaChevronLeft className={open ? "sidebar-chevron chevron-open" : "sidebar-chevron chevron-close"} />
            </div>
        </div>
    );
}

export default SideBar;
