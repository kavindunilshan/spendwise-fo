import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Link, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Thank you for reaching out!');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleHomeClick = () => {
        window.location.href = '/';
    };

    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: '#fdfdfd', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '700px', margin: '2rem auto' }}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="home"
                onClick={handleHomeClick}
                sx={{ position: 'absolute', top: 20, left: 50, zIndex: 10, fontSize: '2rem' }}
            >
                <HomeIcon sx={{fontSize: '40px', color: '#320440'}}/>
            </IconButton>
            <img className={'contact-logo'} src={"/logoa.png"} alt={"SpendWise Logo"} style={{width: '300px'}} />
            <Typography variant="h4" sx={{ color: '#320440', fontWeight: 'bold', marginBottom: '1rem' }}>
                Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ marginBottom: '1rem', width: '100%' }}
                    required
                />
                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ marginBottom: '1rem', width: '100%' }}
                    required
                />
                <TextField
                    variant="outlined"
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    sx={{ marginBottom: '1rem', width: '100%' }}
                    required
                />
                <Button type="submit" sx={{ backgroundColor: '#320440', color: '#fff', '&:hover': { backgroundColor: '#4a0072' }, padding: '0.75rem 1.5rem', borderRadius: '20px' }}>
                    Send Message
                </Button>
            </form>
            <Box sx={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <Typography variant="body1">
                    Email us at: <Link href="mailto:kavindunilshanliyanage@gmail.com" sx={{ color: '#320440', fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>kavindunilshanliyanage@gmail.com</Link>
                </Typography>
                <Typography variant="body1">
                    Report issues on our GitHub: <Link href="https://github.com/kavindunilshan/spendWise-fo/issues" sx={{ color: '#320440', fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>GitHub Issues</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default ContactUs;
