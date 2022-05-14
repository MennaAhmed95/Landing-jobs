import { Card } from "antd";
import PositionCard from "../PositionCard";
import p1 from "./../../assets/images/1.png";
import p2 from "./../../assets/images/2.png";
import p3 from "./../../assets/images/3.png";
import p4 from "./../../assets/images/4.png";
import p5 from "./../../assets/images/5.png";
import p6 from "./../../assets/images/6.png";

const OpenPosition = () => {
  return (
    <Card style={{ border: 0, padding: 0 }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <PositionCard src={p1} num={7} title="Consultaion & Build" />
        <PositionCard src={p2} num={32} title="Education & Training" />
        <PositionCard src={p3} num={5} title="Accounting & Finance" />
        <PositionCard src={p4} num={2} title="Healthcare & Beauty" />
        <PositionCard src={p5} num={9} title="Cars & Automotive" />
        <PositionCard src={p6} num={8} title="Web Development" />
      </div>
    </Card>
  );
};

export default OpenPosition;
