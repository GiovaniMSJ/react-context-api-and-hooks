import P from 'prop-types'
import { useCounterContext } from '../../context/CounterContext/indext'

export const Heading = () => {

    const [state , setState] = useCounterContext()

    return(
        <h1>{state.counter}</h1>
    )
}
