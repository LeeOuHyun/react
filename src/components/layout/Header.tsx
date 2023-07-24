import { Button } from '@mui/material';

export default function Header(): JSX.Element {
  const handleClick = () => {};

  const open: boolean = true;

  return (
    <div
      className='flexGrow: 1'
      style={{ background: 'black', textAlign: 'center' }}
    >
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        소개하기
      </Button>
    </div>
  );
}
