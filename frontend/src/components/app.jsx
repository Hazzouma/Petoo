import React, { Fragment, useEffect } from "react";
import Loader from "../layout/loader";
import Taptop from "../layout/tap-top";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";
import Footer from "../layout/footer";
import ThemeCustomize from "../layout/theme-customizer";
import { ToastContainer } from "react-toastify";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { current, videErrors } from "../redux/currentUser/action";

const App = ({ children, getWhichUser }) => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  const role = useSelector((state) => state.currentUser.user.role);
  const notification = useSelector((state) => state.currentUser.msg);
  useEffect(() => {
    dispatch(current());
    getWhichUser(role);
    if (notification) {
      toast.success(notification, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000, //stay 10 secondes
      });
      dispatch(videErrors());
    }
    // eslint-disable-next-line
  }, [token, role]);
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
