function Employee(props) {
    return (
        <>
            <h1>Employee: {props.name}</h1>
            <h3>Position: {props.position ? props.position : "Not specified"}</h3>
        </>
    );
}

export default Employee;