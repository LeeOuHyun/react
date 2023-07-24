import { Grid } from '@mui/material';
import Contents from './Contents';
import PortalMenu from './PortalMenu';

const Body = () => (
  <Grid container>
    <Grid item>
      {/* <UserMenu /> */}
      <PortalMenu />
    </Grid>
    <Grid item>
      <Contents />
    </Grid>
  </Grid>
);

export default Body;
