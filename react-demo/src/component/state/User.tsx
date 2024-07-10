import { type } from "os"
import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

type UserProps = {
    name: string,
    email: string,
}

export const User = ({ name, email }: UserProps) => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: name,
            email: email
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}