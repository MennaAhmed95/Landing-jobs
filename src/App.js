import { Row, Col } from "antd";
import Footerr from "./components/Footer";
import JobSection from "./components/JobSection";
import OpenPosition from "./components/OpenPosition";
import SearchTab from "./components/SearchTab";
import { useEffect, useState } from "react";
import { getJobs } from "./redux/Jobs/action";
import { useDispatch, useSelector } from "react-redux";
import FeaturedSec from "./components/FeaturedSec";
import SearchBar from "./components/SearchBar";

function App() {
  const [job, setJob] = useState("");
  const [reagion, setReagion] = useState("");
  const jobs = useSelector((state) => state.jobReducer.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobs());
  }, []);
  const handleSearch = (job, reagion) => {
    setJob(job);
    setReagion(reagion);
    console.log(job, reagion, "serr");
  };
  const filteredData =
    jobs?.length > 0
      ? jobs?.filter((el) => {
          if (job === "" && reagion === "") {
            return el;
          } else if (job && reagion === "") {
            return el.jobtitle.toLowerCase().includes(job);
          } else if (reagion && job === "") {
            return el.location.toLowerCase().includes(reagion);
          } else {
            if (
              el.jobtitle.toLowerCase().includes(job) &&
              el.location.toLowerCase().includes(reagion)
            ) {
              return el;
            }
          }
        })
      : [];
  console.log(filteredData, "fil");
  return (
    <div className="App">
      <div className="background"></div>
      <section className="contain">
        <SearchTab handleSearch={handleSearch} />
        <div style={{ height: "2rem" }}></div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <JobSection jobs={filteredData} />
          </Col>
          <Col xs={0} sm={0} md={0} lg={8} xl={8}>
            <SearchBar handleSearch={handleSearch} />
          </Col>
        </Row>
        <div style={{ height: "2rem" }}></div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <OpenPosition />
          </Col>
          <Col xs={0} sm={0} md={0} lg={7} xl={7}>
            <FeaturedSec />
          </Col>
        </Row>
      </section>
      <Footerr />
    </div>
  );
}

export default App;
