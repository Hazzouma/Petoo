import React, { Fragment,useState,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardFooter, Media } from 'reactstrap'
import axios from 'axios'
import Rating from 'react-rating'

const VetoList = (props) => {
  const [rating, setRating] = useState(5)
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
                <Media body className="rounded-circle" src={require(`../../assets/images/user/3.png`)} alt="" />
              </div>
              <div className="text-center profile-details">
                <h4>{cardItem.name}</h4>
                <h6>{cardItem.post}/Location</h6>
              </div>
              <CardFooter className="row">

                 {/* Ratings Starts Here  */}
                <Col sm="4 col-4">
                  <h6>Ratings</h6>
                  <h6>
                    <Rating  className="rating"
                      initialRating={rating}
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                      onChange={(rate) => setRating(rate)}
                    >
                    </Rating>
                    </h6>
                </Col>
                {/* Ratings Ends Here  */}

                <Col sm="4 col-4">
                  <h6>Phone Number</h6>
                  <h5><span className="counter">{cardItem.following}******</span></h5>
                </Col>
                <Col sm="4 col-4">
                  <h6>Working Hours </h6>
                  <h3><span className="counter">{cardItem.totalPost}-18h</span></h3>
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

export default VetoList;