import { CrementButtonPair } from "components/Formik/CrementButtonPair";
import { FormError } from "components/Formik/FormError";
import { IneqalityGroup } from "components/Formik/InequalityGroup/InequalityGroup";
import { SubredditQueryRequest, SubredditQueryResults } from "Constants";
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
  subreddit: YupString().notRequired(),
  modCount: YupNumber().integer().moreThan(-1).notRequired(),
  modCountRelation: YupString().max(2),
  resultCapacity: YupNumber().integer().moreThan(-1).notRequired(),
});

interface Props {
  onSubmit: (values: SubredditQueryRequest) => Promise<SubredditQueryResults>;
}

export const SubredditQueryForm = (props: Props) => {
  const initialValues: SubredditQueryRequest = {
    subreddit: "",
    modCount: "",
    modCountRelation: "lt",
    resultCapacity: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        values.modCount = values.modCount ? values.modCount : "10";
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
                color: "#A04444",
                textAlign: "left",
                paddingBottom: "5px",
                fontSize: "20px",
              }}
            >
              Subreddit Query
            </RBForm.Text>
            <InputGroup>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id="tooltip-subreddit-search">
                    Search for subreddits using keywords
                  </Tooltip>
                }
              >
                  <InputGroup.Text>Subreddit</InputGroup.Text>
              </OverlayTrigger>
              <FormControl
                placeholder="Search"
                name="subreddit"
                value={values.subreddit}
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
                  <Tooltip id="tooltip-subreddit-count">
                    Subreddit relation to number of current moderators
                  </Tooltip>
                }
              >
                  <InputGroup.Text>Mod Count</InputGroup.Text>
              </OverlayTrigger>
              <FormControl
                placeholder="10"
                name="modCount"
                value={values.modCount}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <InputGroup.Text>
                <CrementButtonPair name="modCount" min={1} default={10} />
              </InputGroup.Text>
            </InputGroup>
            <div className="inequality-group">
              <IneqalityGroup name="modCountRelation" />
            </div>
            <hr />
            <InputGroup>
              <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                  <Tooltip id="tooltip-subreddit-cap">
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
            <FormError name="subreddit" error={errors.subreddit} />
            <FormError name="modCount" error={errors.modCount} />
            <FormError name="resultCapacity" error={errors.resultCapacity} />
          </Form>
        );
      }}
    </Formik>
  );
};
