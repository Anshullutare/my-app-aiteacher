import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider, TextField, Button, InputAdornment } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import { Link as RouterLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
    // Show success message or handle error
  };

  return (
    <Box className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box className="footer-logo-container">
              <SchoolIcon className="footer-logo" />
              <Typography variant="h6" className="footer-logo-text">
                AI Teacher
              </Typography>
            </Box>
            <Typography variant="body2" className="footer-description">
              An intelligent AI-powered virtual teacher that provides personalized learning experiences tailored to each student's pace, strengths, and weaknesses.
            </Typography>
            <Box className="social-icons">
              <IconButton aria-label="Facebook" className="social-icon facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" className="social-icon twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Instagram" className="social-icon instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" className="social-icon linkedin">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-heading">
              Quick Links
            </Typography>
            <Box className="footer-links">
              <Link component={RouterLink} to="/" className="footer-link">Home</Link>
              <Link component={RouterLink} to="/about" className="footer-link">About Us</Link>
              <Link component={RouterLink} to="/subjects" className="footer-link">Subjects</Link>
              <Link component={RouterLink} to="/resources" className="footer-link">Resources</Link>
              <Link component={RouterLink} to="/contact" className="footer-link">Contact</Link>
            </Box>
          </Grid>

          {/* Subjects */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-heading">
              Subjects
            </Typography>
            <Box className="footer-links">
              <Link component={RouterLink} to="/subjects/mathematics" className="footer-link">Mathematics</Link>
              <Link component={RouterLink} to="/subjects/physics" className="footer-link">Physics</Link>
              <Link component={RouterLink} to="/subjects/chemistry" className="footer-link">Chemistry</Link>
              <Link component={RouterLink} to="/subjects/biology" className="footer-link">Biology</Link>
              <Link component={RouterLink} to="/subjects/computer-science" className="footer-link">Computer Science</Link>
            </Box>
          </Grid>

          {/* Support */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-heading">
              Support
            </Typography>
            <Box className="footer-links">
              <Link component={RouterLink} to="/faq" className="footer-link">FAQ</Link>
              <Link component={RouterLink} to="/help" className="footer-link">Help Center</Link>
              <Link component={RouterLink} to="/ask-doubt" className="footer-link">Ask a Doubt</Link>
              <Link component={RouterLink} to="/feedback" className="footer-link">Feedback</Link>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="footer-heading">
              Newsletter
            </Typography>
            <Typography variant="body2" className="newsletter-description">
              Subscribe to our newsletter for the latest updates and learning tips.
            </Typography>
            <Box component="form" onSubmit={handleSubscribe} className="newsletter-form">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                className="subscribe-button"
                endIcon={<SendIcon />}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider className="footer-divider" />

        <Box className="footer-bottom">
          <Typography variant="body2" className="copyright">
            © {currentYear} AI Teacher. All rights reserved.
          </Typography>
          <Box className="legal-links">
            <Link component={RouterLink} to="/privacy" className="legal-link">Privacy Policy</Link>
            <Link component={RouterLink} to="/terms" className="legal-link">Terms of Service</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 