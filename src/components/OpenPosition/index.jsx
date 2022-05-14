import { Card, Button } from "antd";
import PositionCard from "../PositionCard";
import p1 from "./../../assets/images/1.png";
import p2 from "./../../assets/images/2.png";
import p3 from "./../../assets/images/3.png";
import p4 from "./../../assets/images/4.png";
import p5 from "./../../assets/images/5.png";
import p6 from "./../../assets/images/6.png";
import p7 from "./../../assets/images/t.png";
import p8 from "./../../assets/images/i.png";
import { ClockCircleOutlined, MailFilled } from "@ant-design/icons";
import SocialCard from "../SocialCard";

const OpenPosition = () => {
  return (
    <>
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
      <div style={{ height: "2.5rem" }}></div>
      <Card style={{ border: 0, padding: 0 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <SocialCard
            color="black"
            src={p8}
            title="Subscribe Our News"
            border="#504f4f"
            padd="1.7rem 4rem"
          >
            <span>
              Subscribe to our newsletter to get the latest jobs
              posted,candidates,and latest news.
            </span>
            <Button
              block
              style={{
                background: "black",
                height: "3rem",
                margin: "1rem",
                color: "white",
                border: "1px solid #504f4f",
                fontWeight: "bold",
              }}
            >
              <MailFilled style={{ margin: ".5rem", fontSize: "x-large" }} />
              Enter Your Email
            </Button>
            <Button
              block
              style={{
                background: "royalblue",
                height: "3rem",
                margin: "1rem",
                color: "white",
                border: "1px solid #504f4f",
                fontWeight: "bold",
              }}
            >
              SUBSCRIBE
            </Button>
          </SocialCard>
          <SocialCard
            padd="1.7rem 9rem 1.7rem 1rem"
            color="#3ebff8"
            src={p7}
            title="Latest Tweets"
            pad="1.6rem"
            border="#efefef"
          >
            <p
              style={{
                background: "black",
                padding: "1px 1rem",
                margin: 0,
              }}
            >
              @tielabs
            </p>
            <span
              style={{
                margin: "2rem 0",
              }}
            >
              We have released a major update for InstaNOW plugin (formerly
              Instagramy) v2.0 http://tie.li/insta-now
            </span>
            <p>
              <ClockCircleOutlined style={{ margin: "0 0.5rem" }} />8 hours ago
            </p>
          </SocialCard>
        </div>
      </Card>
    </>
  );
};

export default OpenPosition;
