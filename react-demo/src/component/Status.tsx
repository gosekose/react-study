type StatusProps = {
    status: 'loading' | 'error' | 'success'
}

export const Status = (props: StatusProps) => {
    if (props.status == 'error') return <div> Error </div>
    return <div>loading ....</div>
}