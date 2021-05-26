import React, { Fragment,useEffect, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, Media,CardBody, ListGroupItem,ListGroup, Button,Table,  Modal, ModalHeader, ModalBody, ModalFooter,  Input,FormGroup,Label,} from 'reactstrap'
import DatePicker from "react-datepicker";
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import moment from "moment"

import TimePickerFour from '../forms/form-widget/timepickerComponent/timepicker-four';


const VetCard = (props) => {
  let idVet  = useParams()
  const idOwner = useSelector(state => state.currentUser.user.idUser)
const vets = useSelector(state => state.populationReducer.vetos)
const vetinfos = vets.find( (vet, index) => {
	if(vet.idUser === idVet.Veto)
		return true;
});
const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);
const [Petselected,setPetselected] = useState('')
const [Petid,setPetid] = useState('')
const [Appoiment,setAppoiment] = useState('')
console.log(Petid ,"   " ,idVet.Veto,"      " , idOwner)
  // Date Picker States Starts Here
    const [startDate, setstartDate] = useState(new Date())
    const handleChange = date => {
      setstartDate(date);
    };
    const addDays = date => {
      setstartDate(date, 30);
    };
    console.log(moment(startDate).format("x"))
    console.log(moment("1624476600000" , "DD MM YYYY hh:mm"))
  //Date Picker States Ends Here
  const pets = useSelector(state => state.currentUser.myPets)


  const [rating, setRating] = useState(5) // Rating States


useEffect(() => {
},[pets])
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
                      <Col col="6" className="text-md-center">
                      <span>Full Adress</span>  <div className="follow-num counter"> <h4>{vetinfos.adresse}  , {vetinfos.codePostale} , Tunisia  </h4></div>
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
                          <h5> Book An Appointment For {<span className='txt-primary'> {Petselected}</span>} </h5>
                          </CardHeader>

<Row
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "2.5%",
                    }}
                  >
                    {pets.map((pet, i) =>
                    <div style={{ padding: "1%" }}
                    onClick ={ () => {(setPetselected(pet.name)); (setPetid(pet.idPet)) ;(setModal(true))}}
                    role="button"
                    >
                    <h6 className="txt-primary">{pet.name}</h6>
                      <img
                        src="https://static.wamiz.com/images/animaux/chiens/large/husky-siberien.jpg"
                        style={{
                          border: "3px solid white",
                          overflow: "hidden",
                          position: "relative",
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                        }}
                        alt="Pet Pic :)"
                      />
                      
                    </div>
                    )}
                  </Row>
                      </Card>
                      { Petselected ? (
                    <>
                      <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>Add appoiment to {<span className='txt-primary'> {Petselected}</span>} </ModalHeader>
                        <ModalBody>
                        
                        <FormGroup>
                    <Label className='form-label'>Please choose time and date of the appoiment</Label>
                    {/* Date Picker */}
                    <FormGroup className="form-row">
                          
                            <DatePicker className="form-control digits" showPopperArrow={true} defaultValut={new Date()} selected={startDate}
                            
                                  onChange={date => setstartDate(date)}
                                  minDate={new Date()}
                                  showTimeSelect
                                  dateFormat="Pp" />
                          
                        </FormGroup>
                      </FormGroup>

                      <FormGroup>
                        <Label className='form-label' for="desc">Description</Label>
                        <Input type="textarea" name="text" id="desc" placeholder='My pet acting weird lately ...' />
                      </FormGroup>


                        

                      

                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={toggle}>Close</Button>
                        <Button color="secondary" onClick={toggle}>Confirm appoiment</Button>
                        </ModalFooter>
                    </Modal> 
                    </>
                  ): ''}
                  
                
                
              </Col>
             {/* Book an Appointment Ends Here */}
            
        </Row>
          </div>
      </Container>
    </Fragment>
  );
}

export default VetCard;