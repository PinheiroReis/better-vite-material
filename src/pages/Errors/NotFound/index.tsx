import classes from './index.module.css';

export default function NotFound() {
  return (
    <div className={classes.container}>
      <p className={classes.error}>404</p>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Go to Home</a>
    </div>
  );
}
