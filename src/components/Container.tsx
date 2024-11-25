type ContainerProp={
  styles:React.CSSProperties
}
export const Container = (props:ContainerProp) =>{
    return(
        <div style={props.styles}>
            <text>Txet content goes here</text>
        </div>
    )
}