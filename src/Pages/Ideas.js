import React from "react";
import Ideadata from "../components/Ideadata";
import Card from "../components/Cards";
import { useNavigate } from "react-router-dom";


function Ideas() {
  const history = useNavigate();
  const handleProblemClick = () => {
    history("/detailIdeas");
  };
  return (
    <div className="products">
      <div className="cardss">
        <Card
          imgsrc={Ideadata[0].imgsrc}
          title={Ideadata[0].title}
          sname={Ideadata[0].sname}
          link={Ideadata[0].link}
        />

        <Card
          imgsrc={Ideadata[1].imgsrc}
          title={Ideadata[1].title}
          sname={Ideadata[1].sname}
          link={Ideadata[1].link}
        />
        <Card
          imgsrc={Ideadata[2].imgsrc}
          title={Ideadata[2].title}
          sname={Ideadata[2].sname}
          link={Ideadata[2].link}
        />
        <Card
          imgsrc={Ideadata[3].imgsrc}
          title={Ideadata[3].title}
          sname={Ideadata[3].sname}
          link={Ideadata[3].link}
        />
        <Card
          imgsrc={Ideadata[4].imgsrc}
          title={Ideadata[4].title}
          sname={Ideadata[4].sname}
          link={Ideadata[4].link}
        />
      </div>
    </div>
  );
}

export default Ideas;
