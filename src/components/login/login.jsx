import React from "react";
import { Formik, Form } from "formik";
import { useAlert } from "react-alert";

import Button from "../common/Button";
import InputField from "../common/form/InputField";
import Api from "../../services/Api";
import { LoginSchema } from "../../constants/validationSchema";

import { Endpoints, AlertMessage } from "../../constants/variables";
import "./login.css";

const Login = ({ setActiveTab }) => {
  const alert = useAlert();

  const onSubmit = async (values) => {
    console.log("Values", values);
    try {
      const result = await Api.post(Endpoints.LOGIN, values);
      console.log("Login Result", result);
      alert.show(AlertMessage.SIGNUP_SUCCESS, { type: "success" });
    } catch (error) {
      console.log("Error", error);
      alert.error(AlertMessage.ERROR);
    }
  };

  return (
    <div className="Login text-left">
      <h5 className="font-weight-bold my-5">Login with Email</h5>
      <Formik
        initialValues={{
          id: "",
          pw: "",
        }}
        onSubmit={onSubmit}
        validationSchema={LoginSchema}
      >
        {({ values, isSubmitting, errors, touched }) => (
          <Form>
            <InputField
              label="Email Address"
              name="id"
              type="text"
              error={errors.id}
              touched={touched.id}
            />
            <InputField
              label="Password"
              name="pw"
              type="password"
              error={errors.pw}
              touched={touched.pw}
            />

            <div className="row mt-5">
              <div className="col-md-5">
                <Button
                  type="submit"
                  styleType="blocked"
                  addtlClass="w-100"
                  disabled={isSubmitting}
                >
                  LOG IN
                </Button>
              </div>
              <div className="col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                <p className="mt-3 m-md-0">
                  Don't have an account?
                  <a className="ml-2" href="/#" onClick={() => setActiveTab("signup")}>
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
