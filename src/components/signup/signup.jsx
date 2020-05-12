import React from "react";
import { Formik, Form } from "formik";
import { useAlert } from "react-alert";

import Divider from "../common/Divider";
import Button from "../common/Button";
import InputField from "../common/form/InputField";
import Api from "../../services/Api";
import { LoginSchema } from "../../constants/validationSchema";

import { Images } from "../../constants/theme";
import { Endpoints, AlertMessage } from "../../constants/variables";
import "./signup.css";

const Signup = ({ setActiveTab }) => {
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

  const openWebPage = (url) => {
    window.open(url, "socialWindow", "height=400,width=600");
  };

  return (
    <div className="Signup text-left">
      <h5 className="font-weight-bold my-4">Continue with ...</h5>
      <div className="row justify-content-around">
        <Button
          addtlClass=" socials"
          onClick={() => openWebPage("https://facebook.com")}
        >
          <img className="mr-4" src={Images.FACEBOOK_ICON} alt="Facebook" />
          FACEBOOK
        </Button>
        <Button
          addtlClass="socials mt-4 mt-md-0"
          onClick={() => openWebPage("https://google.com")}
        >
          <img className="mr-4" src={Images.GOOGLE_ICON} alt="Facebook" />
          GOOGLE
        </Button>
      </div>
      <p className="my-4 text-center text-md-left">
        We will never share any of your data or post anything on your behalf.
      </p>
      <Divider addtlClass="my-4" />
      <h5 className="font-weight-bold mb-4">Or Sign Up with your email</h5>
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
              label="Create Password"
              name="pw"
              type="password"
              error={errors.pw}
              touched={touched.pw}
            />
            <p className="my-5 text-center text-md-left">
              By signing up you agree to Carly's website{" "}
              <a className="mx-2" href="/#" onClick={() => alert("Privacy Poicy")}>
                Terms & Conditions
              </a>
              and
              <a className="mx-2" href="/#" onClick={() => alert("Privacy Poicy")}>
                Privacy Policy
              </a>
            </p>
            <div className="row">
              <div className="col-md-5">
                <Button
                  type="submit"
                  styleType="blocked"
                  addtlClass="w-100"
                  disabled={isSubmitting}
                >
                  SIGN UP
                </Button>
              </div>
              <div className="col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                <p className="mt-3 m-md-0">
                  Already have an account?
                  <a className="ml-2" href="/#" onClick={() => setActiveTab("login")}>
                    Log In
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

export default Signup;
