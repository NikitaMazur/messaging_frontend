import React, { Component } from 'react';
import { withFormik } from 'formik';
import { Button } from 'antd';
import styled from 'styled-components';

import { FormTitle, FormWrapper, StyledForm, StyledInput, StyledInputBlock } from './FormStyles';

const InviteForm = styled.form`
    width: 100%;
`;

const InviteButton = styled(Button)`
    margin-top: 30px;
    width: 150px;
`;

const InnerForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <InviteForm onSubmit={handleSubmit}>
        <StyledInputBlock>
            <StyledInput
                usage="true"
                type="text"
                name="supplier"
                placeholder="Supplier name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.supplier}
            />
            {touched.supplier && errors.supplier && <div>{errors.supplier}</div>}
        </StyledInputBlock>
        <StyledInputBlock>
            <StyledInput
                usage="true"
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
            />
            {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
        </StyledInputBlock>
        <StyledInputBlock>
            <StyledInput
                usage="true"
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
            />
            {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
        </StyledInputBlock>
        <StyledInputBlock>
            <StyledInput
                usage="true"
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
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
            />
            {touched.phone && errors.phone && <div>{errors.phone}</div>}
        </StyledInputBlock>
        <InviteButton type="primary" disabled={isSubmitting}>
            Invite
        </InviteButton>
    </InviteForm>
  );

  const InviteSupplier = withFormik({
    mapPropsToValues: props => ({ firstName: '', lastName: '', email: '', password: '', supplier: '' }),
    validate: (values, props) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (
        /\d/.test(values.firstName)
      ) {
        errors.firstName = 'The firstname can not contain digits';
      }
      if (!values.lastName) {
        errors.lastName = 'Required';
      } else if (
        /\d/.test(values.lastName)
      ) {
        errors.lastName = 'The lastname can not contain digits';
      }
      if (!values.supplier) {
        errors.supplier = 'Required';
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

export default () => {
    return (
        <div>
            <h1>Invite Supplier</h1>
            <InviteSupplier />
        </div>
    );
}
