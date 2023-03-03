import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const CustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};
