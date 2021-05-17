import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import { EmailAddress,Website,BillingInformation,Submit,Cancel,ContactNumber} from "../../constant";
const CreateShop = () => { 
  
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } } // DropZone reltated
  const handleChangeStatus = ({ meta, file }, status) => {
  }  // DropZone reltated
  return (
    <Fragment>
      <Breadcrumb parent="Forms"/>
      <Container fluid={true}>
        <Row>
          
          
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Create Shop Account</h5>
                  </CardHeader>
                  <CardBody>
                    <Form className="theme-form mega-form">
                      <h6>Legal Contact</h6>
                      <FormGroup>
                        <Label className="col-form-label">First Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Last Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" />
                        </FormGroup>

                        <label className="pb-4">Full Adress</label>
                    <Form className="form-inline theme-form billing-form">
                      <FormGroup>
                        <Input className="form-control" type="text" placeholder="Adress" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="City/State" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="Postal Code" />
                      </FormGroup>
                    </Form>

                      
                      <FormGroup>
                        <Label className="col-form-label">{EmailAddress}</Label>
                        <Input className="form-control" type="email" placeholder="Enter email" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{ContactNumber}</Label>
                        <Input className="form-control" type="Number" placeholder="Enter contact number" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">CIN</Label>
                        <Input className="form-control" type="Number" placeholder="Enter CIN" />
                      </FormGroup>
                      <hr className="mt-4 mb-4" />


                      <h6>Shop Information</h6>
                      <FormGroup>
                        <Label className="col-form-label">Shop Name</Label>
                        <Input className="form-control" type="text" placeholder="Shop Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{Website}</Label>
                        <Input className="form-control" type="text" placeholder="Website" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Email</Label>
                        <Input className="form-control" type="text" placeholder="Email" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Password</Label>
                        <Input className="form-control" type="text" placeholder="Website" />
                      </FormGroup>

                     
                    <label className="pb-4">Full Adress</label>
                    <Form className="form-inline theme-form billing-form">
                      <FormGroup>
                        <Input className="form-control" type="text" placeholder="Adress" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="City/State" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="Postal Code" />
                      </FormGroup>
                    </Form>


                    
                      <FormGroup>
                        <Label className="col-form-label">Tax Number</Label>
                        <Input className="form-control" type="text" placeholder="Tax Number" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">About</Label>
                        <Input className="form-control" type="text" placeholder="About" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Shipping Fees</Label>
                        <Input className="form-control" type="text" placeholder="ShippingFees" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Etc etc</Label>
                        <Input className="form-control" type="text" placeholder="etc..etc" />
                      </FormGroup>
                    </Form>
                    <hr className="mt-4 mb-4" />

                    Optional 
                    <label className="pb-4">{BillingInformation}</label>
                    <Form className="form-inline theme-form billing-form">
                      <FormGroup>
                        <Input className="form-control" type="text" placeholder="Name On Card" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="Card Number" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="Zip Code" />
                      </FormGroup>
                    </Form>

                    {/* Drop ZOne Starts Here */}
                    
                            <CardHeader>
                                <h5>Shop Logo Or Image</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            maxFiles={1}
                                            multiple={false}
                                            canCancel={false}
                                            inputContent="Drop A File"
                                            styles={{
                                                dropzone: { height: 200 },
                                                dropzoneActive: { borderColor: 'green' },
                                            }}
                                        />
                                    </div>
                                </Form>
                            </CardBody>
                        
                        {/* Drop ZOne Ends Here */}
                  </CardBody>
                  <CardFooter>
                      <Button color="primary" className="mr-1">{Submit}</Button>
                      <Button color="secondary">{Cancel}</Button>
                  </CardFooter>
                </Card>
              </Col>
            
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreateShop;