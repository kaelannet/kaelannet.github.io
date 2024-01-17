import * as React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PortfolioCard from '../components/PortfolioCard';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `kn_resume.pdf`;
    link.href = "http://localhost:8000/static/resume.pdf";
    link.click();
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/portfolio/')  // TODO: update this when you no longer are only hosting on local development server
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Projects
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Just a few of the things I am proud of.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button onClick={onDownload} component="label" variant="contained" startIcon={<DownloadIcon />}>
                Download Resume
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item key={project.id} xs={12} sm={6} md={4}>
                <PortfolioCard
                  title={project.title}
                  description={project.description}
                  secondary_description={project.secondary_description}
                  image_url={project.image_url}
                  external_link={project.external_link}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
  );
}
