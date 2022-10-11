import React from 'react';

const Blogs = () => {
    return (
        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-4'>
            <div className='bg-gray-600 mt-4 rounded-lg text-gray-100 p-4'>
                <h4 className='text-2xl mb-4 text-sky-500'>1. What is the purpose of React Router?</h4>
                <p>React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.

                When we say dynamic routing, we mean routing that takes place as your app is rendering, not in a configuration or convention outside of a running app. That means almost everything is a component in React Router. — React Training

                Why use React Router?
                React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.

                What happens when you need to navigate TWO routing system?
                An API is any place where a piece of code talks to another piece of code, but we often use it to mean somebody’s external resource that gives me values, or our own internal database resource(s).

                If you are using a frontend and a backend, and you are potentially writing in multiple languages that don’t necessarily have the same routing conventions, don’t worry! The backend functions just as an API, and the user really doesn’t interact with it at all. The routes that used to manage the user experience and the routes that used to manage queries to the database are not the same.</p>
            </div>

            <div className='bg-gray-600 mt-4 rounded-lg text-gray-100 p-4'>
                <h4 className='text-2xl mb-4 text-sky-500'>2. How does the Context API Work?</h4>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.

                React context API: How it works?
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page

                Context API will replace redux?
                No. Well, not entirely.

                Redux is great and came perfectly to answer the need for state management. Actually, it answered this need so well that it came to be known that you can't be a "true" React developer if you don't know your way around Redux. However, Redux has its disadvantages, and that's why it's important to know what Context API gives us that Redux doesn't:

                Simplicity - When using redux people tend to manage almost all of their state in redux and it causes 2 problems:

                Overhead - Why should I create/update 3 files just to add one tiny feature?
                One of the significant advantages of React's one-way data binding is that it's easy to understand - A component passes state to its children. Using Redux takes it away from us.
                Using Context API we can define several unrelated contexts (stores) and use each in its proper place in the app.</p>
            </div>

            <div className='bg-gray-600 mt-4 rounded-lg text-gray-100 p-4'>
                <h4 className='text-2xl mb-4 text-sky-500'>3. What is useRef Hook?</h4>
                <p>The useRef Hook allows you to persist values between renders.

                It can be used to store a mutable value that does not cause a re-render when updated.

                It can be used to access a DOM element directly.

                Does Not Cause Re-renders
                If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

                To avoid this, we can use the useRef Hook.</p>
            </div>
        </div>
    );
};

export default Blogs;