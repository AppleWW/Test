import react, { Fragment, useState } from 'react';

export default function UseState() {
  const [a, setA] = useState(1);
  console.log('a', a);

  function handleClickWithPromise() {
    Promise.resolve().then(() => {
      setA(a + 1);
      setA(a + 1);
    });
  }

  function handleClickWithoutPromise() {
    setA(a + 1);
    setA(a + 2);
  }

  return (
    <Fragment>
      <button onClick={handleClickWithPromise}>{a} 异步执行</button>
      <button onClick={handleClickWithoutPromise}>{a} 同步执行</button>
    </Fragment>
  );
}
