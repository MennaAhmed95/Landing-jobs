import { Card } from "antd";

const PositionCard = ({ src, title, num }) => {
  return (
    <Card className="positions">
      <img src={src} alt="logo" width="50" height="45" />
      <div className="jobtitle">
        <h3 style={{ margin: 0 }}>{title}</h3>
        <div style={{ color: "gray", fontWeight: "500" }}>
          <span> {num} open positions</span>
        </div>
      </div>
    </Card>
  );
};

export default PositionCard;
