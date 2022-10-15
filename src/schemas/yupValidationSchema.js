import * as yup from "yup"; // cf. validation schema

export const yupValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Too short first name")
    .max(20, "Too long")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Too short last name")
    .max(20, "Too long")
    .required("Last name is required"),
  street: yup
    .string()
    .min(2, "Too short street name")
    .max(40, "Too long")
    .required("Street is required"),
  city: yup
    .string()
    .min(2, "Too short city name")
    .max(40, "Too long")
    .required("City is required"),
  zipCode: yup
    .string()
    .matches(/^[0-9]{5}$/, "Correct zip code is required")
    .required("Zip code is required"),
  // .typeError("Zip code must be a number")
  // .min(2, "Correct zip code is required")
  // .max(12, "Correct zip code is required")
});
