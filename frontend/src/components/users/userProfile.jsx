import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Media,
  FormGroup,
} from "reactstrap";
import { DDMMYY, Designer, MarkJecno } from "../../constant";
import Rating from "react-rating";
import axios from "axios";
import DatePicker from "react-datepicker";

import TimePickerFour from "../forms/form-widget/timepickerComponent/timepicker-four";

const UserProfile = (props) => {
  // Date Picker States Starts Here
  const [startDate, setstartDate] = useState(new Date());

  const handleChange = (date) => {
    setstartDate(date);
  };
  //Date Picker States Ends Here

  const [rating, setRating] = useState(5); // Rating States

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/user-edit-table.json`)
      .then((res) => setData(res.data));
  }, []);
  // eslint-disable-next-line
  const [url, setUrl] = useState();

  const readUrl = (event) => {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setUrl(reader.result);
    };
  };
  return (
    <Fragment>
      <Breadcrumb parent='Users' title='User Profile' />
      <Container fluid={true}>
        <div className='user-profile'>
          <Row>
            {/* The Profile Card Starts Here */}
            <Col sm='12'>
              <Card className='card hovercard text-center'>
                <CardHeader className='cardheader'></CardHeader>
                <div className='user-image'>
                  <div className='avatar'>
                    <Media
                      body
                      alt=''
                      src={require(`../../assets/images/user/3.png`)}
                      data-intro='This is Profile image'
                    />
                  </div>
                  <div
                    className='icon-wrapper'
                    data-intro='Change Profile image here'
                  >
                    <i className='icofont icofont-pencil-alt-5'>
                      <input
                        className='upload'
                        type='file'
                        onChange={(e) => readUrl(e)}
                      />
                    </i>
                  </div>
                </div>
                <div className='info'>
                  <Row>
                    <Col sm='12' lg='4' className='order-sm-1 order-xl-0'>
                      <Row>
                        <Col md='5'>
                          <div className='ttl-info text-left'>
                            <h6>
                              <i className='fa fa-envelope mr-2'></i> Email
                            </h6>
                            <span>Flén@gmail.com</span>
                          </div>
                        </Col>
                        >
                        <Col md='5'>
                          <div className='ttl-info text-left ttl-sm-mb-0'>
                            <h6>
                              <i className='fa fa-calendar'></i> DOB
                            </h6>
                            <span>{DDMMYY}</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm='12' lg='4' className='order-sm-0 order-xl-1'>
                      <div className='user-designation'>
                        <div className='title'>
                          <a target='_blank' href='#javascript'>
                            {MarkJecno}
                          </a>
                        </div>
                        <div className='desc mt-2'>{Designer} </div>
                      </div>
                    </Col>

                    <Col sm='12' lg='4' className='order-sm-2 order-xl-2'>
                      <Row>
                        <Col md='6'>
                          <div className='ttl-info text-left ttl-xs-mt'>
                            <h6>
                              <i className='fa fa-phone'></i>Phone
                            </h6>
                            <span> 95989598</span>
                          </div>
                        </Col>
                        <Col md='6'>
                          <div className='ttl-info text-left ttl-sm-mb-0'>
                            <h6>
                              <i className='fa fa-location-arrow'></i>
                                 Location
                            </h6>
                            <span>Rades </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr />
                  <div className='follow'>
                    <Row>
                      <Col col='6' className='text-md-right border-right'>
                        <div className='follow-num counter'>
                          {" "}
                          <h4>
                            I'm flén falten, i love pets, i have 2 , zina w
                            aziza{" "}
                          </h4>
                        </div>
                        <span>Full Adress</span>
                      </Col>
                      <Col col='6' className='text-md-left'>
                        <div className='follow-num counter'>
                          {" "}
                          <h4>4 Immeuble Latin ,4 éme etage </h4>
                        </div>
                        <span>Bio</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Col>
            {/* The Profile Card Ends Here */}
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default UserProfile;
