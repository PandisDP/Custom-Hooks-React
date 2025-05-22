
// This is a custom hook that manages a counter state.
// It provides functions to increment, decrement, and reset the counter value.
// The initial value of the counter can be set when using the hook.
// The hook uses the useState hook from React to manage the state of the counter.
// The hook returns an object containing the current counter value and the functions to manipulate it.
import { use, useState } from 'react';
import PropTypes from 'prop-types';
export const useCounter = (initialvalue=10) => {
    const [count, setCount] = useState(initialvalue);
    
    const increment = (value=1) => {
        setCount((prevCount) => prevCount + value);
    };
    
    const decrement = (value=1) => {
        setCount((prevCount) => prevCount - value);
    };
    const reset = () => {
        setCount(initialvalue);
    };
    
    return { 
        count, 
        increment,
        decrement,
        reset};

}

useCounter.propTypes = {
    initialvalue: PropTypes.number
}