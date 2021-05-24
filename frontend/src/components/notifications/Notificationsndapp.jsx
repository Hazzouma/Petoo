import React, { Fragment, useState,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Table } from 'reactstrap'
import { useSelector} from 'react-redux'
import { Link, MoreHorizontal} from 'react-feather';
import moment from 'moment'


const Notifndapp = (props) => {
    const notifications = useSelector(
        (state) => state.notifReducer.allNotifArray);
  const newtaskdata = useSelector(content => content.Taskapp.newtaskdata);
  const [activeTab, setActiveTab] = useState('6');
  const { prenom,nom,email,profilePicture } = useSelector((state) => state.currentUser.user);




  useEffect(() => {
  },[])




  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Tasks" />
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <Col xl="3" className="box-col-6">
              <div className="email-left-aside">
                <Card>
                  <CardBody>
                    <div className="email-app-sidebar left-bookmark">
                      <div className="media">
                        <div className="media-size-email"><img className="mr-3 rounded-circle" src={profilePicture} widh='100px' height='100px' alt="" /></div>
                        <div className="media-body">
                          <h6 className="f-w-600">{prenom} {nom}</h6>
                          <p>{email}</p>
                        </div>
                      </div>
                      
                      <hr/>
                    
                      <Nav className="main-menu" role="tablist">
                          
                       
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                            <span className="title"> All Appoiments</span>
                          </a>
                        </NavItem>
                   
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                            <span className="title"> Confirmed appoiments</span>
                          </a>
                        </NavItem>
                        
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                            <span className="title"> UpComing appoiments</span>
                          </a>
                        </NavItem>
                        
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                            <span className="title"> Pending appoiments</span>
                          </a>
                        </NavItem>
                       
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                            <span className="title"> Canceled appoiment</span>
                          </a>
                        </NavItem>
                        <li>
                          <hr />
                        </li>
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '6' ? 'active' : ''} onClick={() => setActiveTab('6')}>
                            <span className="title"> All Notifications</span>
                          </a>
                        </NavItem>
                        
                        <li>
                          <hr />
                        </li>
                        
                      </Nav>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col xl="9" md="12" className="box-col-12">
              <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                  <div className="pl-0">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0 f-w-600" >All Appoiments</h6>
                           
                          </CardHeader>
                          
                         

                        </Card>
                        <tr><td><div className="no-favourite"><span></span></div></td></tr>
                      </TabPane>
                      <TabPane tabId="2">
                      <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0 f-w-600" >Confirmed Appoimens</h6>
                           
                          </CardHeader>
                         

                        </Card>
                      </TabPane>
                      <TabPane tabId="3">
                      <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0 f-w-600" >Upcoming Appoimens</h6>
                           
                          </CardHeader>
                         

                        </Card>
                      </TabPane>
                      <TabPane tabId="4">
                      <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0 f-w-600" >Pending Appoimens</h6>
                           
                          </CardHeader>
                         

                        </Card>
                      </TabPane>
                      <TabPane tabId="5">
                      <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0 f-w-600" >Canceled Appoimens</h6>
                           
                          </CardHeader>
                         

                        </Card>
                      </TabPane>
                      <TabPane tabId="6">
                      <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0 f-w-600" >All Notifications</h6>
                           
                          </CardHeader>
                         

                        </Card>
                      </TabPane>
                      <TabPane tabId="6">
                        <Card className="mb-0">
                         
                          <CardBody className="p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {notifications.length > 0 ?
                                      notifications.reverse().map((notif, index)=> {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              <h6 className="task_title_0">{prenom}</h6>
                                              <p className="project_name_0">{moment(parseInt(notif.creationDate,10)).fromNow()}</p>
                                            </td>
                                            <td>
                                              <p className="task_desc_0">{notif.msg}</p>
                                            </td>
                                          </tr>
                                        )
                                      })
                                      : <tr><td><div className="no-fasvourite"><span>No notification found</span></div></td></tr>
                                    }
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="1">
                        <Card className="mb-0">
                        
                          <CardBody className="p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {newtaskdata.length ?
                                      newtaskdata.map((taskdata, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              <h6 className="task_title_0">{taskdata.title}</h6>
                                              <p className="project_name_0">{taskdata.collection}</p>
                                            </td>
                                            <td>
                                              <p className="task_desc_0">{taskdata.desc}</p>
                                            </td>
                                            <td>
                                              <a className="mr-2" href="#javascript"><Link /></a>
                                              <a href="#javascript"><MoreHorizontal /></a>
                                            </td>
                                          </tr>
                                        )
                                      })
                                      : <tr><td><div className="no-favourite"><span>No Appoiments for you :(</span></div></td></tr>
                                    }
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="2">
                        <Card className="mb-0">
                        
                          <CardBody className="p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {newtaskdata.length ?
                                      newtaskdata.map((taskdata, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              <h6 className="task_title_0">{taskdata.title}</h6>
                                              <p className="project_name_0">{taskdata.collection}</p>
                                            </td>
                                            <td>
                                              <p className="task_desc_0">{taskdata.desc}</p>
                                            </td>
                                            <td>
                                              <a className="mr-2" href="#javascript"><Link /></a>
                                              <a href="#javascript"><MoreHorizontal /></a>
                                            </td>
                                          </tr>
                                        )
                                      })
                                      : <tr><td><div className="no-favourite"><span>No Confirmed Appoiments yet !! </span></div></td></tr>
                                    }
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="3">
                        <Card className="mb-0">
                        
                          <CardBody className="p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {newtaskdata.length ?
                                      newtaskdata.map((taskdata, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              <h6 className="task_title_0">{taskdata.title}</h6>
                                              <p className="project_name_0">{taskdata.collection}</p>
                                            </td>
                                            <td>
                                              <p className="task_desc_0">{taskdata.desc}</p>
                                            </td>
                                            <td>
                                              <a className="mr-2" href="#javascript"><Link /></a>
                                              <a href="#javascript"><MoreHorizontal /></a>
                                            </td>
                                          </tr>
                                        )
                                      })
                                      : <tr><td><div className="no-favourite"><span>No Upcoming Appoiments </span></div></td></tr>
                                    }
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="4">
                        <Card className="mb-0">
                        
                          <CardBody className="p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {newtaskdata.length ?
                                      newtaskdata.map((taskdata, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              <h6 className="task_title_0">{taskdata.title}</h6>
                                              <p className="project_name_0">{taskdata.collection}</p>
                                            </td>
                                            <td>
                                              <p className="task_desc_0">{taskdata.desc}</p>
                                            </td>
                                            <td>
                                              <a className="mr-2" href="#javascript"><Link /></a>
                                              <a href="#javascript"><MoreHorizontal /></a>
                                            </td>
                                          </tr>
                                        )
                                      })
                                      : <tr><td><div className="no-favourite"><span>No Pending Appoiments</span></div></td></tr>
                                    }
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="5">
                        <Card className="mb-0">
                        
                          <CardBody className="p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {newtaskdata.length ?
                                      newtaskdata.map((taskdata, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              <h6 className="task_title_0">{taskdata.title}</h6>
                                              <p className="project_name_0">{taskdata.collection}</p>
                                            </td>
                                            <td>
                                              <p className="task_desc_0">{taskdata.desc}</p>
                                            </td>
                                            <td>
                                              <a className="mr-2" href="#javascript"><Link /></a>
                                              <a href="#javascript"><MoreHorizontal /></a>
                                            </td>
                                          </tr>
                                        )
                                      })
                                      : <tr><td><div className="no-favourite"><span>No Canceled Appoiments </span></div></td></tr>
                                    }
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                    </TabContent>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default Notifndapp;