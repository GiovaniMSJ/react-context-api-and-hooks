import { useEffect, useState } from "react";
import { useCounterContext } from "../../context/CounterContext/indext"

const Home = () => {
  const [state , actions] = useCounterContext();

  useEffect(() =>{
    actions.increase()
  }, [actions])
  
  return (
    <div>
      <h1 onClick={() => actions.increase()}>
        Projetinho
      </h1>
    </div>
  )
}

export default Home
