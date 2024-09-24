import { useEffect, useState } from "react";
import { useCounterContext } from "../../context/CounterContext/indext"
import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";

const Home = () => {
  const [state , actions] = useCounterContext();

  const handleError = () => {
    actions.asyncError().then(r => console.log(r)).catch(e => console.log(e.name, ':' , e.message))
  }

  return (
    <div>
      
      <Heading />

      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={() => actions.setCounter({ counter: 10})}>set 10</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>Async increase</Button>
        <Button disabled={state.loading} onButtonClick={handleError}>Async error</Button>
      </div>
    </div>
  )
}

export default Home
