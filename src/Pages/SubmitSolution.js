import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";

function SubmitSolution() {
  const [flag, setFlag] = useState(0);

  const switchChangeHandler = (e) => {
    if (flag == 0) setFlag(1);
    else setFlag(0);
    // console.log(flag)
  };

  return (
    <div className="home">
      <div className="cardss" style={{ paddingTop: "6rem" }}>
        <div className="form">
          <h2>Student Details</h2>
          <hr></hr>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <h2 style={{ marginBottom: "20px" }}>Idea Details</h2>
          <hr></hr>
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

          <h2 style={{ marginTop: "42px", marginBottom: "20px" }}>
            Prototype Details
          </h2>
          <hr></hr>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Prototype Demo Link</Form.Label>
            <Form.Control type="text" placeholder="Demo Link" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Video Link</Form.Label>
            <Form.Control type="text" placeholder="Video Link" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Repository Link</Form.Label>
            <Form.Control type="text" placeholder="Repository Link" />
          </Form.Group>

          <h2 style={{ marginBottom: "20px" }}>Problem Details</h2>
          <hr></hr>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Problem Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Problem Id" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Problem Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Problem Title" />
          </Form.Group>
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

export default SubmitSolution;
