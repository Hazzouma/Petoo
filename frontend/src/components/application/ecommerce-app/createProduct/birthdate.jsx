import React, { Fragment } from 'react';
import {Row,Col,Form,Label,Input,Button, Card, CardHeader,CardBody} from 'reactstrap'
import { Submit } from "../../../../constant";
import { ToastContainer, toast} from 'react-toastify';
import Dropzone from 'react-dropzone-uploader';

const Birthdate = (props) => {
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    const handleChangeStatus = ({ meta, file }, status) => {
    }
    const handleSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove())
        toast.success("Dropzone successfully submitted !");
    }


    const submitFun = () => {
        alert("successfully updated")
        window.location.reload();
    }
    return (
        <Fragment>
            <Row>
                <Col sm="12">

                    <Form className="needs-validation" noValidate>
                    <Col sm="12">
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
                    </Col>
                        <Button color="primary"  className="pull-right" onClick={submitFun}>{Submit}</Button>
                        
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Birthdate;