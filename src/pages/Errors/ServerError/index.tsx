import classes from './index.module.css';

export default function ServerError() {
  return (
    <div className={classes.container}>
      <p className={classes.error}>500</p>
      <h1 className={classes.title}>Server Error</h1>
      <p className={classes.mensage}>Sorry, we have an error here.</p>
      <a className={classes.link} href="/">
        Go to Home
      </a>
    </div>
  );
}
