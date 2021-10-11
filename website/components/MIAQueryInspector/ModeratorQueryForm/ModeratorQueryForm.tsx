import { CrementButtonPair } from "components/Formik/CrementButtonPair";
import { FormError } from "components/Formik/FormError";
import { IneqalityGroup } from "components/Formik/InequalityGroup/InequalityGroup";
import { ModeratorQueryRequest, ModeratorQueryResults } from "Constants";
import { Form, Formik } from "formik";
import React from "react";
import {
  Button,
  Form as RBForm,
  FormControl,
  InputGroup,
  OverlayTrigger,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import {
  number as YupNumber,
  object as YupObject,
  string as YupString,
} from "yup";

const validationSchema = YupObject({
  moderator: YupString().notRequired(),
  subCount: YupNumber().integer().moreThan(-1).notRequired(),
  subCountRelation: YupString().max(2),
  resultCapacity: YupNumber().integer().moreThan(-1).notRequired(),
});

interface Props {
  onSubmit: (values: ModeratorQueryRequest) => Promise<ModeratorQueryResults>;
}

export const ModeratorQueryForm: React.FC<Props> = (props: Props) => {
  const initialValues: ModeratorQueryRequest = {
    moderator: "",
    subCount: "",
    subCountRelation: "lt",
    resultCapacity: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        values.subCount = values.subCount ? values.subCount : "10";
        values.resultCapacity = values.resultCapacity
          ? values.resultCapacity
          : "100";
        await props.onSubmit(values).then(() => {
          actions.setSubmitting(false);
        });
      }}
    >
      {({ values, handleChange, handleBlur, isSubmitting, errors }) => {
        return (
          <Form>
            <RBForm.Text
              style={{
                color: "#4444A0",
                textAlign: "left",
                paddingBottom: "5px",
                fontSize: "20px",
              }}
            >
              Moderator Query
            </RBForm.Text>
            <InputGroup>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id="tooltip-moderator-cap">
                    Search for moderators using keywords
                  </Tooltip>
                }
              >
                  <InputGroup.Text>Moderator</InputGroup.Text>
              </OverlayTrigger>
              <FormControl
                placeholder="Search"
                name="moderator"
                value={values.moderator}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputGroup>
            <hr />
            <InputGroup>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id="tooltip-moderator-cap">
                    Relation to the number of subreddits a user moderates
                  </Tooltip>
                }
              >
                  <InputGroup.Text>Sub Count</InputGroup.Text>
              </OverlayTrigger>
              <FormControl
                placeholder="10"
                name="subCount"
                value={values.subCount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputGroup.Text>
                <CrementButtonPair name="subCount" min={1} default={10} />
              </InputGroup.Text>
            </InputGroup>
            <div className="inequality-group">
              <IneqalityGroup name="subCountRelation" />
            </div>
            <hr />
            <InputGroup>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id="tooltip-moderator-cap">
                    Max amount of query entries to return and show
                  </Tooltip>
                }
              >
                  <InputGroup.Text>Result Capacity</InputGroup.Text>
              </OverlayTrigger>
              <FormControl
                placeholder="100"
                name="resultCapacity"
                value={values.resultCapacity}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </InputGroup>
            <hr />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant="outline-secondary"
            >
              {isSubmitting ? (
                <div>
                  <Spinner as="span" animation="border" size="sm" />
                  Loading...
                </div>
              ) : (
                "Submit"
              )}
            </Button>
            <FormError name="moderator" error={errors.moderator} />
            <FormError name="subCount" error={errors.subCount} />
            <FormError name="max" error={errors.resultCapacity} />
          </Form>
        );
      }}
    </Formik>
  );
};
