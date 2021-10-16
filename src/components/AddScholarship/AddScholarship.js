import React from "react";
import { useHistory } from "react-router";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../FormikForm/FormikControl";
import "./AddScholarship.css";

const initialValues = {
  sch_name: "",
  gov_or_private: "",
  nat_or_reg: "",
  eligiblity: "",
  income_limit: "",
  deadline: "",
  link_to_apply: "",
};

const validationSchema = Yup.object({
  sch_name: Yup.string().required("Required"),
  gov_or_private: Yup.string().required("Required"),
  nat_or_reg: Yup.string().required("Required"),
  eligiblity: Yup.string().required("Required"),
  income_limit: Yup.string().required("Required"),
  deadline: Yup.string().required("Required"),
  link_to_apply: Yup.string().required("Required"),
});

const onSubmit = (v, history) => {
  console.log(v);
  history.push("/");
};
const gov_or_private_option = [
  { key: "Select Type", value: "" },
  { key: "Government ", value: "government" },
  { key: "Private", value: "private" },
];
const nat_or_reg_option = [
  { key: "Select Type", value: "" },
  { key: "National ", value: "national" },
  { key: "Regional", value: "regional" },
];

const AddScholarship = () => {
  const history = useHistory();

  return (
    <div className="outer-container">
      <span className="sch-title">Add New Scholarship</span>
      <div className="form-container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(v) => onSubmit(v, history)}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  label="Scholarship Name"
                  name="sch_name"
                />
                <FormikControl
                  control="select"
                  label="Government / Private"
                  name="gov_or_private"
                  options={gov_or_private_option}
                />
                <FormikControl
                  control="select"
                  label="National / Regional"
                  name="nat_or_reg"
                  options={nat_or_reg_option}
                />
                <FormikControl
                  control="textarea"
                  label="Eligiblity Criteria"
                  name="eligiblity"
                />
                <FormikControl
                  control="input"
                  label="Income Limit"
                  name="income_limit"
                  type="number"
                />
                <FormikControl
                  control="input"
                  label="DeadLine"
                  name="deadline"
                  type="date"
                />
                <FormikControl
                  control="input"
                  label="Link to apply"
                  name="link_to_apply"
                />

                <button className="form-button" type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AddScholarship;
