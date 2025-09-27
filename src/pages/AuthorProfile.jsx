import React from "react";
import { 
  Box, 
  Typography, 
  IconButton, 
  Divider, 
  Container,
  Grid,
  Card,
  CardContent,
  Chip
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

export default function DetailedAbout() {
  const experiences = [
    {
      role: "Freelance Journalist",
      period: "Current",
      description: "Specializing in investigations, news, B2B publications, and data journalism"
    },
    {
      role: "Senior Reporter",
      company: "Schools Week",
      period: "Previous",
      description: "Covering education policy, investigations, and breaking news in the education sector"
    },
    {
      role: "Local Democracy Reporter",
      company: "Birmingham Mail and BBC",
      period: "Previous",
      description: "Reporting on local government, council meetings, and community issues"
    },
    {
      role: "Reporter",
      company: "The Guardian",
      period: "Previous",
      description: "Contributing to national news coverage and investigative pieces"
    }
  ];

  const awards = [
    {
      title: "John Schofield Trust Fellowship",
      year: "2023",
      description: "Prestigious fellowship supporting investigative journalism"
    },
    {
      title: "Scott Trust Bursary",
      year: "2019",
      description: "Winner of the competitive journalism bursary program"
    }
  ];

  const skills = [
    "Investigative Journalism",
    "Data Journalism",
    "News Reporting",
    "B2B Publications",
    "Digital Media",
    "Research & Analysis",
    "Interview Techniques",
    "Fact Checking"
  ];

  return (
    <Box sx={{ 
      minHeight: "calc(100vh - 100px)",
      backgroundColor: "#fdfaf5",
      py: 6
    }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box textAlign="center" mb={6}>
          <Box
            component="img"
            src="/photo-jornalist.png"
            alt="Rhi Storer"
            sx={{
              width: { xs: 200, md: 250 },
              height: { xs: 200, md: 250 },
              borderRadius: "12px",
              objectFit: "cover",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              mb: 4
            }}
          />
          
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontFamily: "Baskervville, serif",
              fontWeight: 400,
              color: '#2c2c2c',
              mb: 2,
            }}
          >
            Rhi Storer
          </Typography>
          
          <Divider
            sx={{
              width: 80,
              height: 3,
              backgroundColor: "black",
              mx: "auto",
              borderRadius: 2,
              mb: 3
            }}
          />
          
          <Typography
            variant="h5"
            sx={{
              color: '#666',
              fontStyle: 'italic',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}
          >
            Freelance Journalist specializing in investigations, news, and data journalism
          </Typography>

          {/* Social Links */}
          <Box sx={{ mb: 4 }}>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              sx={{
                backgroundColor: "black",
                color: "white",
                mr: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#333",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              sx={{
                backgroundColor: "black",
                color: "white",
                mr: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#333",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:rhistorerwrites@gmail.com"
              sx={{
                backgroundColor: "black",
                color: "white",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#333",
                  transform: "translateY(-3px)",
                },
              }}
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>

        {/* About Me Section */}
        <Card sx={{ mb: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Baskervville, serif",
                fontWeight: 400,
                color: '#2c2c2c',
                mb: 3,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <WorkIcon sx={{ mr: 2, color: '#666' }} />
              About Me
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.7, mb: 2 }}>
              I'm a freelance journalist with a passion for uncovering the truth through investigative 
              reporting and data-driven storytelling. My work spans across various sectors, with a 
              particular focus on education, local government, and social issues that impact communities.
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.7, mb: 2 }}>
              Throughout my career, I've had the privilege of working with some of the UK's most 
              respected news organizations, including The Guardian, BBC, and Birmingham Mail. My 
              investigative work has led to policy changes and increased transparency in public institutions.
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ color: '#555', lineHeight: 1.7 }}>
              I believe in the power of journalism to hold those in power accountable and to give 
              voice to those who might otherwise go unheard. Every story I tell is driven by a 
              commitment to accuracy, fairness, and the public interest.
            </Typography>
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card sx={{ mb: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Baskervville, serif",
                fontWeight: 400,
                color: '#2c2c2c',
                mb: 3,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <SchoolIcon sx={{ mr: 2, color: '#666' }} />
              Experience
            </Typography>
            
            {experiences.map((exp, index) => (
              <Box key={index} sx={{ mb: 3, pb: 3, borderBottom: index < experiences.length - 1 ? '1px solid #eee' : 'none' }}>
                <Typography variant="h6" sx={{ color: '#2c2c2c', fontWeight: 600, mb: 1 }}>
                  {exp.role}
                  {exp.company && (
                    <Typography component="span" sx={{ color: '#666', fontWeight: 400, ml: 1 }}>
                      at {exp.company}
                    </Typography>
                  )}
                </Typography>
                <Typography variant="body2" sx={{ color: '#888', mb: 1, fontStyle: 'italic' }}>
                  {exp.period}
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.6 }}>
                  {exp.description}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Awards Section */}
        <Card sx={{ mb: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Baskervville, serif",
                fontWeight: 400,
                color: '#2c2c2c',
                mb: 3,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <EmojiEventsIcon sx={{ mr: 2, color: '#666' }} />
              Awards
            </Typography>
            
            {awards.map((award, index) => (
              <Box key={index} sx={{ mb: 3, pb: 3, borderBottom: index < awards.length - 1 ? '1px solid #eee' : 'none' }}>
                <Typography variant="h6" sx={{ color: '#2c2c2c', fontWeight: 600, mb: 1 }}>
                  {award.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#888', mb: 1, fontWeight: 600 }}>
                  {award.year}
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.5 }}>
                  {award.description}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card sx={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontFamily: "Baskervville, serif",
                fontWeight: 400,
                color: '#2c2c2c',
                mb: 3
              }}
            >
              Expertise
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    backgroundColor: '#f0f0f0',
                    color: '#333',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: '#e0e0e0'
                    }
                  }}
                />
              ))}
            </Box>

            <Box sx={{ pt: 3, borderTop: '1px solid #eee' }}>
              <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                <strong>Get in touch:</strong>
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                rhistorerwrites@gmail.com
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}