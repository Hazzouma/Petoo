import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Media,
} from "reactstrap";
import {useSelector} from 'react-redux';
const UserProfile = (props) => {

  useEffect(() => {

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
 
  const { prenom,profilePicture, role,nom,email,dateNaissance,adresse,ville,codePostale,phoneNumber,bio } = useSelector((state) => state.currentUser.user);
  const DOB=new Date(parseInt(dateNaissance,10)).toDateString()
  console.log(DOB)
 
  return (
    <Fragment>
      <Breadcrumb parent='Users' title='My Profile' />
      <Container fluid={true}>
        <div className='user-profile'>
          <Row className="justify-content-md-center">
            {/* The Profile Card Starts Here */}
            <Col sm={8}>
              <Card className='card hovercard text-center'>
                <CardHeader className='cardheader'></CardHeader>
                <div className='user-image'>
                  <div className='avatar'>
                    <Media
                      body
                      alt=''
                      src={profilePicture}
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
                            <span>{email}</span>
                          </div>
                        </Col>
                        
                        <Col md='5'>
                          <div className='ttl-info text-left ttl-sm-mb-0'>
                            <h6>
                              <i className='fa fa-calendar'></i> DOB
                            </h6>
                            <span>{DOB}</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm='12' lg='4' className='order-sm-0 order-xl-1'>
                      <div className='user-designation'>
                        <div className='title'>
                          <a target='_blank' href='#javascript'>
                           {prenom} {''} {nom}
                            
                          </a>
                        </div>
                        <div className='desc mt-2'>{role} </div>
                      </div>
                    </Col>

                    <Col sm='12' lg='4' className='order-sm-2 order-xl-2'>
                      <Row>
                        <Col md='6'>
                          <div className='ttl-info text-left ttl-xs-mt'>
                            <h6>
                              <i className='fa fa-phone'></i>Phone
                            </h6>
                            <span> {phoneNumber}</span>
                          </div>
                        </Col>
                        <Col md='6'>
                          <div className='ttl-info text-left ttl-sm-mb-0'>
                            <h6>
                              <i className='fa fa-location-arrow'></i>
                                 Location
                            </h6>
                            <span>{ville} {codePostale} </span>
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
                            {bio}{" "}
                          </h4>
                        </div>
                        <span>Bio</span>
                      </Col>
                      <Col col='6' className='text-md-left'>
                        <div className='follow-num counter'>
                          {" "}
                          <h4>{adresse} </h4>
                        </div>
                        <span>Adresse</span>
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