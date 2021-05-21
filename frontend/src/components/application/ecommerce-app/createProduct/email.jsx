import React, { Fragment } from 'react';
import {Row,Col,Form,Label,Input} from 'reactstrap'
const Emails = (props) => {
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <Form className="needs-validation" noValidate>
                        <div className="form-row">
                        
                            <Col md="12 mb-3">
                                <Label>Color (or colors available)</Label> 
                                <Input className="form-control" name="firstName" type="text" placeholder="The product's color"  />
                            </Col>
                            
                            <Col md="12 mb-3">
                                <Label>Product Price</Label>
                                <Input className="form-control" name="firstName" type="Number" placeholder="10.00 DT / 45.00 DT / 35.00 DT / 00.50DT "  />
                            </Col>

                            <Col md="12 mb-3">
                                <Label>Product Promo Price</Label>
                                <Input className="form-control" name="firstName" type="Number" placeholder="5.00 DT / 35.00 DT / 22.50 DT / 00.50DT "  />
                            </Col>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Emails;