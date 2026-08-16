'use client'

import { useAuth } from '@/context/aula-4/AuthContext'
import Link from 'next/link'

export default function Page() {
  const { user } = useAuth()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold mb-4">Não autorizado</h1>

      {user ?
        <p>Acesso não autorizado (Autorização NOK)</p>
        :
        <p>Acesso não autorizado (Autenticação NOK)</p>
      }

      {user && <p>Sua role atual é: {user?.role}</p>}
       
      <Link
        className="p-2 border border-gray-900 rounded hover:bg-gray-100 transition-colors"
        href="/login"
      >
        Login
      </Link>
    </div>
  )
}