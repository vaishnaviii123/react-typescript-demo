
type PersonType={
    firstName: string,
    lastName: string,
    
}
export const Person= (props:PersonType) =>{
    return(
        <div>
            <h1>`Hello {props.firstName} {props.lastName}`</h1>
        </div>
    )
}