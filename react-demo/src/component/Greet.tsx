type GreetProps = {
    name: string,
    messageCount: number
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Hello !!! {props.name} : {props.name}</h2>
        </div>
    );
}