import React, { Fragment } from "react";
import { Row, Col, Form, Label, Input, Button, FormGroup } from "reactstrap";
import { Submit } from "../../constant/index";

const Birthdate = (props) => {
  const submitFun = () => {
    alert("successfully updated");
    window.location.reload();
  };
  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <Form className='needs-validation' noValidate>
            <Row form>
              <Col md='12 mb-3'>
                <Label className='col-form-label'>Professional Number</Label>
                <Input
                  className='form-control'
                  type='Number'
                  placeholder='Professional Number'
                />
              </Col>
              <Col md='12 mb-3'>
                <Label className='col-form-label'>CIN</Label>
                <Input
                  className='form-control'
                  type='Number'
                  placeholder='Enter CIN'
                />
              </Col>
              <label className='pb-4'>Work Full Adress</label>
              <Col md='12 mb-3'>
                <FormGroup>
                  <Input
                    className='form-control'
                    type='text'
                    placeholder='Adress'
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className='form-control'
                    type='text'
                    name='inputPassword'
                    placeholder='City/State'
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    className='form-control'
                    type='text'
                    name='inputPassword'
                    placeholder='Postal Code'
                  />
                </FormGroup>
              </Col>
              <Col md='12 mb-3'>
                <Label className='col-form-label'>
                  Enter a little summary about yourself:
                </Label>
                <Input
                  className='form-control'
                  type='text'
                  placeholder='About'
                />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Button color='primary' className='pull-right' onClick={submitFun}>
        {Submit}
      </Button>
    </Fragment>
  );
};

export default Birthdate;
