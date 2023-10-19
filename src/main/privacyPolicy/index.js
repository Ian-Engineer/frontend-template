import { Typography, Box, Container } from "@mui/material";

const PrivacyPolicyPage = () => {
  return (
    <Container className=''>
      <Box className=''>
        <Typography variant='h4' color='primary.contrastText'>
          Privacy Policy for webpage
        </Typography>
      </Box>

      <Box className=''>
        <Typography variant='h6' color='primary.contrastText' className=''>
          1. Information We Collect:
        </Typography>
        <Typography variant='body1' color='primary.contrastText'>
          <Box className=''>Email:</Box> We may collect your email address when...
          <Box className=''>Favorites Tracking:</Box> We track your favorites...
          <Box className=''>Listened History:</Box> We track your listened history...
          <Box className=''>Payment Information:</Box> While you might provide...
        </Typography>
      </Box>

      <Box className=''>
        <Typography variant='h6' color='primary.contrastText' className=''>
          2. How We Use Your Information:
        </Typography>
        <Typography variant='body1' color='primary.contrastText'>
          <Box className=''>Purpose:</Box> Your personal data is used...
          {/* ... Continue with other subsections ... */}
        </Typography>
      </Box>

      <Box className=''>
        <Typography variant='h6' color='primary.contrastText' className=''>
          3. Storage of Data:
        </Typography>
        <Typography variant='body1' color='primary.contrastText'>
          All the user data we collect...
        </Typography>
      </Box>

      {/* ... Continue with other sections ... */}

      <Box className=''>
        <Typography variant='h6' color='primary.contrastText' className=''>
          8. Contact Us:
        </Typography>
        <Typography variant='body1' color='primary.contrastText'>
          If you have questions about this Privacy Policy or our data practices, please contact us at:
          <div>
            [Your Contact Address, Email, and Phone Number]
          </div>
        </Typography>
      </Box>

      <Typography variant='body1' color='primary.contrastText'>
        Thank you for choosing Solgood.Media. We're committed to keeping your data safe and respecting your privacy.
      </Typography>
    </Container>
  );
}

export default PrivacyPolicyPage;
