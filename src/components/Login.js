import React, { Component } from 'react';
import { withFormik } from 'formik';
import { Button } from 'antd';

import { FormTitle, FormWrapper, StyledForm, StyledInput, StyledInputBlock } from './FormStyles';

const InnerForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <StyledForm onSubmit={handleSubmit}>
        <StyledInputBlock>
            <StyledInput
                usage
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
        </StyledInputBlock>
        <StyledInputBlock>
            <StyledInput
                usage
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            {touched.password && errors.password && <div>{errors.password}</div>}
        </StyledInputBlock>
        <Button type="primary" disabled={isSubmitting}>
            Submit
        </Button>
    </StyledForm>
  );

  const LoginForm = withFormik({
    mapPropsToValues: props => ({ email: '', password: '' }),
    validate: (values, props) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    handleSubmit: (
      values,
      {
        props,
        setSubmitting,
        setErrors,
      }
    ) => {
      
    },
  })(InnerForm);

export default class Login extends Component {
    render() {
        return (
            <FormWrapper>
                <FormTitle>Log In</FormTitle>
                <LoginForm />
            </FormWrapper>
        );
    }
}
