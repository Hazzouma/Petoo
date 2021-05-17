import React, { Fragment,useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, Media,CardBody, ListGroupItem,ListGroup, Button,Table } from 'reactstrap'
import {DDMMYY,Designer,MarkJecno} from '../../constant'
import {  UsersTableHeader,Edit,Update,Delete} from '../../constant/index'
import axios from 'axios'



const PetProfile = (props) => {
  const [data,setData] = useState([])

useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/user-edit-table.json`).then(res => setData(res.data))
},[])
   // eslint-disable-next-line 
  const [url, setUrl] = useState();

  const readUrl = (event) => {
    if (event.target.files.length === 0)
      return;
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setUrl(reader.result)
    }
  }
  return (
    <Fragment>
      <Breadcrumb parent="Users" title="User Profile" />
      <Container fluid={true}>
        <div className="user-profile">
          <Row>

            {/* The Profile Card Starts Here */}
            <Col sm="12">
              <Card className="card hovercard text-center">
                <CardHeader className="cardheader"></CardHeader>
                <div className="user-image">
                  <div className="avatar"><Media body alt="" src="https://assets.onbuy.com/i25/product/472997d46ab2427aa073a372eb55eca7-m30519038/golden-retriever-dog-square-6x6-greeting-card.jpg" data-intro="This is Profile image" /></div>
                  <div className="icon-wrapper" data-intro="Change Profile image here">
                    <i className="icofont icofont-pencil-alt-5">
                      <input className="upload" type="file" onChange={(e) => readUrl(e)} />
                    </i>
                  </div>
                </div>
                <div className="info">
                  <Row>

                    <Col sm="12" lg="4" className="order-sm-1 order-xl-0">
                      <Row >
                        <Col md="5">
                          <div className="ttl-info text-left">
                            <h6><i className="fa fa-envelope mr-2"></i> Gender</h6><span>Male</span>
                          </div>
                        </Col>>
                        <Col md="5">
                          <div className="ttl-info text-left ttl-sm-mb-0">
                            <h6><i className="fa fa-calendar"></i> DOB</h6><span>{DDMMYY}</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm="12" lg="4" className="order-sm-0 order-xl-1">
                      <div className="user-designation">
                        <div className="title"><a target="_blank" href="#javascript">{MarkJecno}</a></div>
                        <div className="desc mt-2">{Designer} Dog</div>
                      </div>
                    </Col>

                    <Col sm="12" lg="4" className="order-sm-2 order-xl-2">
                      <Row>
                        <Col md="6">
                          <div className="ttl-info text-left ttl-xs-mt">
                            <h6><i className="fa fa-phone"></i>   Distinguishing Mark</h6><span> black dot</span>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="ttl-info text-left ttl-sm-mb-0">
                            <h6><i className="fa fa-location-arrow"></i>   Color</h6><span>Gold </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr />

                  {/* <div className="social-media step4" data-intro="This is your Social details">
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                    </ul>
                  </div> */}
                  <div className="follow">
                    <Row>
                      <Col col="6" className="text-md-right border-right">
                        <div className="follow-num counter">Labrador</div><span> Breed</span>
                      </Col>
                      <Col col="6" className="text-md-left">
                        <div className="follow-num counter"> 6 Months </div><span>Age</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Col>
            {/* The Profile Card Ends Here */}


          {/* Allergies Starts Here  */}
            <Col sm="12" xl="12">
            <Card>
              <CardHeader>
                <h5>Known Allergies</h5>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript"><i className="icon-target"></i>{"Cras justo odio"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript"><i className="icon-target"></i>{"Dapibus ac facilisis in"}</ListGroupItem>
                  <ListGroupItem className="list-group-item-action" tag="a" href="#javascript"><i className="icon-target"></i>{"Morbi leo risus"}</ListGroupItem>
                  
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          {/* Allergies Endss Here  */}

            {/* Vaccination History Starts Here  */}
            <Col sm="12">
              <Card>
              <CardHeader>
                  <h5>Vaccination History</h5>
              </CardHeader>
            <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap">
                    <thead>
                      <tr>
                        {UsersTableHeader.map((items,i) => 
                          <th key={i}>{items}</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>

                      {data.map((items,i) => 
                        <tr key={i}>
                          <td><a className="text-inherit" href="#javascript">{items.projectName} </a></td>
                          <td>{items.date}</td>
                          <td><span className="status-icon bg-success"></span>{items.status}</td>
                          <td>{items.price}</td>
                          <td className="text-right">
                            <Button color="primary" size="sm"><i className="fa fa-pencil"></i> {Edit}</Button>
                            <Button color="transparent" size="sm"><i className="fa fa-link"></i> {Update}</Button>
                            <Button color="danger" size="sm"><i className="fa fa-trash"></i> {Delete}</Button>
                          </td>
                        </tr>
                      )}
                      
                    </tbody>
                  </table>
                </div>
                </Card>
            </Col>
            {/* Vaccination History Starts Here  */}

            
          {/* Medication History Starts Here ( Possible to change it like the vaccination Table (UI reason))  */}  
            <Col sm="12">
                        <Card>
                            <CardHeader>
                                <h5>Medication History</h5>
                            </CardHeader>
                            <div className="table-responsive">
                                <Table>
                                    <thead>
                                        <tr className="border-bottom-primary">
                                            <th scope="col">{"#Date"}</th>
                                            <th scope="col">{"Medicine"}</th>
                                            <th scope="col">{"Reason"}</th>
                                            <th scope="col">{"Duration"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-bottom-secondary">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                        <tr className="border-bottom-success">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                        <tr className="border-bottom-info">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                        <tr className="border-bottom-warning">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                        <tr className="border-bottom-danger">
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"3"}</th>
                                            <td>{"Jacob"}</td>
                                            <td>{"Thornton"}</td>
                                            <td>{"@fat"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card>
                    </Col>
          {/* Medication History Starts Here  */}


          </Row>

        </div>
      </Container>
    </Fragment>
  );
}

export default PetProfile;