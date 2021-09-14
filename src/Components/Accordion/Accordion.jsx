import React, {useState} from 'react';
import { FiChevronsDown } from "react-icons/fi";

const Accordion = ({title, children}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="pages accordion">
            <div className="accordion-header" onClick={()=>setOpen(!open)}>
                <h4>{title}</h4>
                <FiChevronsDown className={open ? "accordion-chevron chevron-open" : "accordion-chevron chevron-close"} />
            </div>
            <div className={open ? "accordion-main accordion-open" : "accordion-main accordion-close"}>
                {children}
            </div>
        </div>
    )
}

export default Accordion;
