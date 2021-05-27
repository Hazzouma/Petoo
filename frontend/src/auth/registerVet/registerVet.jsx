import React, { Fragment } from "react";
import StepZilla from "react-stepzilla";
import Registration from "./registration";
import { Link } from "react-router-dom";
import Email from "./email";
import Birthdate from "./birthdate";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";

const registerVet = () => {
  const steps = [
    { name: "Step 1", component: <Registration /> },
    { name: "Step 2", component: <Email /> },
    { name: "Step 3", component: <Birthdate /> },
  ];
  return (
    <Fragment>
      <Container fluid={true} className='p-0'>
        <Row className='justify-content-md-center'>
          <Col sm={8}>
            <Card>
              <CardHeader>
                <h5>Register as a Vet</h5>
              </CardHeader>
              <CardBody>
                <StepZilla
                  steps={steps}
                  showSteps={true}
                  showNavigation={true}
                  stepsNavigation={true}
                  prevBtnOnLastStep={true}
                  dontValidate={true}
                />
                <Link className='ml-2' to='/login'>
                  <Button color='danger' className='pull-right'>
                    Cancel
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default registerVet;
