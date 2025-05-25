'use client';

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            localStorage.setItem("user", JSON.stringify(user));
            router.push("/dashboard");
        } catch (error) {
            console.error("Login error", error);
        }
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) router.push("/dashboard");
    }, []);

    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Sign in with Google
            </button>
        </main>
    );
}
