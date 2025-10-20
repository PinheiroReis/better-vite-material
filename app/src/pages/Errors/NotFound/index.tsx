import classes from './index.module.css';

export default function NotFound() {
  return (
    <div className={classes.container}>
      <p className={classes.error}>404</p>
      <h1 className={classes.title}>Page Not Found</h1>
      <p className={classes.mensage}>Sorry, the page you are looking for does not exist.</p>
      <a className={classes.link} href="/">
        Go to Home
      </a>
    </div>
  );
}
