// import pdf from "../../assets/pdf/Tiarnan Guinee Curriculum Vitae.pdf"

import "./CV.css"

import page1 from "../../assets/img/Tiarnan Guinee Curriculum Vitae_Page_1.png";
import page2 from "../../assets/img/Tiarnan Guinee Curriculum Vitae_Page_2.png";

export const CV = () => {

  return (
    <>
    <div>
      <img src={page1} className="png-viewer"></img>
      <img src={page2} className="png-viewer"></img>
    </div>
    </>
  );
};