'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import { useAuth } from '@/context/aula-4/AuthContext'

import { Button } from '@/components/aula-2/Button'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')

  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setError('')

    try {
      await login(email, password)
      router.push('/dashboard')
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="grid gap-y-2 w-96">
          <input 
              className="p-2 border border-gray-900 rounded"
              value={email}
              onChange={e => setEmail(e.target.value)} 
              placeholder="Email" 
          />
          <input 
              className="p-2 border border-gray-900 rounded"
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              placeholder="Senha" 
              type="password" 
          />
        <Button type="submit">Entrar</Button>
      </form>
    </div>
  )
}