function CounterControls(props){



return(
<div>
<button onClick={props.increment}>
    increment
  </button>
  <button onClick={props.decrement}>
    decrement
  </button>
  <button onClick={props.reset}>
  reset
  </button>
</div>
);
}
export default CounterControls;