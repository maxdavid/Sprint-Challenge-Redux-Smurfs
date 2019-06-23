# Self-Study Answers

1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

`.reduce`, `.map`, `.filter`

The spread operator (`...`) allows us to create copies of objects, and modify properties of that object.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

`actions` are signals our app sends to the store, which usually trigger a reducer. The `reducer` takes in the current state and the action, and returns a modified copy of the state.

The `store` is the control center of Redux; it keeps track of the state, receives the actions, and triggers reducers.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is only accessible to that individual component and passed to children as props, making cross component communication difficult. Application state is a global, authoritative state that all components have access to.

1.  What is middleware?

Middleware is software that intercepts communication between different software functions or processes in order to inspect or debug them.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

`redux-thunk` is middleware for the action -> reducer flow that allows us to return functions from reducers, allowing for asynchronous actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

Combination of `connect` and `mapStateToProps`
