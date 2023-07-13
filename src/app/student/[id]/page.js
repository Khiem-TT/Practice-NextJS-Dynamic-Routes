const Student = ({params}) => {
    return (
        <div>
            <h2>Student information</h2>
            <p>Student: {params.id}</p>
        </div>
    )
}

export default Student;