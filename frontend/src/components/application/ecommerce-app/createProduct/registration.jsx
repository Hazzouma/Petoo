import React, { Fragment } from 'react';
import {useForm} from 'react-hook-form'
import {Row,Col,Form,Label,Input} from 'reactstrap'
import { FirstName,LastName } from "../../../../constant";

const Registration = () => {
    const { register, handleSubmit, errors } = useForm(); 

    const onSubmit = data => {

        if (data !== '') {
            alert('You submitted the form and stuff!');
        } else {
            errors.showMessages();
        }
    };
    return (
        <Fragment>
            <Row>
                <Col sm="12">
                    <Form className="needs-validation" onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-row">
                            
                            <Col md="12 mb-3">
                                <Label>Product Name</Label>
                                <Input className="form-control" name="firstName" type="text" placeholder="The product's name"  />
                            </Col>

                            <Col md="12 mb-3">
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
                        </Col>
                            
                            <Col md="12 mb-3">
                                <Label>Brand</Label>
                                <Input className="form-control"  name="lastName" type="text" placeholder="The product's brand"  />
                            </Col>

                            <Col md="12 mb-3">
                                <Label>Description</Label>
                                <Input className="form-control"  name="lastName" type="text" placeholder="The product's description: for which pet, what is used for..... "  />
                            </Col>

                        </div>
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Registration;