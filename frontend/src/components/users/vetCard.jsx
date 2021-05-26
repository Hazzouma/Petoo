import React, { Fragment,useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, Media , FormGroup} from 'reactstrap'
import DatePicker from "react-datepicker";
import {useSelector} from "react-redux";
import {useParams,} from "react-router"

import TimePickerFour from '../forms/form-widget/timepickerComponent/timepicker-four';


const VetCard = (props) => {
  let idVet  = useParams()
const vets = useSelector(state => state.populationReducer.vetos)
// eslint-disable-next-line
const vetinfos = vets.find( (vet, index) => {
	if(vet.idUser === idVet.Veto)
  // eslint-disable-next-line
		return true;
});
  // Date Picker States Starts Here
    const [startDate, setstartDate] = useState(new Date())

    const handleChange = date => {
    setstartDate(date);
    };
  //Date Picker States Ends Here
  



useEffect(() => {
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
      <Breadcrumb parent="Users" title="Vet Profile" />
      <Container fluid={true}>
        <div className="user-profile">
          <Row>

            {/* The Profile Card Starts Here */}
            <Col sm="12">
              <Card className="card hovercard text-center">
                <CardHeader className="cardheader"></CardHeader>
                <div className="user-image">
                  <div className="avatar"><Media body alt="" src={vetinfos.profilePicture} data-intro="This is Profile image" /></div>
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
                            <h6><i className="fa fa-envelope mr-2"></i> Email</h6><span>{vetinfos.email}</span>
                          </div>
                        </Col>
                        <Col md="5">
                          <div className="ttl-info text-left ttl-sm-mb-0">
                            <h6><i className="fa fa-calendar"></i>  Working Hours</h6><span>9Am - 4Pm</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm="12" lg="4" className="order-sm-0 order-xl-1">
                      <div className="user-designation">
                        <div className="title"><a target="_blank" href="#javascript">{vetinfos.prenom} {vetinfos.nom}</a></div>
                        <div className="desc mt-2">{vetinfos.role} </div>
                      </div>
                    </Col>

                    <Col sm="12" lg="4" className="order-sm-2 order-xl-2">
                      <Row>
                        <Col md="6">
                          <div className="ttl-info text-left ttl-xs-mt">
                            <h6><i className="fa fa-phone"></i>  Phone</h6><span>{vetinfos.phoneNumber}</span>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="ttl-info text-left ttl-sm-mb-0">
                            <h6><i className="fa fa-location-arrow"></i>   Location</h6><span>{vetinfos.ville}</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr />
                  <div className="follow">
                    <Row>
                      <Col col="6" className="text-md-left">
                        <div className="follow-num counter"> <h4>{vetinfos.adresse}  , {vetinfos.codePostale} , Tunisia  </h4></div><span>Full Adress</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
              </Col>
            {/* The Profile Card Ends Here */}

             {/* Book an Appointment Starts Here */}
              <Col sm="12" >
              
                
                      <Card>
                          <CardHeader> 
                          <h5> Book An Appointment</h5>
                          </CardHeader>
                          <FormGroup className="form-row mb-0">
                          <label className="col-sm-3 col-form-label text-right">Choose a day </label>
                          <div className="col-sm-3">
                            <div className="datepicker-here" data-language="en">
                              <DatePicker className="form-control digits"
                                selected={startDate}
                                onChange={handleChange}
                                inline
                              />
                            </div>
                          </div>
                        </FormGroup>
                      </Card>
                
                
                <div> Choose Time 6<TimePickerFour/></div>
                  
                
                
              </Col>
             {/* Book an Appointment Ends Here */}
            
        </Row>
          </div>
      </Container>
    </Fragment>
  );
}

export default VetCard;