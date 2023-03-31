import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  handleInputChange = evt => {
    const target = evt.currentTarget;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onSummit(values);
    resetForm();
  };

  initialValues = { name: '', number: '' };

  userSchema = object({
    name: string().required(),
    number: number().required().positive().integer(),
  });

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={this.userSchema}
      >
        <Form className={css.form}>
          <label>
            Name <br />
            <Field className={css.label} name="name" />
            <ErrorMessage className={css.error} component="div" name="name" />
          </label>
          <label>
            <br />
            Number <br />
            <Field className={css.label} name="number" />
            <ErrorMessage className={css.error} component="div" name="number" />
          </label>
          <br />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSummit: PropTypes.func.isRequired,
};