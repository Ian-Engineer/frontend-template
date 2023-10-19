import { Typography, Box, Container, List, ListItem, ListItemText } from "@mui/material";

const TermsOfServicePage = () => {

  return (
    <Container className=''>
      <Box className=''>
        <Typography variant='h4' color='primary.contrastText'>
          Terms of Services for webpage
        </Typography>
      </Box>

      <Box className=''>
        <Typography variant='h6' color='primary.contrastText' className=''>
          Use of Services:
        </Typography>
        <List>
          <ListItem className=''>
            <ListItemText primary="Ability to listen to podcasts, audiobooks, sounds, etc. all ad-free." />
          </ListItem>
          <ListItem className=''>
            <ListItemText primary="Tracking listened history across the platform for improved user experience." />
          </ListItem>
          <ListItem className=''>
            <ListItemText primary="Monitoring and storing favorites, including podcasts, audiobooks, sounds, etc." />
          </ListItem>
        </List>
      </Box>

      <Box className=''>
        <Typography variant='h6' color='primary.contrastText' className=''>
          General Terms:
        </Typography>
        <Typography variant='body1' color='primary.contrastText'>
          By using our platform, users agree to these terms and any future modifications. We reserve the right to change these terms at any point.
        </Typography>
      </Box>

      <Box className=''>
        <Typography variant='h6' color='primary.contrastText' className=''>
          Contact Us:
        </Typography>
        <Typography variant='body1' color='primary.contrastText'>
          If you have questions or concerns about these terms, please contact us at solgood44@gmail.com.
        </Typography>
      </Box>
    </Container>
  );
}

export default TermsOfServicePage;

