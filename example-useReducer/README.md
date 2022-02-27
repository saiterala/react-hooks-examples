## useReducer Hook

`const [newState, dispatch] = useReducer(reducer, initialArg);`

useReducer is an alternative to useState. It is like an ES6 reduce function which takes two arguments first being the reducer function(returns new state) and second being the initial state.

```Javascript
const reducer = (state, action) => {
    //return state based upon action
}
```
newState is the updated state while the dispatch method is used to dispatch actions(send actions to the reducer function). State updations are made when an action is fired. So, when an event occurs, the dispatch method dispatches an action to the reducer function and based on the action the state is updated.

### So when to use  useReducer?

#### As per React docs
useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

further more..

#### Use useState if:

* if you manage JavaScript primitives as state
* if you have simple state transitions
* if you want to have business logic within your component
* if you have different properties that don’t change in any correlated manner and can be managed by multiple useState hooks
* if your state is co-located to your component
* if you’ve got a small application

#### Use useReducer if:

* if you manage JavaScript objects or arrays as state
* if you have complex state transitions
* if you want to move business logic into reducers
* if you have different properties that are tied together and should be managed in one state object
* if you want to update state deep down in your component tree
* if you want have an easier time testing it
* if you want a more predictable and maintainable state architecture