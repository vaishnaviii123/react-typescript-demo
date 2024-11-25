type GreetProp={
    name: string
    massageCount:number
    isLoggedIn:boolean
}

export const Greet = (props:GreetProp) =>{
    return(
        <div>
            <h2>
                {props.isLoggedIn? `Hello,  ${props.name} your unread mesage is ${props.massageCount} ${props.isLoggedIn}`:'WELCOME GUSET'}
            </h2>
        </div>
    )
}