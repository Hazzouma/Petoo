import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import { EmailAddress,Website,BillingInformation,Submit,Cancel,ContactNumber} from "../../constant";
const CreateVet = () => { 
  
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } } // DropZone reltated
  const handleChangeStatus = ({ meta, file }, status) => {
  }  // DropZone reltated
  return (
    <Fragment>
      <Breadcrumb parent="Forms" />
      <Container fluid={true}>
        <Row>
          
          
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Create Vet Account</h5>
                  </CardHeader>
                  <CardBody>
                    <Form className="theme-form mega-form">
                      <h6>The Veterinay Details:</h6>
                      <FormGroup>
                        <Label className="col-form-label">First Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Last Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Date Of Birth</Label>
                        <Input className="form-control" type="text" placeholder="Date of Birth" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Gender</Label>
                        <Input className="form-control" type="text" placeholder="Gender" />
                      </FormGroup>
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
                        <Label className="col-form-label">About</Label>
                        <Input className="form-control" type="text" placeholder="About" />
                      </FormGroup>

                    </Form>
                    <hr className="mt-4 mb-4" />

                    {/* Drop ZOne Starts Here */}
                    
                            <CardHeader>
                                <h5>The veterinary Image</h5>
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

export default CreateVet;