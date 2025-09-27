import { useEffect } from 'react';

export default function ThrowError() {
  useEffect(() => {
    throw new Error('This is a simulated server error!');
  }, []);

  return (
    <div>
      <h1>Simulating Server Error...</h1>
    </div>
  );
}
