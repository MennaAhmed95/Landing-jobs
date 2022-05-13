import { Card } from "antd";

const { Meta } = Card;

const CandicateCard = ({ itm: { name, title, avatar } }) => (
  <Card
    className="myCrd"
    cover={
      <img
        alt="example"
        src={avatar}
        // style={{ width: "175px" }}
        height="185px"
      />
    }
  >
    <Meta style={{ textAlign: "center" }} title={name} description={title} />
  </Card>
);
export default CandicateCard;
