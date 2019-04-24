**What is a Hook?** A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. We’ll learn other Hooks later.

**When would I use a Hook?** If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that right now!


### Declaring a State Variable
In a class, we initialize the count state to 0 by setting this.state to { count: 0 } in the constructor:

```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  ...
}
```
In a function component, we have no this, so we can’t assign or read this.state. Instead, we call the useState Hook directly inside our component:

```
import React, { useState } from 'react';

function example() {
  //Declare a new state variable, which we'll call “count”
  const [count, setCount] = useState(0);
}
```

**What does calling useState do?** It declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.

**What do we pass to useState as an argument?** The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)

**What does useState return?** It returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair.

Now that we know what the useState Hook does, our example should make more sense:



```
import React, { useState } from 'react';

function example() {
  //Declare a new state variable, which we'll call “count”
  const [count, setCount] = useState(0);
}
```

We declare a state variable called count, and set it to 0. React will remember its current value between re-renders, and provide the most recent one to our function. If we want to update the current count, we can call setCount.

<hr>

### Reading State

When we want to display the current count in a class, we read this.state.count:

```
<p>You clicked {this.state.count} times</p>
```

In a function, we can use count directly:

```
<p>You clicked {count} times</p>
```

<hr>

### Updating State

In a class, we need to call this.setState() to update the count state:

```
<button onClick={() => this.setState({ count: this.state.count + 1})}>
  Click me
</button>
```

In a function, we already have setCount and count as variables so we don't need this:

```
<button onClick={() => setCount(count + 1)}>
  Click me
</button>
```
