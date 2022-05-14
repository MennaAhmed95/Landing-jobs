import { SearchOutlined } from "@ant-design/icons";
import { Card, Input, Col, Select, Button } from "antd";
import { Collapse, Checkbox } from "antd";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const { Panel } = Collapse;
  const { Option } = Select;
  const style = { padding: "8px 0" };
  const [job, setJob] = useState("");
  const [reagion, setReagion] = useState("");
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  return (
    <Card style={{ margin: "0 1rem" }}>
      <Col style={{ display: "flex" }}>
        <Button
          style={{ height: "3rem" }}
          onClick={() => handleSearch(job, reagion)}
        >
          <SearchOutlined />
        </Button>
        <Button
          block
          style={{ height: "3rem" }}
          onClick={() => handleSearch(job, reagion)}
        >
          Start Searching
        </Button>
      </Col>
      <Col>
        <div style={style}>
          <h3>Job</h3>
          <Input
            placeholder="job title,keywords"
            onChange={(e) => setJob(e.target.value.toLowerCase())}
          />
        </div>
      </Col>
      <Col>
        <div style={style}>
          <h3>Location</h3>
          <Input
            placeholder="city or reagion"
            onChange={(e) => setReagion(e.target.value.toLowerCase())}
          />
        </div>
      </Col>
      <Col>
        <div style={style}>
          <h3>Category</h3>
          <Select
            style={{ width: "100%" }}
            placeholder="Select Industry"
            optionFilterProp="children"
          >
            <Option value="1">Full-stack Developer</Option>
            <Option value="2">Front-end Developer</Option>
            <Option value="3">Back-end Developer</Option>
            <Option value="4">DevOps</Option>
            <Option value="5">Project Management</Option>
          </Select>
        </div>
      </Col>
      <Col>
        <Collapse style={{ backgroundColor: "white" }}>
          <Panel header="ContractType" key="1">
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              <Col>
                <Checkbox value="Permanent">Permanent </Checkbox>
              </Col>
              <Col>
                <Checkbox value="Contractor">Contractor</Checkbox>
              </Col>
            </Checkbox.Group>
          </Panel>
          <Panel header="Specialisms" key="2">
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              <Col>
                <Checkbox value="Acounting">Acounting </Checkbox>
              </Col>
              <Col>
                <Checkbox value="Finance">Finance</Checkbox>
              </Col>
              <Col>
                <Checkbox value="Sales">Sales</Checkbox>
              </Col>
              <Col>
                <Checkbox value="Opreations">Opreations</Checkbox>
              </Col>
              <Col>
                <Checkbox value="IT">IT</Checkbox>
              </Col>
            </Checkbox.Group>
          </Panel>
        </Collapse>
      </Col>
      <Col>
        <div style={style}>
          <Button
            type="primary"
            block
            style={{ background: "black", height: "3rem" }}
            onClick={() => handleSearch(job, reagion)}
          >
            <SearchOutlined /> Search
          </Button>
        </div>
      </Col>
    </Card>
  );
};

export default SearchBar;
