import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";

const FeaturedCard = ({ p1, p2 }) => {
  return (
    <>
      <img src={p1} alt="job" style={{ maxWidth: "340px" }} />
      <p
        style={{
          display: "flex",
          alignItems: "center",
          margin: "1rem 0.5rem",
        }}
      >
        <img src={p2} alt="logo" width="45" height="45" />
        <div className="jobtitle">
          <h3 style={{ margin: 0 }}>Frontend Developer</h3>
          <div style={{ maxWidth: "17rem", textAlign: "start" }}>
            <span style={{ margin: "0 0.5rem", color: "blueviolet" }}>
              tielabs
            </span>
            |<span style={{ margin: "0 0.5rem" }}>Beautiful wp theme</span>
          </div>
        </div>
      </p>
      <p style={{ margin: "2rem 0.5rem", color: "gray" }}>
        We are looking for a talend, Egypt-based Front-end developer for an
        immegrate mobile website project (plus various other projects in the
        future).
      </p>
      <p>
        <EnvironmentOutlined style={{ margin: "0 0.5rem" }} />
        Moscow, Russia
        <ClockCircleOutlined style={{ margin: "0 0.5rem 0 2rem" }} />8 hours ago
      </p>
    </>
  );
};

export default FeaturedCard;
