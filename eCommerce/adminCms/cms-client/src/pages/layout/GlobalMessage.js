import React from "react";
import Container from "react-bootstrap/esm/Container";

const GlobalMessage = () => {
  return (
    <div className="glb-msg">
      <Container className="d-flex justify-content-between">
        <h6>Hello</h6>
        <div>
          <i class="fa-brands fa-facebook text-info me-2"></i>
          <i class="fa-brands fa-youtube text-danger me-2"></i>
          <i class="fa-brands fa-instagram text-warning"></i>
        </div>
      </Container>
    </div>
  );
};

export default GlobalMessage;
