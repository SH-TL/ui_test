import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Section01Buttons from './components/sections/Section01Buttons';
import Section02Inputs from './components/sections/Section02Inputs';

function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      bgcolor: 'grey.50',
      py: { xs: 4, md: 8 },
    }}>
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          component='h1'
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: 600,
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          UI Components Showcase
        </Typography>

        <Section01Buttons />
        <Section02Inputs />

      </Container>
    </Box>
  );
}

export default App;
