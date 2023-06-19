import * as yup from "yup";

const messageSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^\S*$/, "First name cannot contain spaces")
    .min(3)
    .max(15)
    .required("Enter Your First Name"),
  lastName: yup
    .string()
    .matches(/^\S*$/, "Last name cannot contain spaces")
    .min(3)
    .max(15)
    .required("Enter Your Last Name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Enter your Email"),
  message: yup.string().min(30).required("Enter your Message"),
});

export default messageSchema;
