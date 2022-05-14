import { Tabs, Row, Col, Input, Button } from "antd";
import { Select } from "antd";

const { Option } = Select;
const { TabPane } = Tabs;
const style = { padding: "8px 0" };

const SearchTab = () => {
  return (
    <Tabs type="card" style={{ marginTop: "-2.5rem" }} className="searchTab">
      <TabPane tab="FIND A JOB" key="1">
        <Row
          wrap
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          style={{
            border: "1px solid snow",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
            alignItems: "center",
          }}
        >
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <h3>Job</h3>
              <Input placeholder="job title,keywords" />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <h3>Location</h3>
              <Input placeholder="city or reagion" />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <h3>Category</h3>
              <Select
                style={{ width: "100%" }}
                placeholder="Select Industry"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                <Option value="1">Not Identified</Option>
                <Option value="2">Closed</Option>
                <Option value="3">Communicated</Option>
                <Option value="4">Identified</Option>
                <Option value="5">Resolved</Option>
                <Option value="6">Cancelled</Option>
              </Select>
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>
              <Button
                type="primary"
                block
                style={{ background: "black", height: "3rem" }}
              >
                Search
              </Button>
            </div>
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="FIND RESUME" key="2">
        <p style={{ margin: "2rem 0" }}>Content of FIND RESUME</p>
      </TabPane>
    </Tabs>
  );
};

export default SearchTab;
