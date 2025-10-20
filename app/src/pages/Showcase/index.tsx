import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MailIcon from '@mui/icons-material/Mail';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  IconButton,
  LinearProgress,
  Radio,
  RadioGroup,
  Rating,
  Slider,
  Stack,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';

export default function ShowcasePage() {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('one');
  const [sliderValue, setSliderValue] = useState<number>(30);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [ratingValue, setRatingValue] = useState<number | null>(3);
  const [tabValue, setTabValue] = useState(0);
  const [accordionExpanded, setAccordionExpanded] = useState(false);

  const theme = useTheme();

  const themeColors = [
    { name: 'Primary', color: theme.palette.primary.main },
    { name: 'Secondary', color: theme.palette.secondary.main },
    { name: 'Info', color: theme.palette.info.main },
    { name: 'Warning', color: theme.palette.warning.main },
    { name: 'Success', color: theme.palette.success.main },
    { name: 'Error', color: theme.palette.error.main },
  ];

  return (
    <Container maxWidth="lg">
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material-UI Showcase
          </Typography>
          <IconButton color="inherit">
            <MailIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        <Box sx={{ flex: '1 1 48%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Buttons
              </Typography>
              <Stack direction="row" spacing={2} mb={2}>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="primary">
                  Primary
                </Button>
                <Button variant="contained" color="secondary">
                  Secondary
                </Button>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <Button variant="contained" color="error">
                  Error
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 48%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Text Field
              </Typography>
              <TextField
                label="Standard TextField"
                variant="outlined"
                fullWidth
                value={textFieldValue}
                onChange={(e) => setTextFieldValue(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Filled TextField"
                variant="filled"
                fullWidth
                defaultValue="Hello World"
              />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 48%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Checkboxes & Radios
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxChecked}
                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                  />
                }
                label="Remember me"
              />
              <RadioGroup
                aria-label="options"
                name="radio-buttons-group"
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
              >
                <FormControlLabel value="one" control={<Radio />} label="Option One" />
                <FormControlLabel value="two" control={<Radio />} label="Option Two" />
              </RadioGroup>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 48%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Slider & Switch
              </Typography>
              <Typography gutterBottom>Volume</Typography>
              <Slider
                value={sliderValue}
                onChange={(_, newValue) => setSliderValue(newValue as number)}
                valueLabelDisplay="auto"
                sx={{ mb: 2 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={switchChecked}
                    onChange={(e) => setSwitchChecked(e.target.checked)}
                  />
                }
                label="Toggle Feature"
              />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 48%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Rating
              </Typography>
              <Rating
                name="simple-controlled"
                value={ratingValue}
                onChange={(_, newValue) => setRatingValue(newValue)}
              />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 48%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Tabs
              </Typography>
              <Tabs
                value={tabValue}
                onChange={(_, newValue) => setTabValue(newValue)}
                aria-label="basic tabs example"
              >
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
              </Tabs>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 48%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Accordion
              </Typography>
              <Accordion
                expanded={accordionExpanded}
                onChange={() => setAccordionExpanded(!accordionExpanded)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion Title</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>This is the content inside the accordion.</Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 48%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Avatar & Badge
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar>A</Avatar>
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 48%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Progress
              </Typography>
              <Box sx={{ mb: 2 }}>
                <LinearProgress variant="determinate" value={50} />
              </Box>
              <CircularProgress />
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 100%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Table
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>City</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>John</TableCell>
                      <TableCell>30</TableCell>
                      <TableCell>New York</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane</TableCell>
                      <TableCell>25</TableCell>
                      <TableCell>London</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ flex: '1 1 100%' }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Paleta de Cores do Tema
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                {themeColors.map(({ name, color }) => (
                  <Box
                    key={name}
                    data-testid={`theme-color-${name.toLowerCase()}`}
                    sx={{
                      width: 100,
                      height: 100,
                      backgroundColor: color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                      color: '#000',
                      fontWeight: 'bold',
                    }}
                  >
                    {name}
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
