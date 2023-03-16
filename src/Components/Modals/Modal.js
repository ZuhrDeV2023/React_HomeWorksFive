import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AddEditForm from "../Forms/FormAddEdit";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function ModalForm(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  const label = props.buttonLabel;

  let button = "";
  let title = "";

  if (label === "Tahrirlash") {
    button = (
      <Button
        color="warning"
        onClick={toggle}
        style={{ float: "left", marginRight: "10px" }}
      >
        {label}
      </Button>
    );
    title = "Elementni tahrirlash";
  } else {
    button = (
      <Button
        color="primary"
        onClick={toggle}
        style={{ float: "left", marginRight: "10px"}}
      >
        {label}
      </Button>
    );
    title = "Yangi element qo'shish";
  }

  return (
    <div>
      {button}
      <Modal
        isOpen={modal}
        toggle={toggle}
        className={props.className}
        backdrop={"static"}
        keyboard={false}
      >
        <ModalHeader toggle={toggle}>
          {title}
        </ModalHeader>
        <ModalBody>
          <AddEditForm  
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
            item={props.item}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModalForm;