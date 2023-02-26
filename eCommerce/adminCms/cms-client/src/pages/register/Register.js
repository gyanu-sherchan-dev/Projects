import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";

const Register = () => {
  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "John",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Doe",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "youremail@email.com",
      required: true,
      unique: true,
    },
    {
      label: "Password",
      name: "Password",
      type: "Password",
      placeholder: "****",
      required: true,
    },
  ];
  return (
    <AdminLayout>
      <Container>
        <Row></Row>
      </Container>
    </AdminLayout>
  );
};

export default Register;
