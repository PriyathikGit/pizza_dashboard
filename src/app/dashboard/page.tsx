'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const router = useRouter();
    const [name, setName] = useState<string | null>(null);


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            router.push('/login');
        } else {
            const user = JSON.parse(storedUser);
            setName(user.displayName);
        }

    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        router.push("/login");
    };


    return (
        <div className="text-center mt-20">
            <h1 className="text-3xl font-bold">Hello, {name || 'Loading...'}</h1>
            <p className="mt-4 text-gray-600">Welcome to Pizza dashboard.</p>
            <button
                onClick={handleLogout}
                className="bg-red-600 p-3 px-4 mt-6 rounded text-white hover:bg-red-500"
            >
                Logout
            </button>
        </div>
    );
}
