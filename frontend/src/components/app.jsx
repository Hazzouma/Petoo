import React, { Fragment, useEffect, useState } from "react";
import Loader from "../layout/loader";
import Taptop from "../layout/tap-top";
import Header from "../layout/header";
import Sidebar from "../layout/sidebar";
import Footer from "../layout/footer";
import { ToastContainer } from "react-toastify";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  current,
  videErrors,
  getMyPets,
  getMyAppointments,
} from "../redux/currentUser/action";
import { getALLNotif } from "../redux/notification/action";
import { getVets } from "../redux/population/action";

const App = ({ children, getWhichUser }) => {
  const dispatch = useDispatch();
  // const msg = useSelector((s) => s.currentUser.msg);
  let token = localStorage.getItem("token");
  const role = useSelector((state) => state.currentUser.user.role);
  const idUser = useSelector((state) => state.currentUser.user.idUser);
  const notification = useSelector((state) => state.currentUser.msg);
  useEffect(() => {
    dispatch(current());
    getWhichUser(role);
    dispatch(getVets()); //get all Vets
    dispatch(getMyAppointments(idUser)); //get my appointments
    dispatch(getALLNotif(idUser)); // get my notifications
    dispatch(getMyPets(idUser)); //get my pets
    if (notification) {
      toast.success(notification, {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 5000, //stay 10 secondes
      });
      dispatch(videErrors());
    }
    // eslint-disable-next-line
  }, [token, role, idUser]);
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

      <ToastContainer />
    </Fragment>
  );
};
export default withRouter(App);
