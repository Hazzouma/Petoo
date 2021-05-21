import React, { Fragment } from 'react';
import { Link} from "react-router-dom";
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Button,Form,FormGroup,Label,Input} from 'reactstrap'
import {Submit,Cancel,} from '../../src/constant/index'

const registerVet = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row  className="justify-content-md-center" >
          <Col sm={8}>
            <Card>
              <CardHeader>
                <h5>Register a professional veterinary:</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Fist Name</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text"  placeholder="Enter your first name..." />
                        </Col>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Last Name</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" placeholder="Enter your last name..." />
                        </Col>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Date of birth</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="date" defaultValue="2018-01-01" />
                        </Col>
                      </FormGroup>

                      <FormGroup className='m-t-15 custom-radio-ml'>
                      <div className='radio radio-primary'>
                        <Input
                          id='radio11'
                          type='radio'
                          name='radio1'
                          value='option1'
                          //onClick={() => setGender("Male")}
                        />
                        <Label for='radio11'>Male</Label>
                      </div>
                      <div className='radio radio-secondary'>
                        <Input
                          id='radio22'
                          type='radio'
                          name='radio1'
                          value='option1'
                         // onClick={() => setGender("Female")}
                        />
                        <Label for='radio22'>Female</Label>
                      </div>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Phone Number</Label>
                        <Col sm="9">
                          <Input className="form-control m-input digits" type="number" placeholder="Enter your professional phone number..." />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Full Adress</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="text" placeholder="Adress" />
                          <Input className="form-control digits" type="text" placeholder="City" />
                          <Input className="form-control digits" type="text" placeholder="Postal Code" />
                        </Col>
                      </FormGroup>
                    
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Professional Code (Code de Déontologie du Médecin Vétérinaire)</Label>
                        <Col sm="9">
                          <Input className="form-control m-input digits" type="number" placeholder="Code de Déontologie du Médecin Vétérinaire" />
                        </Col>
                      </FormGroup>
                    

                      <FormGroup className="row mb-0">
                        <Label className="col-sm-3 col-form-label">Enter a breif summary of your resume</Label>
                        <Col sm="9">
                          <textarea className="form-control" rows="5" cols="5" placeholder="Resume / Work Experience / Certficates "></textarea>
                        </Col>
                      </FormGroup>
                      <hr/>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">E-mail</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="email" placeholder="Enter your professional email" />
                        </Col>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Password</Label>
                        <Col sm="9">
                          <Input className="form-control" type="password" placeholder="Password " />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Retype you Password</Label>
                        <Col sm="9">
                          <Input className="form-control" type="password" placeholder="Password" />
                        </Col>
                      </FormGroup>
                      
                      
                      
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Col sm="9 offset-sm-3">

                    <Button  color="primary" className="mr-1">{Submit}</Button>
                    <Link className='ml-2' to='/register'>
                    <Button color="light" type="reset" >{Cancel}</Button>
                    </Link>
                  </Col>
                </CardFooter>
              </Form>
            </Card>
            
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default registerVet;