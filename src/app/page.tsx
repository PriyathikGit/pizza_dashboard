// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        const user = localStorage.getItem('user');

        // If user is already logged in, redirect to dashboard
        if (user) {
            router.push('/dashboard');
        }
    }, []);

    const goToLogin = () => {
        router.push('/login');
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
            <p className="mb-6 text-gray-600">Please login to continue</p>
            <button
                onClick={goToLogin}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Go to Login
            </button>
        </main>
    );
}
