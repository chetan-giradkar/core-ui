import React, { useEffect } from "react";
import AnchorMenu from "./AnchorMenu";

const AnchorPage = () => {
  let sections = [
    { itemName: "Section 1", target: "section1" },
    { itemName: "Section 2", target: "section2" },
    { itemName: "Section 3", target: "section3" },
    { itemName: "Section 4", target: "section4" },
  ];

  useEffect(() => {
    window.scrollTo(0, 80);
  }, [])

  return (
    <div className="anchor-page">
      <div className="main-section">
        <div id="section1" className="anchor-section">
          <h2>Section 1</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae
          turpis massa sed elementum tempus. Arcu bibendum at varius vel
          pharetra. Eget nullam non nisi est sit amet. Ipsum faucibus vitae
          aliquet nec ullamcorper sit amet. Vestibulum sed arcu non odio euismod
          lacinia at. Vitae aliquet nec ullamcorper sit amet risus. A
          condimentum vitae sapien pellentesque habitant morbi tristique
          senectus. Urna duis convallis convallis tellus id. Maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. In vitae turpis massa sed elementum tempus. Arcu
          bibendum at varius vel pharetra. Eget nullam non nisi est sit amet.
          Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vestibulum sed
          arcu non odio euismod lacinia at. Vitae aliquet nec ullamcorper sit
          amet risus. A condimentum vitae sapien pellentesque habitant morbi
          tristique senectus. Urna duis convallis convallis tellus id. Maecenas
          accumsan lacus vel facilisis.
        </div>
        <div id="section2" className="anchor-section">
          <h2>Section 2</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae
          turpis massa sed elementum tempus. Arcu bibendum at varius vel
          pharetra. Eget nullam non nisi est sit amet. Ipsum faucibus vitae
          aliquet nec ullamcorper sit amet. Vestibulum sed arcu non odio euismod
          lacinia at. Vitae aliquet nec ullamcorper sit amet risus. A
          condimentum vitae sapien pellentesque habitant morbi tristique
          senectus. Urna duis convallis convallis tellus id. Maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. In vitae turpis massa sed elementum tempus. Arcu
          bibendum at varius vel pharetra. Eget nullam non nisi est sit amet.
          Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vestibulum sed
          arcu non odio euismod lacinia at. Vitae aliquet nec ullamcorper sit
          amet risus. A condimentum vitae sapien pellentesque habitant morbi
          tristique senectus. Urna duis convallis convallis tellus id. Maecenas
          accumsan lacus vel facilisis.
        </div>
        <div id="section3" className="anchor-section">
          <h2>Section 3</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae
          turpis massa sed elementum tempus. Arcu bibendum at varius vel
          pharetra. Eget nullam non nisi est sit amet. Ipsum faucibus vitae
          aliquet nec ullamcorper sit amet. Vestibulum sed arcu non odio euismod
          lacinia at. Vitae aliquet nec ullamcorper sit amet risus. A
          condimentum vitae sapien pellentesque habitant morbi tristique
          senectus. Urna duis convallis convallis tellus id. Maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. In vitae turpis massa sed elementum tempus. Arcu
          bibendum at varius vel pharetra. Eget nullam non nisi est sit amet.
          Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vestibulum sed
          arcu non odio euismod lacinia at. Vitae aliquet nec ullamcorper sit
          amet risus. A condimentum vitae sapien pellentesque habitant morbi
          tristique senectus. Urna duis convallis convallis tellus id. Maecenas
          accumsan lacus vel facilisis.
        </div>
        <div id="section4" className="anchor-section">
          <h2>Section 4</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In vitae
          turpis massa sed elementum tempus. Arcu bibendum at varius vel
          pharetra. Eget nullam non nisi est sit amet. Ipsum faucibus vitae
          aliquet nec ullamcorper sit amet. Vestibulum sed arcu non odio euismod
          lacinia at. Vitae aliquet nec ullamcorper sit amet risus. A
          condimentum vitae sapien pellentesque habitant morbi tristique
          senectus. Urna duis convallis convallis tellus id. Maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. In vitae turpis massa sed elementum tempus. Arcu
          bibendum at varius vel pharetra. Eget nullam non nisi est sit amet.
          Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Vestibulum sed
          arcu non odio euismod lacinia at. Vitae aliquet nec ullamcorper sit
          amet risus. A condimentum vitae sapien pellentesque habitant morbi
          tristique senectus. Urna duis convallis convallis tellus id. Maecenas
          accumsan lacus vel facilisis.
        </div>
      </div>
      <AnchorMenu sections={sections} />
    </div>
  );
};

export default AnchorPage;
