import Carousel from "react-elastic-carousel";
import { Footer } from "antd/lib/layout/layout";
import CandicateCard from "../CandidateCard";
import { useDispatch, useSelector } from "react-redux";
import { getCandidates } from "./../../redux/Candidates/action";
import { useEffect } from "react";

const Footerr = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1000, itemsToShow: 6 },
  ];
  const dispatch = useDispatch();
  const candidates = useSelector(
    (state) => state.candidateReducer.allCandidates
  );
  console.log(candidates);
  useEffect(() => {
    dispatch(getCandidates());
  }, []);
  return (
    <Footer
      style={{
        textAlign: "center",
        background: "slateblue",
        padding: "2rem",
        color: "snow",
        height: "300px",
      }}
    >
      <span>Find Top Talends</span>
      <h3 style={{ color: "white" }}>Explore Our Latest Candicate</h3>
      <p>
        Work with some one perfect for your team & get amazing resut working
        with the
        <br />
        best employees , hire talend with confidenc!
      </p>
      {candidates?.length ? (
        <Carousel breakPoints={breakPoints} className="carousel">
          {candidates.map((itm) => (
            <CandicateCard key={itm.id} itm={itm} />
          ))}
        </Carousel>
      ) : (
        ""
      )}
    </Footer>
  );
};

export default Footerr;
