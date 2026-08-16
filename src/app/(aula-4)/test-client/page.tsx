'use client'

import { useEffect, useState } from "react";

import { fetchWithToken } from "@/app/lib/aula-4/fetchWithToken";

import { useAuth } from "@/context/aula-4/AuthContext";


export default function Page() {
    const { token } = useAuth();

    const [response, setResponse] = useState();

    useEffect(() => {
        if (token) {
            (async () => {
                const res = await fetchWithToken('http://localhost:3000/api/protected', token);

                const data = await res.json();

                setResponse(data);
            })();
        }
        
    }, [token]);

    if (!token) {
        return <div>Token não encontrado. Faça login para acessar esta página.</div>;
    }

    return (
        <div>
            {JSON.stringify(response)}
        </div>
    );
}