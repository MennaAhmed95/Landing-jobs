import { Button, Card, Carousel } from "antd";
import FeaturedCard from "../FeaturedCard";
import p1 from "./../../assets/images/0.PNG";
import p2 from "./../../assets/images/tie.PNG";
const FeaturedSec = () => {
  return (
    <div>
      <h2>Featured Jobs</h2>
      <Card>
        <Carousel className="slider">
          {Array.from(Array(5).keys()).map((itm, i) => (
            <FeaturedCard p1={p1} p2={p2} key={i} />
          ))}
        </Carousel>

        <Button
          block
          style={{
            background: "royalblue",
            height: "3rem",
            color: "white",
            border: "1px solid #504f4f",
            fontWeight: "bold",
            border: 0,
            marginTop: "2rem",
          }}
        >
          Apply for this job
        </Button>
      </Card>
      {/* </Card> */}
    </div>
  );
};

export default FeaturedSec;
