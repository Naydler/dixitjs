'use client'
import { Input } from "$/components/ui/input"
import { Button } from "$/components/ui/button"
import { useState } from "react"
import { createClient } from "$/hooks/createClient"

export function InputWithButton() {
    const [name, setName] = useState("")
    const [error, setError] = useState(false)

    const handleClick = (name: string) => {
        if (name === "") {
            setError(true)
            return
        }
        setError(false)
        createClient(name)
    }
    
    return (
        <div className="flex w-full max-w-sm flex-col space-y-2">
            <div className="flex items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Introduce tu nombre"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                        if (error) setError(false)
                    }}
                />
                <Button type="submit" onClick={() => handleClick(name)}>Crear</Button>
            </div>
            {error && (
                <p className="text-red-500 text-sm">El nombre no puede estar vacío.</p>
            )}
        </div>
    )
}