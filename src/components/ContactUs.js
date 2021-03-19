import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CssBaseline from '@material-ui/core/CssBaseline';
import messageSend from '../services/contact-us.service';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be a minimum 8 characters length')
        .required('Password is required'),
});

const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleSubmit = () => {
        console.log('submitted!');
        messageSend();
    };

    return (
        <Container maxWidth='sm'>
            <CssBaseline />
            <div>
                <h1>Contact Us!</h1>    
                <form onSubmit={formik.handleSubmit} className='form'>
            <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='name'
                        label='Name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}>
                        </TextField>
            
            <TextField
                        variant='outlined'
                        margin='normal'
                        required
                        fullWidth
                        id='email'
                        label='Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
            />

            <TextareaAutosize
                rowsMin={10}
                placeholder='Enter message'
                id='message'
                label='Message'
            />
        </form>
                
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    onClick={handleSubmit}
                >Submit
                </Button>
        </div>
            </Container>
    )
};

export default ContactUs;
