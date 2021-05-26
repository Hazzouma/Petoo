import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {useSelector} from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Media,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import {Bio, Save, UpdateProfile,} from "../../constant";
import DatePicker from "react-datepicker";


const UserEdit = (props) => {
  const [startDate, setstartDate] = useState(new Date()); //Date picker related
  const handleChange = (date) => {
    //Date Picker related
    setstartDate(date);
  };
const {email,nom,prenom,adresse,profilePicture,codePostale,ville,role} = useSelector(state => state.currentUser.user)
  useEffect(() => {

  }, []);

  return (
    <Fragment>
      <Breadcrumb parent='Users' title='Edit Profile' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            {/* Main Details Starts */}
            <Col xl='4'>
              <Card>
                <CardHeader>
                  <h4 className='card-title mb-0'>My Profile </h4>
                  <div className='card-options'>
                    <a className='card-options-collapse' href='#javascript'>
                      <i className='fe fe-chevron-up'></i>
                    </a>
                    <a className='card-options-remove' href='#javascript'>
                      <i className='fe fe-x'></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row className='mb-2'>
                      <div className='col-auto'>
                        <Media
                          className='img-70 rounded-circle'
                          alt=''
                          src={profilePicture}
                        />
                      </div>
                      <Col>
                        <h3 className='mb-1'>{prenom} {nom} </h3>
                        <p className='mb-4'>{role}</p>
                      </Col>
                    </Row>
                    <FormGroup>
                      <h6 className='form-label'>Bio</h6>
                      <Input
                        type='textarea'
                        className='form-control'
                        rows='5'
                        defaultValue={Bio}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className='form-label'>E-mail Adress</Label>
                      <Input
                        className='form-control'
                        placeholder='your-email@domain.com'
                        defaultValue={email}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label className='form-label'>Password</Label>
                      <Input
                        className='form-control'
                        type='password'
                        placeholder='*******'
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className='form-label'>Retype Password</Label>
                      <Input
                        className='form-control'
                        type='password'
                        placeholder='*******'
                      />
                    </FormGroup>

                    <div className='form-footer'>
                      <button className='btn btn-primary btn-block'>
                        {Save}
                      </button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            {/* Main Details Ends */}

            {/* General Details Starts */}
            <Col xl='8'>
              <Form className='card'>
                <CardHeader>
                  <h4 className='card-title mb-0'>Edit Profile</h4>
                  <div className='card-options'>
                    <a className='card-options-collapse' href='#javascript'>
                      <i className='fe fe-chevron-up'></i>
                    </a>
                    <a className='card-options-remove' href='#javascript'>
                      <i className='fe fe-x'></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>First Name</Label>
                        <Input
                          className='form-control'
                          type='text'
                          placeholder='First Nae'
                          defaultValue={prenom}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>Last Name</Label>
                        <Input
                          className='form-control'
                          type='text'
                          placeholder='Last Name'
                          defaultValue={nom}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='12'>
                      <FormGroup>
                        <Label className='form-label'>E-Adress</Label>
                        <Input
                          className='form-control'
                          type='email'
                          placeholder='Email Address'
                          defaultValue={email}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='12'>
                      <FormGroup>
                        <Label className='form-label'>Adress</Label>
                        <Input
                          className='form-control'
                          type='text'
                          placeholder='Home Address'
                          defaultValue={adresse}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>City</Label>
                        <Input
                          className='form-control'
                          type='text'
                          placeholder='City'
                          defaultValue={ville}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>Postal Code</Label>
                        <Input
                          className='form-control'
                          type='number'
                          placeholder='ZIP Code'
                          defaultValue={codePostale}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='12'>
                      <FormGroup className='form-row'>
                      <Label className='form-label'>Date of Birth</Label>
                      
                        <div className='input-group'>
                          <DatePicker
                            className='form-control digits'
                            selected={startDate}
                            onChange={(e) => handleChange(e)}
                          />
                        
                      </div>
                    </FormGroup>
                  
                  </Col>
                  </Row>
                </CardBody>
                <CardFooter className='text-right'>
                  <button className='btn btn-primary' type='submit'>
                    {UpdateProfile}
                  </button>
                </CardFooter>
              </Form>
            </Col>
            <Col md='12'>{/* General Details Ends */}</Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default UserEdit;
