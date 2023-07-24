import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import getPortalMenu from 'api/portalMenu';

let index = 0;
const PortalMenu = () => {
  console.log(index);
  index += 1;

  getPortalMenu();

  const list = () => (
    <Box
      sx={{ width: 250, height: '100%' }}
      role='presentation'
      style={{ backgroundColor: 'yellow' }}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return <Box sx={{ width: 1 }}>{list()}</Box>;
};

export default PortalMenu;
