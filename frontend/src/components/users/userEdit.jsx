import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
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
import axios from "axios";
import { Save,} from "../../constant";
import DatePicker from "react-datepicker";
import {useSelector} from 'react-redux';



const UserEdit = (props) => {
  const { prenom,profilePicture, role,nom,email,dateNaissance,adresse,ville,codePostale,phoneNumber,bio } = useSelector((state) => state.currentUser.user);

  const [startDate, setstartDate] = useState(new Date()); //Date picker related
  const handleChange = (date) => {
    //Date Picker related
    setstartDate(date);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/user-edit-table.json`)
      .then((res) => setData(res.data));
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
                  <h4 className='card-title mb-0'>MyProfile</h4>
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
                        <h3 className='mb-1'>{nom}</h3>
                        <p className='mb-4'>{role}</p>
                      </Col>
                    </Row>
                    <FormGroup>
                      <h6 className='form-label'>Bio</h6>
                      <Input
                        type='textarea'
                        className='form-control'
                        rows='5'
                        defaultValue='On the other hand, we denounce with righteous indignation'
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className='form-label'>Email Adresss</Label>
                      <Input
                        className='form-control'
                        placeholder={email}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label className='form-label'>Password</Label>
                      <Input
                        className='form-control'
                        type='password'
                        defaultValue='password'
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className='form-label'>Retype Password</Label>
                      <Input
                        className='form-control'
                        type='password'
                        defaultValue='password'
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
                  <h4 className='card-title mb-0'>EditProfile</h4>
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
                        <Label className='form-label'>FirstName</Label>
                        <Input
                          className='form-control'
                          type='text'
                          placeholder={nom}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>LastName</Label>
                        <Input
                          className='form-control'
                          type='text'
                          placeholder={prenom}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='12'>
                      <FormGroup>
                        <Label className='form-label'>Phone Number</Label>
                        <Input
                          className='form-control'
                          type='email'
                          placeholder={phoneNumber}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='12'>
                      <FormGroup>
                        <Label className='form-label'>Adresse</Label>
                        <Input
                          className='form-control'
                          type='text'
                          placeholder={adresse}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>City</Label>
                        <Input
                          className='form-control'
                          type='text'
                          placeholder={ville}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>Postal Code</Label>
                        <Input
                          className='form-control'
                          type='number'
                          placeholder={codePostale}
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
                            placeholder={dateNaissance}
                          />
                        
                      </div>
                    </FormGroup>
                  
                  </Col>
                  </Row>
                </CardBody>
                <CardFooter className='text-right'>
                  <button className='btn btn-primary' type='submit'>
                    UpdateProfile
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
