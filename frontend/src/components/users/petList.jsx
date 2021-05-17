import React, { Fragment,useState,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardFooter, Media } from 'reactstrap'
import axios from 'axios'

const PetList = (props) => {
  const [cards,setCards] = useState([])

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/usercard.json`).then(res => setCards(res.data))
  },[])

  return (
    <Fragment>
      <Breadcrumb parent="Users" title="List Of Vets" />
      <Container fluid={true}>
        
        <Row>
          {cards.map((cardItem, i) => 
          <Col md="6" lg="6" xl="4" className="box-col-6" key={i}>
            <Card className="custom-card">
              <CardHeader>
                <Media body className="img-fluid" src={require(`../../assets/images/${cardItem.card_bg}`)} alt="" />
              </CardHeader>
              <div className="card-profile">
                <Media body className="rounded-circle" src="https://i.pinimg.com/originals/97/2f/1b/972f1b8aca65479e3c401b800a4bd76a.jpg" alt="" />
              </div>
              <div className="text-center profile-details">
                <h4>{cardItem.name}</h4>
                <h6>{cardItem.post}/Cat</h6>
              </div>
              <CardFooter className="row">

                 {/* Ratings Starts Here  */}
                <Col sm="4 col-4">
                  <h6>Gender</h6>
                  <h5>
                    Male
                    
                    </h5>
                </Col>
                {/* Ratings Ends Here  */}

                <Col sm="4 col-4">
                  <h6>Age</h6>
                  <h5><span className="counter">{cardItem.following}</span></h5>
                </Col>
                <Col sm="4 col-4">
                  <h6>Owner </h6>
                  <h3><span className="counter">Flen</span></h3>
                </Col>
              </CardFooter>
            </Card>
          </Col>
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

export default PetList;