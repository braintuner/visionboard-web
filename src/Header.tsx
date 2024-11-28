import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import logo from './LogoV.png';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import GridViewIcon from '@mui/icons-material/GridView';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white',
  color: 'black',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
});

const StyledSelect = styled(Select)({
  borderBottom: 'none',
  '&::before, &::after': {
    border: 'none',
  },
});

const SubMenuButton = styled(Button)({
  fontSize: '14px',
  fontWeight: 'normal',
  textTransform: 'none',
  minWidth: 0,
  color: 'black',
});

const SubMenu = styled(Box)({
  marginTop: '-12px',
  marginLeft: '-4px',
  display: 'flex',
  gap: '10px',
});

const ToolbarCustom = styled(Toolbar)({
  fontSize: '14px',
  minHeight: 'auto',
});

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentMenu, setCurrentMenu] = React.useState('');

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, menu: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentMenu('');
  };

  const menuItems = ['File', 'Edit', 'Select', 'View', 'Insert', 'Arrange', 'Share', 'Help'];

  return (
    <StyledAppBar position="static">
      {/* Top Row */}
      <ToolbarCustom variant="dense">
        <IconButton edge="start" sx={{ mr: 1, pl: 0, '&:hover': { backgroundColor: 'transparent' } }}>
          <img src={logo} alt="Logo" width={50} height={50} />
        </IconButton>

        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              Blank diagram
            </Typography>
            <Button
              size="small"
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ ml: 1, textTransform: 'none', color: 'text.secondary' }}
            >
              Draft
            </Button>
          </Box>

          <SubMenu>
            {menuItems.map((item) => (
              <SubMenuButton key={item} onClick={(e) => handleMenuClick(e, item)}>
                {item}
              </SubMenuButton>
            ))}
          </SubMenu>
        </Box>

        <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
          <IconButton size="small" sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <CloudQueueIcon />
          </IconButton>
          <IconButton size="small" sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
            <GridViewIcon />
          </IconButton>
        </Box>
      </ToolbarCustom>

      <Divider />

      {/* Bottom Row */}
      <ToolbarCustom variant="dense">
        <Stack direction="row" spacing={1} alignItems="center">
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <StyledSelect value="liberation-sans" variant="standard">
              <MenuItem value="liberation-sans">Liberation Sans</MenuItem>
            </StyledSelect>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 70 }}>
            <StyledSelect value="10" variant="standard">
              <MenuItem value="10">10px</MenuItem>
              <MenuItem value="12">12px</MenuItem>
              <MenuItem value="14">14px</MenuItem>
            </StyledSelect>
          </FormControl>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          <IconButton size="small">
            <FormatBoldIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <FormatItalicIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <FormatUnderlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <FormatAlignLeftIcon fontSize="small" />
          </IconButton>

          {/* Add more items */}
          <Button
            size="small"
            sx={{
              textTransform: 'none',
              fontSize: '14px',
              color: 'black',
              fontWeight: 'normal',
            }}
          >
            ...
          </Button>
        </Stack>
      </ToolbarCustom>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
        <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
      </Menu>
    </StyledAppBar>
  );
}
