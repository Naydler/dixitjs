'use client'
import React, { useState } from "react"
import { Input } from "$/components/ui/input"
import { Button } from "$/components/ui/button"

export function NameInput({ setName }: { setName: (name: string) => void }) {
    const [value, setValue] = useState("")
    const [error, setError] = useState(false)

    const handleClick = () => {
        if (value === "") {
            setError(true)
            return
        }

        setError(false)
        setName(value)
    }
    
    return (
        <div className="flex w-full max-w-sm flex-col space-y-2">
            <div className="flex items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Introduce tu nombre"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        if (error) setError(false)
                    }}
                />
                <Button type="submit" onClick={handleClick}>Crear</Button>
            </div>
            {error && (
              <p className="text-red-500 text-sm">El nombre no puede estar vacío.</p>
            )}
        </div>
    )
}