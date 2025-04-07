import React from 'react';
import { Box, Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import './Dashboard.css';

const Dashboard = () => {
  const recentActivities = [
    { type: 'Quiz', subject: 'Mathematics', score: '85%', date: '2024-04-07' },
    { type: 'Video', subject: 'Physics', title: 'Newton\'s Laws', date: '2024-04-06' },
    { type: 'Assignment', subject: 'Chemistry', status: 'Pending', date: '2024-04-05' },
  ];

  const upcomingTasks = [
    { title: 'Physics Quiz', dueDate: '2024-04-08', subject: 'Physics' },
    { title: 'Chemistry Assignment', dueDate: '2024-04-09', subject: 'Chemistry' },
    { title: 'Math Practice Test', dueDate: '2024-04-10', subject: 'Mathematics' },
  ];

  return (
    <Container className="dashboard-container">
      <Box className="dashboard-header">
        <Typography variant="h4" gutterBottom>
          Welcome back, Student!
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Continue your learning journey
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Progress Overview */}
        <Grid item xs={12} md={8}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Your Progress
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box className="progress-stat">
                    <Typography variant="h3">75%</Typography>
                    <Typography variant="body2">Overall Progress</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box className="progress-stat">
                    <Typography variant="h3">12</Typography>
                    <Typography variant="body2">Completed Topics</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12} md={4}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Actions
              </Typography>
              <Box className="quick-actions">
                <Button variant="contained" color="primary" fullWidth>
                  Start New Quiz
                </Button>
                <Button variant="outlined" color="primary" fullWidth>
                  Ask a Doubt
                </Button>
                <Button variant="outlined" color="primary" fullWidth>
                  View Resources
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12} md={6}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <Box className="activity-list">
                {recentActivities.map((activity, index) => (
                  <Box key={index} className="activity-item">
                    <Typography variant="subtitle1">{activity.type}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {activity.subject} - {activity.date}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Tasks */}
        <Grid item xs={12} md={6}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Tasks
              </Typography>
              <Box className="task-list">
                {upcomingTasks.map((task, index) => (
                  <Box key={index} className="task-item">
                    <Typography variant="subtitle1">{task.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Due: {task.dueDate}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 