'use server';

export async function loginAction(formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  if (username === 'snow' && password === 'xyz') {
    return { success: true, message: 'Login successful!' };
  } else {
    return { success: false, message: 'Invalid username or password.' };
  }
}
