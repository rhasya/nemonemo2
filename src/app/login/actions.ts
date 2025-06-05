'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  if (username === 'snow' && password === 'xyz') {
    // Set cookie
    if (username) {
      cookies().set('user', username);
    }
    // Redirect to welcome page
    redirect('/welcome');
  } else {
    return { success: false, message: 'Invalid username or password.' };
  }
}
