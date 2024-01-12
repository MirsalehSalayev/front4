import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function AddPage() {
    async function addDataFormik(item) {
        fetch("http://localhost:3100/services/",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(item)
      })
      }
    return (
        <>
            <Helmet>
                <title>AddPage</title>
            </Helmet>
            <Formik
       initialValues={{ icon: '', name: '', title: '' }}
       validationSchema={Yup.object({
         icon: Yup.string()
           .required('Required'),
         name: Yup.string()
           .max(25, 'Must be 20 characters or less')
           .required('Required'),
         title: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
            addDataFormik(values)
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="icon">icon</label>
         <Field name="icon" type="text" />
         <ErrorMessage name="icon" />
 
         <label htmlFor="name">Last Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="title">Email Address</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>
        </>
    )
}

export default AddPage