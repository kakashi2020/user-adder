const Wrapper = props => {
    return props.children
};


export default Wrapper; 


//This seems to be good to not add an extra layer of divs which may confude the JSX. It will avoid rendering an extra component