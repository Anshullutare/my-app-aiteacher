import React, { useState } from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, CardActions, Chip, Avatar, Paper } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const subjects = [
    { 
      title: 'Mathematics', 
      progress: 75, 
      icon: <SchoolIcon fontSize="large" />,
      description: 'Master calculus, algebra, and geometry with personalized lessons',
      lessons: 24,
      quizzes: 12
    },
    { 
      title: 'Physics', 
      progress: 60, 
      icon: <ScienceIcon fontSize="large" />,
      description: 'Understand the laws of nature through interactive simulations',
      lessons: 18,
      quizzes: 9
    },
    { 
      title: 'Chemistry', 
      progress: 45, 
      icon: <ScienceIcon fontSize="large" />,
      description: 'Explore chemical reactions and molecular structures',
      lessons: 15,
      quizzes: 8
    },
    { 
      title: 'Computer Science', 
      progress: 30, 
      icon: <CodeIcon fontSize="large" />,
      description: 'Learn programming, algorithms, and data structures',
      lessons: 20,
      quizzes: 10
    },
    { 
      title: 'Biology', 
      progress: 25, 
      icon: <ScienceIcon fontSize="large" />,
      description: 'Discover life sciences with detailed visualizations',
      lessons: 16,
      quizzes: 7
    },
    { 
      title: 'Psychology', 
      progress: 10, 
      icon: <PsychologyIcon fontSize="large" />,
      description: 'Understand human behavior and cognitive processes',
      lessons: 12,
      quizzes: 6
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "High School Student",
      avatar: "/images/avatar1.jpg",
      text: "The AI teacher adapts to my learning style and helps me understand complex topics easily."
    },
    {
      name: "Michael Chen",
      role: "College Student",
      avatar: "/images/avatar2.jpg",
      text: "I've improved my grades significantly since using this platform. The personalized approach is amazing!"
    },
    {
      name: "Emily Rodriguez",
      role: "Parent",
      avatar: "/images/avatar3.jpg",
      text: "My daughter loves learning with this platform. The AI teacher is patient and explains things clearly."
    }
  ];

  const benefits = [
    {
      title: "Personalized Learning",
      description: "AI adapts to your pace, strengths, and weaknesses"
    },
    {
      title: "Interactive Content",
      description: "Engage with dynamic examples and real-time feedback"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvement with data-driven insights"
    }
  ];

  const features = [
    {
      title: "Adaptive Learning",
      description: "Our AI analyzes your performance and adjusts content difficulty in real-time",
      icon: <AutoAwesomeIcon fontSize="large" />,
      color: "#1976d2"
    },
    {
      title: "Cognitive Analysis",
      description: "Understand your learning patterns and receive tailored study recommendations",
      icon: <PsychologyAltIcon fontSize="large" />,
      color: "#f50057"
    },
    {
      title: "Performance Analytics",
      description: "Track your progress with detailed insights and improvement suggestions",
      icon: <TimelineIcon fontSize="large" />,
      color: "#2e7d32"
    },
    {
      title: "AI-Powered Tutoring",
      description: "Get instant answers to your questions with our intelligent tutoring system",
      icon: <SmartToyIcon fontSize="large" />,
      color: "#ed6c02"
    }
  ];

  return (
    <Box className="home-container">
      {/* Hero Section with Slideshow */}
      <Box className="hero-section">
        <Slider {...sliderSettings}>
          <div className="slide">
            <img src="/images/slide1.jpg" alt="Education" />
            <div className="slide-content">
              <Typography variant="h2">Your AI-Powered Learning Journey</Typography>
              <Typography variant="h5">Personalized education tailored to your pace and style</Typography>
              <Button variant="contained" color="primary" size="large" className="cta-button">
                Start Your Journey
              </Button>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide2.jpg" alt="Learning" />
            <div className="slide-content">
              <Typography variant="h2">Learn Anytime, Anywhere</Typography>
              <Typography variant="h5">Access quality education on any device, at your convenience</Typography>
              <Button variant="contained" color="primary" size="large" className="cta-button">
                Explore Subjects
              </Button>
            </div>
          </div>
          <div className="slide">
            <img src="/images/slide3.jpg" alt="Success" />
            <div className="slide-content">
              <Typography variant="h2">Track Your Progress</Typography>
              <Typography variant="h5">Data-driven insights to help you improve and succeed</Typography>
              <Button variant="contained" color="primary" size="large" className="cta-button">
                Get Started
              </Button>
            </div>
          </div>
        </Slider>
      </Box>

      {/* Features Section */}
      <Box className="features-section">
        <Container>
          <Typography variant="h4" align="center" gutterBottom className="section-title">
            How Our AI Teacher Works
          </Typography>
          <Typography variant="subtitle1" align="center" className="section-subtitle">
            Experience the future of education with our intelligent learning platform
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={0} className="feature-paper">
                  <Box className="feature-icon" style={{ backgroundColor: `${feature.color}15` }}>
                    <Box className="feature-icon-inner" style={{ color: feature.color }}>
                      {feature.icon}
                    </Box>
                  </Box>
                  <Typography variant="h6" className="feature-title">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" className="feature-description">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Demo Video Section */}
      <Container className="video-section">
        <Typography variant="h4" align="center" gutterBottom className="section-title">
          Watch How Our AI Teacher Works
        </Typography>
        <Typography variant="subtitle1" align="center" className="section-subtitle">
          See how our platform helps students succeed with personalized learning
        </Typography>
        <Box className="video-container">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/your-video-id"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        
        {/* Benefits Section */}
        <Grid container spacing={4} className="benefits-section">
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className="benefit-card">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box className="testimonials-section">
        <Container>
          <Typography variant="h4" align="center" gutterBottom className="section-title">
            What Our Students Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="testimonial-card">
                  <CardContent>
                    <Box className="testimonial-header">
                      <Avatar src={testimonial.avatar} className="testimonial-avatar" />
                      <Box>
                        <Typography variant="subtitle1">{testimonial.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{testimonial.role}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" className="testimonial-text">
                      "{testimonial.text}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Subject Journey Section */}
      <Container className="subjects-section">
        <Typography variant="h4" align="center" gutterBottom className="section-title">
          Your Learning Journey
        </Typography>
        <Typography variant="subtitle1" align="center" className="section-subtitle">
          Choose your subjects and start learning with our AI teacher
        </Typography>
        <Grid container spacing={4}>
          {subjects.map((subject, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="subject-card">
                <CardContent>
                  <Box className="subject-header">
                    <Box className="subject-icon">
                      {subject.icon}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      {subject.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary" className="subject-description">
                    {subject.description}
                  </Typography>
                  <Box className="subject-stats">
                    <Chip label={`${subject.lessons} Lessons`} size="small" />
                    <Chip label={`${subject.quizzes} Quizzes`} size="small" />
                  </Box>
                  <Box className="progress-bar">
                    <Box
                      className="progress"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </Box>
                  <Typography variant="body2" color="textSecondary" className="progress-text">
                    {subject.progress}% Complete
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    startIcon={<PlayArrowIcon />}
                    fullWidth
                  >
                    {subject.progress > 0 ? "Continue Learning" : "Start Learning"}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box className="cta-section">
        <Container>
          <Paper elevation={0} className="cta-paper">
            <Typography variant="h4" align="center" gutterBottom className="cta-title">
              Ready to Transform Your Learning Experience?
            </Typography>
            <Typography variant="subtitle1" align="center" className="cta-subtitle">
              Join thousands of students who are already benefiting from our AI-powered platform
            </Typography>
            <Box className="cta-buttons">
              <Button 
                variant="contained" 
                color="primary" 
                size="large" 
                className="cta-primary-button"
              >
                Get Started Now
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                size="large" 
                className="cta-secondary-button"
              >
                Learn More
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 