import { Tabs, Row, Col, Input, Button, Card } from "antd";
import { Select } from "antd";
import JobCard from "../JobCard";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getJobs } from "./../../redux/Jobs/action";

function callback(key) {
  console.log(key);
}
const { TabPane } = Tabs;
const JobSection = ({ jobs }) => {
  const [visable, setVisable] = useState(4);
  const showMore = () => {
    setVisable((prev) => prev + 4);
  };
  return (
    <div className="tabb">
      <Tabs onChange={callback} type="card" className="tab2">
        <TabPane tab="ALL JOBS" key="1">
          {jobs?.length > 0
            ? jobs
                .slice(0, visable)
                .map((itm) => <JobCard key={itm} itm={itm} />)
            : ""}
          <Card>
            {jobs?.length > 0 ? (
              <Button block className="loadMore" onClick={showMore}>
                Load More Listings
              </Button>
            ) : (
              <p style={{ textAlign: "center" }}> No Data Found</p>
            )}
          </Card>
        </TabPane>
        <TabPane tab="FULL TIME" key="2">
          <p className="marg"> Content of FULL TIME</p>
        </TabPane>
        <TabPane tab="TEMPORARY" key="3">
          <p className="marg"> Content of TEMPORARY</p>
        </TabPane>
        <TabPane tab="INTERNSHIP" key="4">
          <p className="marg"> Content of INTERNSHIP</p>
        </TabPane>
        <TabPane tab="PART TIME" key="5">
          <p className="marg"> Content of PART TIME</p>
        </TabPane>
        <TabPane tab="FREELANCE" key="6">
          <p className="marg"> Content of FREELANCE</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default JobSection;
