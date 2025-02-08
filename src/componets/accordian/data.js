const data = [
    {
        "id": '1',
        "label": "What is the difference between state and props?",
        "description": "State is managed within the component and can change over time, while props are passed from a parent component and are read-only."
    },
    {
        "id": '2',
        "label": "How does React handle re-renders?",
        "description": "React re-renders a component when its state or props change, and it uses a virtual DOM to efficiently update only the necessary parts of the UI."
    },
    {
        "id": '3',
        "label": "What is the purpose of useEffect?",
        "description": "The useEffect hook allows you to perform side effects in function components, such as fetching data, directly interacting with the DOM, or setting up event listeners."
    },
    {
        "id": '4',
        "label": "How do you lift state up in React?",
        "description": "To lift state up, move the shared state to the closest common ancestor component and pass it down as props to child components."
    }
]

export default data;