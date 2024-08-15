import '../styles/globals.css';
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <div className="app">
            <nav className="flex items-center justify-between p-3">
            <div className="flex items-center">
            <Image src="/network.png" alt="Logo" width={50} height={50} className="mr-10" /> {/* Add your logo here */}
                <ul className="flex space-x-2">
                    <li>
                        <button className="bg-gray-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/')}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button className="bg-gray-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/create')}>
                            Create Post
                        </button>
                    </li>
                </ul>
                </div>
            </nav>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
