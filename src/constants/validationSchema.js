import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  id: Yup.string()
    .email("Email must be valid.")
    .required("Email is Required."),
  pw: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is Required."),
});
