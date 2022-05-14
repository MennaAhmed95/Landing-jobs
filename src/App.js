import { Row, Col } from "antd";
import Footerr from "./components/Footer";
import JobSection from "./components/JobSection";
import OpenPosition from "./components/OpenPosition";
import SearchTab from "./components/SearchTab";

function App() {
  return (
    <div className="App">
      <div className="background"></div>

      <section className="contain">
        <SearchTab />
        <div style={{ height: "2rem" }}></div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <JobSection />
          </Col>
          <Col xs={0} sm={0} md={0} lg={8} xl={8}>
            0 1 300px
          </Col>
        </Row>
        <div style={{ height: "2rem" }}></div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <OpenPosition />
          </Col>
          <Col xs={0} sm={0} md={0} lg={8} xl={8}>
            0 1 300px
          </Col>
        </Row>
      </section>
      <Footerr />
    </div>
  );
}

export default App;
