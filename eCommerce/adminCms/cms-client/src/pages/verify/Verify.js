import React, { useEffect, useRef, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import { useSearchParams } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";
import { verifyAdminUser } from "../../helpers/AxiosHelper";

const Verify = () => {
  //get the verification code and email from the query parameters
  // call api to verify
  // display success or error message

  const isExeRef = useRef(true);

  const [response, setResponse] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const dt = {
      verificationCode: searchParams.get("c"),
      email: searchParams.get("email"),
    };
    verifyUserLink(dt);
    isExeRef.current = false;
  }, []);

  //api call here
  const verifyUserLink = async (dt) => {
    //call axios function
    if (!isExeRef.current) {
      return console.log("APi already called");
    }
    const data = await verifyAdminUser(dt);
    setResponse(data);
  };

  return (
    <AdminLayout>
      <div className="verify-page">
        {response.message ? (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        ) : (
          <Spinner variant="primary" animation="border" />
        )}
      </div>
    </AdminLayout>
  );
};

export default Verify;
