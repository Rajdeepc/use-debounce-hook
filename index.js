import { useEffect, useState } from "react";

const useDebounce = (value, timeout) => {
  // keeping the accepting value in a local state
  const [state, setState] = useState(value);

  useEffect(() => {
    const timeoutHandler = setTimeout(() => setState(value), timeout);

    return () => {
      clearTimeout(timeoutHandler);
    };
  }, [value, timeout]);

  return state;
};


module.exports.useDebounce = useDebounce;

