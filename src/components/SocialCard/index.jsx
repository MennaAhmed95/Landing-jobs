import { Card } from "antd";

const SocialCard = (props) => {
  const { children, color, src, title, pad, border, padd } = props;
  return (
    <Card style={{ background: color, margin: "0.5rem" }} className="cardIcons">
      <p style={{ display: "flex", alignItems: "center", margin: 0 }}>
        <img
          src={src}
          alt="logo"
          width="85"
          height="85"
          style={{
            border: `1px solid ${border}`,
            padding: pad,
          }}
        />
        <span
          style={{
            color: "white",
            border: `1px solid ${border}`,
            padding: padd,
            fontWeight: "bold",
            fontSize: "large",
          }}
        >
          {title}
        </span>
      </p>
      <div
        style={{
          padding: "2rem",
          maxWidth: "360px",
          color: "white",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </Card>
  );
};

export default SocialCard;
