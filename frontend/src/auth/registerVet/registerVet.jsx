import React, { Fragment } from 'react';
import Breadcrumb from '../../../src/layout/breadcrumb'
import StepZilla from "react-stepzilla";
import Registration from './registration';
import Email from './email';
import Birthdate from './birthdate';
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
import { FormWizardWithIcon } from "../../constant/index";

const registerVet = () => {
    const steps =
        [
            { name: 'Step 1', component: <Registration /> },
            { name: 'Step 2', component: <Email /> },
            { name: 'Step 3', component: <Birthdate /> },
            
        ]
    return (
        <Fragment>
          
            <Container fluid={true} fluid={true} className='p-0'>
                <Row className="justify-content-md-center">
                    <Col   sm={8}>
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
                                dontValidate={true} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </Fragment>
    );
};

export default registerVet;