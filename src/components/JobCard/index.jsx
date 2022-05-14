import {
  ClockCircleOutlined,
  EllipsisOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Card, Button } from "antd";

const JobCard = ({
  itm: { createdAt, jobtitle, companyName, location, jobType },
}) => {
  return (
    <Card className="cardJob">
      <p style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://i.picsum.photos/id/653/500/300.jpg?hmac=NIBL3BDCxLbzKFjWyVNKjxZOkxX_9HjNwyTxAV22Mkk"
          alt="logo"
          width="45"
          height="45"
        />
        <div className="jobtitle">
          <h3>{jobtitle}</h3>
          <div style={{ maxWidth: "17rem", textAlign: "start" }}>
            <span style={{ margin: "0 0.5rem", color: "blueviolet" }}>
              {companyName}
            </span>
            |<span style={{ margin: "0 0.5rem" }}>{jobType}</span>
          </div>
        </div>
      </p>
      <p>
        <EnvironmentOutlined style={{ margin: "0 0.5rem" }} />
        {location}
      </p>
      <p>
        <ClockCircleOutlined style={{ margin: "0 0.5rem" }} />8 hours ago
      </p>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button className="btnStyle">temporary</Button>
        <EllipsisOutlined style={{ fontSize: "x-large" }} />
      </p>
    </Card>
  );
};

export default JobCard;
