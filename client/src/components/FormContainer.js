export const FormContainer = (props) => {

    return (<div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        {props.children}
    </div>);

}