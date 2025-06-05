'use client';

import Link from 'next/link';
import { useState } from 'react';
import { loginAction } from '../app/login/actions';

export default function LoginForm() {
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <form
        action={async (formData) => {
          const result = await loginAction(formData);
          setLoginMessage(result.message);
        }}
        className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">Login</h2>
        
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="username">
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
          />
        </div>
        
        <div className="mb-6">
          <label className="mb-2 block text-sm font-bold text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
          />
        </div>

        {loginMessage && (
          <p className={`mb-4 text-sm ${loginMessage.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
            {loginMessage}
          </p>
        )}
        
        <div className="flex flex-col items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Login
          </button>
          <Link href="/" className="mt-4 inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800">
            Back to main page
          </Link>
        </div>
      </form>
    </div>
  );
}
