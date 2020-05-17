# Introduction

A React hook npm module to use debounce feature in your React App.

## Installation

```
npm i use-debounce --save
```

## How to use

```
import useDebounce from "use-debounce";

  const [textChange, setTextChange] = useState("");

    // textChange is the getter method of the input onChange method
  const debouncingInput = useDebounce(textChange, 500);

 useEffect(() => {
    // can do network api calls here
  }, [debouncingInput]);
```

## Options

colorBoxShadow supports two options, both of which are mandatory

- value of input box
- delay timer

