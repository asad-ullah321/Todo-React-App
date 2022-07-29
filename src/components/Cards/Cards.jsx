import React, { useEffect } from "react";
import "./cards.css";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { useState, useRef } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AccordionBody } from "react-bootstrap/esm/AccordionBody";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreatore } from "../../state/index";
import Modal from "react-bootstrap/Modal";

export const Cards = ({ head, dis, obj }) => {
  const [show, setShow] = useState(false);

  const title = useSelector((state) => state.uptitle);
  const dec = useSelector((state) => state.updec);

  const dispatch = useDispatch();

  const { del, uptitle, updecription, update } = bindActionCreators(
    actionCreatore,
    dispatch
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    uptitle(head);
    updecription(dis);
    console.log("useEffect");
  }, []);

  const handleupdate = () => {
    const newobject = { title, dec };
    update(obj, newobject);
  };

  return (
    <div>
      <Accordion.Item eventKey={head}>
        <Accordion.Header>{head} </Accordion.Header>
        <Accordion.Body>
          {dis}
          <section>
            <Button onClick={() => del(obj)}>Delete</Button>{" "}
            <Button variant="primary" onClick={handleShow}>
              Update
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Update info</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label className="form-label">Enter title</label>
                  <input
                    className="form-control"
                    type="text"
                    value={title}
                    onChange={(e) => uptitle(e.target.value)}
                  />
                </div>
                <label className="form-label">Enter Description</label>
                <div>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={dec}
                    onChange={(e) => updecription(e.target.value)}
                  ></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleupdate();
                    handleClose();
                  }}
                >
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </section>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
};
