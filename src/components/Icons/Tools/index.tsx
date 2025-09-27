import reactIcon from '@/assets/react.svg';
import viteIcon from '@/assets/vite.svg';
import classes from './index.module.css';

export default function IconsTools() {
  return (
    <div className={classes.container}>
      <img src={viteIcon} alt="vite_icon" data-testid="vite_img" />
      <img src={reactIcon} alt="react_icon" data-testid="react_img" />
    </div>
  );
}
