// import React, { useEffect } from "react";
import React from "react";

const AnchorMenu = ({ sections }) => {
    if((sections !== null || sections !== undefined) && sections.length > 0) {
        return (
            <div id="id123" className="anchor-menu">
                {sections.map(section => <a href={`#${section.target}`}>{section.itemName}</a>)}                
            </div>
          );
    }
    return null;
};

export default AnchorMenu;
