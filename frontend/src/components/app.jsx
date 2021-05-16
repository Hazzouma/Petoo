import React, { Fragment, useEffect } from "react";
import Loader from "../layout/loader";
import Taptop from "../layout/tap-top";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";
import Footer from "../layout/footer";
import ThemeCustomize from "../layout/theme-customizer";
import { ToastContainer } from "react-toastify";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { current } from "../redux/currentUser/action";

const App = ({ children }) => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(current());
    // eslint-disable-next-line
  }, [token]);
  return (
    <Fragment>
      <Loader />
      <Taptop />
      <div className='page-wrapper compact-wrapper' id='pageWrapper'>
        <Header />
        <div className='page-body-wrapper sidebar-icon'>
          <Sidebar />
          <div className='page-body'>{children}</div>
          <Footer />
        </div>
      </div>
      <ThemeCustomize />
      <ToastContainer />
    </Fragment>
  );
};
export default withRouter(App);
