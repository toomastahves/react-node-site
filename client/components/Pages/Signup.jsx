import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ContentLayout from '../Layouts/Content';
import { signup } from '../../actions/signup';
import '../styles/auth.css';

export const Signup = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.querySelector('[name="username"]').value;
    const password = e.target.querySelector('[name="password"]').value;
    props.dispatch(signup({ username, password }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex-form-container pure-form'>
        <div className='flex-form-item'>
          {props.error}
        </div>
        <div className='flex-form-item'>
          <input name='username' type='text' placeholder='Username' />
        </div>
        <div className='flex-form-item'>
          <input name='password' type='text' placeholder='Password' /></div>
        <div className='flex-form-item'>
          <button className='pure-button' type='submit'>{'Sign up'}</button>
        </div>
      </form>
    </div>
  );
};

Signup.propTypes = {
  error: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    error: state.authReducer.error
  };
};

export default connect(mapStateToProps)(ContentLayout(Signup));