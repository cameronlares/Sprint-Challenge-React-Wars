# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS better known as a Javascript library or framework that solves the problem of handling data changes at high rates without page reload. If you have an app with alot of DOM interactions, such as scrolling down the page where you see an option saying 'show newer feeds' React JS handles that part of the component without having to reload the page entirely. 

1. Describe component state.
A state that stores information about a component that can change over time. 

1. Describe props.

props are a object argument that returns a react element 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
useEffect. useEffect tells React that your component needs to do something after render. 

useEffect is telling the DOM to run my effect after flushing the DOM. An example of that would be following someone on Instagram and the when you unfollow the useEffect cleans it up by unfollowing
