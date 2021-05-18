import React, { Fragment, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import Dropzone from "react-dropzone-uploader";
import DatePicker from "react-datepicker";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Submit, Cancel } from "../../constant";
const CreatePet = () => {
  const [startDate, setstartDate] = useState(new Date()); //Date picker related
  const handleChange = (date) => {
    //Date Picker related
    setstartDate(date);
  };

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  }; // DropZone reltated
  const handleChangeStatus = ({ meta, file }, status) => {}; // DropZone reltated
  return (
    <Fragment>
      <Breadcrumb parent='Forms' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <h5>Create Pet Account</h5>
              </CardHeader>
              <CardBody>
                <Form className='theme-form mega-form'>
                  <h6>The Pet Details:</h6>
                  <FormGroup>
                    <Label className='col-form-label'>Name</Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='Name'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>Pet type </Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='ex: cat, bird, dog...'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>Date Of Birth</Label>
                    {/* Date Picker */}
                    <FormGroup className='form-row'>
                      <div className='col-xl-5 col-sm-9'>
                        <div className='input-group'>
                          <DatePicker
                            className='form-control digits'
                            selected={startDate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </FormGroup>
                  </FormGroup>

                  <Col sm='12'>
                    <h5>Gender</h5>
                  </Col>
                  <Col>
                    <FormGroup className='m-t-15 custom-radio-ml'>
                      <div className='checkbox checkbox-primary'>
                        <Input id='checkbox-primary-1' type='checkbox' />
                        <Label for='checkbox-primary-1'>Male</Label>
                      </div>
                      <div className='checkbox checkbox-secondary'>
                        <Input id='checkbox-dark' type='checkbox' />
                        <Label for='checkbox-dark'>Female</Label>
                      </div>
                    </FormGroup>
                  </Col>

                  <FormGroup>
                    <Label className='col-form-label'>Breed</Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='Breed'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>Color</Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='Color'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>
                      Distinguishing Mark
                    </Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='ex: black tail/ dark spot on the back....'
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label className='col-form-label'>Known Allergies</Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='Allergies'
                    />
                  </FormGroup>

                  <Col sm='12'>
                    <h5>Vaccinated</h5>
                  </Col>
                  <Col>
                    <FormGroup className='m-t-15 custom-radio-ml'>
                      <div className='checkbox checkbox-success'>
                        <Input id='checkbox-primary' type='checkbox' />
                        <Label for='checkbox-primary'>Yes</Label>
                      </div>
                      <div className='checkbox checkbox-secondary'>
                        <Input id='checkbox-dark' type='checkbox' />
                        <Label for='checkbox-dark'>No</Label>
                      </div>
                    </FormGroup>
                  </Col>

                  {/* Vaccines Statrs Here */}
                  <label className='pb-4'>Vaccines done:</label>
                  <Form className='form-inline theme-form billing-form'>
                    <FormGroup>
                      <Input
                        className='form-control'
                        type='text'
                        placeholder='Vaccine name'
                      />
                    </FormGroup>
                    <FormGroup className='form-row'>
                      <label className='col-sm-3 col-form-label text-right'>
                        Date
                      </label>
                      <div className='col-xl-5 col-sm-9'>
                        <div className='input-group'>
                          <DatePicker
                            className='form-control digits'
                            selected={startDate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </FormGroup>
                  </Form>
                  <Form className='form-inline theme-form billing-form'>
                    <FormGroup>
                      <Input
                        className='form-control'
                        type='text'
                        placeholder='Vaccine name'
                      />
                    </FormGroup>
                    <FormGroup className='form-row'>
                      <label className='col-sm-3 col-form-label text-right'>
                        Date
                      </label>
                      <div className='col-xl-5 col-sm-9'>
                        <div className='input-group'>
                          <DatePicker
                            className='form-control digits'
                            selected={startDate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </FormGroup>
                  </Form>
                </Form>
                {/* Vaccines Ends Here */}

                <hr className='mt-4 mb-4' />

                {/* Drop ZOne Starts Here */}

                <CardHeader>
                  <h5>The Pet's Image</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div className='dz-message needsclick'>
                      <Dropzone
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        maxFiles={1}
                        multiple={false}
                        canCancel={false}
                        inputContent='Drop A File'
                        styles={{
                          dropzone: { height: 200 },
                          dropzoneActive: { borderColor: "green" },
                        }}
                      />
                    </div>
                  </Form>
                </CardBody>

                {/* Drop ZOne Ends Here */}
              </CardBody>
              <CardFooter>
                <Button color='primary' className='mr-1'>
                  {Submit}
                </Button>
                <Button color='secondary'>{Cancel}</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreatePet;
