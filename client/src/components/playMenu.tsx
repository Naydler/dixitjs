'use client'
import { Button } from "$/components/ui/button"
import { useState } from "react"
import { createClient } from "$/hooks/createClient"

export function PlayMenu() {

    const handleJoin = () => {
        
    }
    const handleCreate = () => {
    }
    
    return (
        <div className="flex w-full max-w-sm flex-col space-y-4">
            <Button type="submit" className="w-full py-4" onClick={() => handleCreate()}>Crear sala</Button>
            <Button type="submit" className="w-full py-4" onClick={() => handleJoin()}>Unirse a sala</Button>
        </div>
    )
}