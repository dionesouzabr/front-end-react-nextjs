'use client'

import { Button } from '@/components/aula-2/Button'

import { useAuth } from '@/context/aula-4/AuthContext'

export default function Dashboard() {
  const { user, logout } = useAuth()
  
  if (!user) return null

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Acesso autorizado (Autorização OK)</p>
      <p>Sua role: {user.role}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}