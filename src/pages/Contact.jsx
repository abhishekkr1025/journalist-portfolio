import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Container
} from '@mui/material';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <Box sx={{
      minHeight: 'calc(100vh - 100px)',
      backgroundColor: '#fdfaf5',
      py: 6
    }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: "Baskervville, serif",
              fontWeight: 400,
              color: '#2c2c2c',
              mb: 4,
            }}
          >
            Contact Me
          </Typography>

          {/* Contact Info Text */}
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              lineHeight: 1.6,
              mb: 2,
              textAlign: { xs: 'left', sm: 'left', md: 'center', lg: 'left' },
              maxWidth: { xs: '100%', sm: '500px', md: '600px', lg: '700px' },
              mx: { xs: 0, sm: 'auto', md: 'auto', lg: '390px' },
              px: { xs: 2, sm: 1, md: 0, lg: 0 },
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1rem', lg: '0.9rem' }
            }}
          >
            If you have a story tip the simplest and safest way to send it to
            Rhi is to use an encrypted app. WhatsApp or Signal is best on
            +447949897327.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#555',
              lineHeight: 1.6,
              mb: 2,
              textAlign: { xs: 'left', sm: 'left', md: 'center', lg: 'left' },
              maxWidth: { xs: '100%', sm: '500px', md: '600px', lg: '700px' },
              mx: { xs: 0, sm: 'auto', md: 'auto', lg: '390px' },
              px: { xs: 2, sm: 1, md: 0, lg: 0 },
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1rem', lg: '0.9rem' }
            }}
          >
            You can reach Rhi directly on rhistorerwrites@gmail.com
          </Typography>
        </Box>

        {/* Form */}
        <Box sx={{ maxWidth: {lg:'40%',sm:'60%'}, mx: 'auto' }}>
          <Box component="form" onSubmit={handleSubmit}>
            {/* Name Field */}
            <Box mb={3}>
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  mb: 1,
                  fontWeight: 400
                }}
              >
                Name*
              </Typography>
              <TextField
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& fieldset': {
                      borderColor: '#ddd',
                    },
                    '&:hover fieldset': {
                      borderColor: '#bbb',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#888',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px 14px',
                  }
                }}
              />
            </Box>

            {/* Email Field */}
            <Box mb={3}>
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  mb: 1,
                  fontWeight: 400
                }}
              >
                Email*
              </Typography>
              <TextField
                fullWidth
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& fieldset': {
                      borderColor: '#ddd',
                    },
                    '&:hover fieldset': {
                      borderColor: '#bbb',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#888',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px 14px',
                  }
                }}
              />
            </Box>

            {/* Message Field */}
            <Box mb={4}>
              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  mb: 1,
                  fontWeight: 400
                }}
              >
                Message*
              </Typography>
              <TextField
                fullWidth
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={6}
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: 1,
                    '& fieldset': {
                      borderColor: '#ddd',
                    },
                    '&:hover fieldset': {
                      borderColor: '#bbb',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#888',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    padding: '12px 14px',
                  }
                }}
              />
            </Box>

            {/* Privacy Notice */}
            <Typography
              variant="body2"
              sx={{
                color: '#777',
                mb: 3,
                fontSize: '0.9rem',
                lineHeight: 1.5
              }}
            >
              This site is protected by reCAPTCHA and the Google{' '}
              <Link
                href="#"
                sx={{
                  color: '#777',
                  textDecoration: 'underline',
                  '&:hover': { color: '#555' }
                }}
              >
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link
                href="#"
                sx={{
                  color: '#777',
                  textDecoration: 'underline',
                  '&:hover': { color: '#555' }
                }}
              >
                Terms of Service
              </Link>{' '}
              apply.
            </Typography>

            {/* Send Button */}
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#e8e8e8',
                color: '#333',
                px: 3,
                py: 1.2,
                borderRadius: 1,
                fontSize: '1rem',
                fontWeight: 400,
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#ddd',
                  boxShadow: 'none'
                }
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}