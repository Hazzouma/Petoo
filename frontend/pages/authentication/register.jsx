import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import {
  Password,
  SignIn,
  EmailAddress,
  CreateAccount,
  YourName,
  PrivacyPolicy,
} from "../../constant";
import { toast } from "react-toastify";
import { Facebook } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { register, videErrors } from "../../redux/authentification/action";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const [togglePassword, setTogglePassword] = useState(false);
  // const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   setPassword(e.target.value);
  // };
  const [userRegister, setUserRegister] = useState({});
  const getUserRegister = (e) =>
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword);
  };

  const registerUser = () => {
    dispatch(register(userRegister, history));
  };
  //managing errors if exist
  const arrErrors = useSelector((state) => state.userReducer.errors);
  //sucess register
  const successRegister = useSelector((state) => state.userReducer.msg);

  useEffect(() => {
    if (arrErrors.length > 0) {
      arrErrors.forEach((el) => {
        toast.error(el.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      });
    } else if (successRegister) {
      toast.success(successRegister, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      dispatch(videErrors());
    }
    // eslint-disable-next-line
  }, [arrErrors, successRegister]);

  return (
    <Container fluid={true} className='p-0'>
      <Row>
        <Col xs='12'>
          <div className='login-card'>
            <div>
              <div>
                <a className='logo' href='#javascript'>
                  <img
                    className='img-fluid for-light'
                    src={require("../../assets/images/logo/login.png")}
                    alt='looginpage'
                  />
                  <img
                    className='img-fluid for-dark'
                    src={require("../../assets/images/logo/logo_dark.png")}
                    alt='looginpage'
                  />
                </a>
              </div>
              <div className='login-main'>
                <Form className='theme-form'>
                  <h4>{"Create your account"}</h4>
                  <p>{"Enter your personal details to create account"}</p>
                  <FormGroup>
                    <Label className='col-form-label pt-0'>{YourName}</Label>
                    <div className='form-row'>
                      <Col xs='6'>
                        <Input
                          className='form-control'
                          type='text'
                          required=''
                          placeholder='First name'
                          name='prenom'
                          onChange={getUserRegister}
                        />
                      </Col>
                      <Col xs='6'>
                        <Input
                          className='form-control'
                          type='text'
                          required=''
                          placeholder='Last name'
                          name='nom'
                          onChange={getUserRegister}
                        />
                      </Col>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>{EmailAddress}</Label>
                    <Input
                      className='form-control'
                      type='email'
                      required=''
                      placeholder='Test@gmail.com'
                      name='email'
                      onChange={getUserRegister}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>{Password}</Label>
                    <Input
                      className='form-control'
                      type={togglePassword ? "text" : "password"}
                      name='password'
                      onChange={getUserRegister}
                      required=''
                      placeholder='*********'
                    />
                    <div
                      className='show-hide'
                      onClick={() => HideShowPassword(togglePassword)}
                    >
                      <span className={togglePassword ? "" : "show"}></span>
                    </div>
                  </FormGroup>
                  <div className='form-group mb-0'>
                    <div className='checkbox ml-3'>
                      <Input id='checkbox1' type='checkbox' required='' />
                      <Label className='text-muted' for='checkbox1'>
                        {"Agree with"}
                        <a className='ml-2' href='#javascript'>
                          {PrivacyPolicy}
                        </a>
                      </Label>
                    </div>
                    <Button
                      color='primary'
                      className='btn-block'
                      // type='submit'
                      onClick={() => registerUser()}
                    >
                      {CreateAccount}
                    </Button>
                  </div>
                  <h6 className='text-muted mt-4 or'>{"Or signup with"}</h6>
                  <div className='social mt-4'>
                    <div className='btn-showcase'>
                      <Button color='light'>
                        <Facebook className='txt-fb' />
                      </Button>
                      <Button color='light'>
                        <i className='icon-social-google txt-googleplus'></i>
                      </Button>
                    </div>
                  </div>
                  <p className='mt-4 mb-0'>
                    {"Already have an account?"}
                    <Link className='ml-2' to='/cuba/login'>
                      {SignIn}
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
