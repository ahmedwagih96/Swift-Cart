import { FormValues } from "./typing";
import { FormikErrors, FormikTouched } from "formik";
export type FormikProps = {
  values: FormValues;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleBlur: (event: React.FocusEvent) => void;
  handleChange: (event: React.ChangeEvent) => void;
  setFieldValue?: (
    field: string,
    value: string | number | boolean,
    shouldValidate?: boolean
  ) => void;
};
