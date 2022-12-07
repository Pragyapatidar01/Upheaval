import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import LinkSection from "../components/LinkSection";

function NewIdea() {
  const [flag, setFlag] = useState(0);

  const switchChangeHandler = (e) => {
    if (flag == 0) setFlag(1);
    else setFlag(0);
    // console.log(flag)
  };

  return (
    <div className="home">
      <div className="cardss">
        <div className="form pt-5">
          {/* <h1>Student Details</h1>
        <div className="form">
          {/* <h2>Student Details</h2>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control type="number" placeholder="Enter Your Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter Your City" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Enter Your State" />
          </Form.Group> */}

          <h2 style={{ marginBottom: "20px" }}>Idea Details</h2>
          <hr></hr>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Idea Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Idea Description</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tech Stack</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <FloatingLabel controlId="floatingSelect" label="Works with selects">
            <Form.Select aria-label="Floating label select example">
              <option>Domain</option>
              <option value="1">Agriculture</option>
              <option value="2">Education</option>
              <option value="3">Health</option>
            </Form.Select>
          </FloatingLabel>

          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Submit Your PPT/PDF</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <hr></hr>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Prototype"
            onChange={switchChangeHandler}
          />
          <LinkSection flag={flag}></LinkSection>

          <h2 style={{ marginTop: "42px", marginBottom: "20px" }}>
            Acknowledgement
          </h2>
          <hr></hr>
          <Form.Check
            style={{ marginTop: "30px", marginBottom: "30px" }}
            type={"checkbox"}
            id={`default-checkbox`}
            label={`I accept that the provided information is solely mine and not copied from other ideas.`}
          />

          <Button type="submit">Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default NewIdea;
