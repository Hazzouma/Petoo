import React, { Fragment,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardFooter, Media } from 'reactstrap'
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import moment from "moment";
const PetList = (props) => {
  const pets = useSelector(state => state.currentUser.myPets)

  useEffect(() => {
  },[pets])

  return (
    <Fragment>
      <Breadcrumb parent="Users" title="List Of Pets" />
      <Container fluid={true}>
        
        <Row>
          {pets.map((pet, i) => 
          

          <Col md="6" lg="4" xl="4" className="box-col-6" key={i}>
            <Card className="custom-card">
            <Link to={`/dashboard/petProfile/${pet.idPet}`}>
              <div className="card-profile">
                <Media body className="rounded-circle" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" fluid={true} alt="" />
              </div>
              <div className="text-center profile-details">
                <h4>{pet.name}</h4>
                <h6>{pet.race}</h6>
              </div>
              <CardFooter className="row">

                 {/* Ratings Starts Here  */}
                <Col sm="4 col-4">
                  <h6>Gender</h6>
                  <h5>
                  {pet.gender}
                    
                    </h5>
                </Col>
                {/* Ratings Ends Here  */}

                <Col sm="4 col-4">
                  <h6>Age</h6>
                  <h5><span className="counter">{moment(pet.age).fromNow(true)}</span></h5>
                </Col>
                <Col sm="4 col-4">
                  <h6>Vaccines</h6>
                  <h3><span className="counter">{[pet.vaccines].length}</span></h3>
                </Col>
              </CardFooter>
              </Link>
            </Card>
          </Col>
          
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

export default PetList;