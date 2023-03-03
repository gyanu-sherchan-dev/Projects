import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";
import { CustomInput } from "../../components/customInput/CustomInput";
import { axiosCreateUser } from "../../helpers/AxiosHelper";
import { toast } from "react-toastify";

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
    },
    {
      label: "Password",
      name: "password",
      type: "Password",
      placeholder: "****",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "Password",
      placeholder: "****",
      required: true,
    },
  ];

  //useState

  const [adminUser, setAdminUser] = useState({});
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //onChange
  const handleOnChage = (e) => {
    const { value, name } = e.target;
    setAdminUser({
      ...adminUser,
      [name]: value,
    });
  };
  console.log(adminUser);

  //onSubmit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { confirmPassword, ...rest } = adminUser;
    if (confirmPassword !== rest.password) {
      return toast.error("Password does not match");
    }
    const result = await axiosCreateUser(rest);
    setIsLoading(false);
    setResponse(result);
  };
  return (
    <AdminLayout className="reg-main">
      <Container>
        <div>
          <Row className=" pt-4 pb-5 ">
            <Col className="border  p-3 rounded shadow-lg pt-5 reg-heading">
              <div className="reg-head-content">
                <h3 className="mb-3 text-center">New Admin Registration!</h3>
                <hr className="mb-5" />
              </div>
            </Col>
            <Col>
              <Form
                onSubmit={handleOnSubmit}
                className="border  p-3 rounded shadow-lg pt-5"
              >
                <div className="text-center">
                  {isLoading && <Spinner></Spinner>}
                </div>
                {response?.message && (
                  <Alert
                    variant={
                      response.status === "success" ? "success" : "danger"
                    }
                  >
                    {response.message}
                  </Alert>
                )}
                {inputFields.map((item) => (
                  <CustomInput
                    key={item.name}
                    {...item}
                    onChange={handleOnChage}
                  />
                ))}

                <Form.Text>
                  Your password must have at least 6 characters long, Upper
                  case, lower case and number
                </Form.Text>
                {/* {err && <div className="text-danger mb-4">{err}</div>} */}
                <div className="d-grid">
                  <Button variant="secondary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </AdminLayout>
  );
};

export default Register;
