type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputEx = ({value, handleChange }: InputProps) => {
    return <input type='text' value={value} onChange={handleChange} />
}