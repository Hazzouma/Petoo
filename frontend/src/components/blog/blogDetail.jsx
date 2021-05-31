import React, { Fragment, useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import blog from "../../assets/images/blog/blog.jpg";
import blog2 from "../../assets/images/blog/blog-2.jpg";
// import blog3 from "../../assets/images/blog/blog-3.jpg";
// import blog5 from "../../assets/images/blog/blog-5.jpg";
// import blog6 from "../../assets/images/blog/blog-6.jpg";
import { Container, Row, Col, Card, Media } from "reactstrap"
import {MarkJecno} from "../../constant";
import { getBlogs} from "../../redux/population/action";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";


const BlogDetail = () => {

    const dispatch = useDispatch();
  const blogs = useSelector((state) => state.populationReducer.blogs);
 console.log(blogs)
  useEffect(() => {
    dispatch(getBlogs());
    // eslint-disable-next-line
  }, []);
    return (
        <Fragment>
            <Breadcrumb parent="Blog" title="Blogs" />
            <Container fluid={true}>
                <Row>
                    {/* Big Pic Blog */}
                    {/* <Col xl="6 box-col-12 xl-100" >
                        <Card>
                            <div className="blog-box blog-shadow">
                                <Media className="img-fluid" src={blog} alt="" />
                                <div className="blog-details">
                                    <p className="digits">{"25 July 2019"}</p>
                                    <h4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</h4>
                                    <ul className="blog-social">
                                        <li><i className="icofont icofont-user"></i>{MarkJecno}</li>
                                        <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                        <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </Col> */}
                    
                    {/* Small horizontal Blog */}
                    {blogs.map((info, i) => (
                    <Col xl="6 box-col-12 xl-100" key={i}>
                        <Card>
                            <div className="blog-box blog-list row">
                                <Col sm="5">
                                    <Media className="img-fluid sm-100-w" src={info.blogPicture} alt="" />
                                </Col>
                                <Col sm="7">
                                    <div className="blog-details">
                                        <div className="blog-date digits"> {moment(
                                                    parseInt(
                                                      info.creationDate,
                                                      10
                                                    )
                                                  ).fromNow()}</div>
                                        <h5>{info.title} </h5>
                                        <div className="blog-bottom-content">
                                            <ul className="blog-social">
                                                <li> by: {info.author}</li>
                                            </ul>
                                            <hr />
                                            <p className="mt-0">{info.preview}</p>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    );
};

export default BlogDetail;