'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

type Order = {
    id: string;
    customer: string;
    pizza: string;
    quantity: number;
    date: string;
    status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
};

const orders: Order[] = [
    { id: 'PZA001', customer: 'John Doe', pizza: 'Margherita', quantity: 1, date: '2025-05-20 13:45', status: 'Pending' },
    { id: 'PZA002', customer: 'Jane Smith', pizza: 'Pepperoni', quantity: 2, date: '2025-05-21 15:20', status: 'Preparing' },
    { id: 'PZA003', customer: 'Alice Brown', pizza: 'Veggie Supreme', quantity: 1, date: '2025-05-22 11:30', status: 'Out for Delivery' },
    { id: 'PZA004', customer: 'Bob Stone', pizza: 'Margherita', quantity: 3, date: '2025-05-22 12:45', status: 'Delivered' },
    { id: 'PZA005', customer: 'Clara Wilson', pizza: 'Pepperoni', quantity: 1, date: '2025-05-23 17:10', status: 'Cancelled' },
];

const statusColor = {
    Pending: 'bg-yellow-200 text-yellow-800',
    Preparing: 'bg-blue-200 text-blue-800',
    'Out for Delivery': 'bg-purple-200 text-purple-800',
    Delivered: 'bg-green-200 text-green-800',
    Cancelled: 'bg-red-200 text-red-800',
};

export default function OrdersPage() {
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            router.push('/login');
        }
    }, []);

    return (
        <div className='mt-6 md:mt-12'>
            <h2 className="text-2xl font-bold mb-4">Pizza Orders</h2>
            <div className="overflow-x-auto mt-6">
                <table className="min-w-full shadow-md rounded-lg overflow-hidden text-sm">
                    <thead className="text-left">
                        <tr>
                            <th className="px-4 py-2">Order ID</th>
                            <th className="px-4 py-2">Customer</th>
                            <th className="px-4 py-2">Pizza</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Order Date</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="border-t">
                                <td className="px-4 py-2">{order.id}</td>
                                <td className="px-4 py-2">{order.customer}</td>
                                <td className="px-4 py-2">{order.pizza}</td>
                                <td className="px-4 py-2">{order.quantity}</td>
                                <td className="px-4 py-2">{order.date}</td>
                                <td className="px-4 py-2">
                                    <span className={clsx("px-2 py-1 rounded text-xs font-medium", statusColor[order.status])}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
