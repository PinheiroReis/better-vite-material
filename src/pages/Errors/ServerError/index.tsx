import classes from './index.module.css';

export default function ServerError() {
  return (
    <div className={classes.container}>
      <p className={classes.error}>500</p>
      <h1>Server Error</h1>
      <p>Sorry, we have an error here.</p>
      <a href="/">Go to Home</a>
    </div>
  );
}
