import React, { Fragment , useState,  useEffect} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {Submit,Cancel} from "../../../constant";
import { ToastContainer, toast} from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, videErrors } from "../../../redux/productAction/action";


const CreateProduct = ({history}) => { 
  const dispatch = useDispatch()
  const [productCreate, setProductCreate] = useState({});

const getProductCreate = (e) =>
setProductCreate({ ...productCreate, [e.target.name]: e.target.value });

const createProduct = () => {
  dispatch(addProduct(productCreate, history));
};


  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove())
    toast.success("Dropzone successfully submitted !");
} // DropZone related
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } } // Image DropZone reltated
  const handleChangeStatus = ({ meta, file }, status) => {
  }  // Image DropZone reltated


  //managing errors if exist
  const arrErrors = useSelector((state) => state.userReducer.errors);
  //sucess register
  const successRegister = useSelector((state) => state.userReducer.msg);
  
  useEffect(() => {
    if (arrErrors.length > 0) {
      arrErrors.forEach((el) => {
        toast.error(el.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      });
    } else if (successRegister) {
      toast.success(successRegister, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      dispatch(videErrors());
    }
    // eslint-disable-next-line
  }, [arrErrors, successRegister]);
  

  return (
    <Fragment>
      <Breadcrumb parent="E-commerce" title="Create Product" />
      <Container fluid={true}>
        <Row>
          
          
              <Col sm="12">
                <Card>
                  
                  <CardBody>
                    <Form className="theme-form mega-form">
                      <h6>The Product Details:</h6>
                      <FormGroup>
                        <Label className="col-form-label">Product Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" />
                      </FormGroup>

                      <FormGroup>
                        <Label className='col-form-label'>Product Type</Label>
                        <Input
                        type='select'
                        className='custom-select'
                        required=''
                        >
                        <option value='Toy'>Toy</option>
                        <option value='Food'>Food</option>
                        <option value='Treat'>Teats</option>
                        <option value='Accessory'>Accessory</option>
                        <option value='Litter'>Litter</option>
                        <option value='Supplies'>Supplies</option>
                        </Input>
                      </FormGroup>

                      <FormGroup>
                          <Label>Brand</Label>
                            <Input className="form-control"  name="lastName" type="text" placeholder="The product's brand"  />
                      </FormGroup>

                      <FormGroup>
                          <Label> Product Description</Label>
                            <Input className="form-control"  name="lastName" type="text" placeholder="The product's description: for which pet, what is used for..... "  />
                      </FormGroup>
                      
                      <FormGroup>
                          <Label>Color (or colors available)</Label> 
                            <Input className="form-control" name="firstName" type="text" placeholder="The product's color"  />
                      </FormGroup>
                      <FormGroup>
                        <Label>Product Price</Label>
                            <Input className="form-control" name="firstName" type="Number" placeholder="10.00 DT / 45.00 DT / 35.00 DT / 00.50DT "  />
                      </FormGroup>
                      
                      <FormGroup>
                        <Label>Product Promo Price</Label>
                            <Input className="form-control" name="firstName" type="Number" placeholder="5.00 DT / 35.00 DT / 22.50 DT / 00.50DT "  />
                      </FormGroup> 

                  

                    </Form>
                    <hr className="mt-4 mb-4" />

                    {/* Drop ZOne Starts Here */}
                    
                    <Card>
                            <CardHeader>
                                <h5>Upload Product's Images</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <ToastContainer />
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            onSubmit={handleSubmit}
                                            accept="image/*"
                                        />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                        
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

export default CreateProduct;