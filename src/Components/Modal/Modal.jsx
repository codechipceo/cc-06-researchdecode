import React from "react";
import { Modal } from "rsuite";

const CustomModal = ({ open, handleClose, children }) => {
  const header = React.Children.toArray(children).find(
    (child) => child.type === CustomModal.Header
  );
  const body = React.Children.toArray(children).find(
    (child) => child.type === CustomModal.Body
  );
  const footerLeft = React.Children.toArray(children).find(
    (child) => child.type === CustomModal.FooterLeft
  );
  const footerRight = React.Children.toArray(children).find(
    (child) => child.type === CustomModal.FooterRight
  );

  return (
    <Modal open={open} onClose={handleClose} style={{ padding: 0 }}>
      <Modal.Header>{header}</Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>{footerLeft}</div>
          <div>{footerRight}</div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

// Define subcomponents as static properties with displayName
CustomModal.Header = ({ children }) => <>{children}</>;
CustomModal.Header.displayName = "CustomModal.Header";

CustomModal.Body = ({ children }) => <>{children}</>;
CustomModal.Body.displayName = "CustomModal.Body";

CustomModal.FooterLeft = ({ children }) => <>{children}</>;
CustomModal.FooterLeft.displayName = "CustomModal.FooterLeft";

CustomModal.FooterRight = ({ children }) => <>{children}</>;
CustomModal.FooterRight.displayName = "CustomModal.FooterRight";

export default CustomModal;
