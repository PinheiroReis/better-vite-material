import reactIcon from '@/assets/react.svg';
import viteIcon from '@/assets/vite.svg';
import classes from './index.module.css';

export default function IconsTools() {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={viteIcon} alt="vite_icon" data-testid="vite_img" />
      <img className={classes.image} src={reactIcon} alt="react_icon" data-testid="react_img" />
    </div>
  );
}
