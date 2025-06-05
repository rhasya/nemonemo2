import { loginAction } from './actions';
import { cookies } from 'next/headers'; // Will be auto-mocked
import { redirect } from 'next/navigation'; // Will be auto-mocked

describe('loginAction', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    // This is important when using auto-mocks to reset their state
    jest.clearAllMocks();
  });

  it('should set user cookie and redirect to /welcome on successful login', async () => {
    const formData = new FormData();
    formData.append('username', 'snow');
    formData.append('password', 'xyz');

    // Call the action
    // Since redirect is mocked, this won't actually stop execution here for the test
    // but we need to handle the fact that it might try to redirect.
    // We also need to await the action if it does async work before redirecting.
    try {
      await loginAction(formData);
    } catch (error: any) {
      // Intercept redirect "error"
      // Next.js throws an error when redirect() is called, this is expected.
      // https://nextjs.org/docs/app/api-reference/functions/redirect#how-redirect-works
      if (error.message !== 'NEXT_REDIRECT') {
        throw error; // re-throw if it's not the redirect error
      }
    }

    // Verify cookies function was called
    expect(cookies).toHaveBeenCalled();
    // Verify cookie was set
    expect(cookies().set).toHaveBeenCalledWith('user', 'snow');
    // Verify redirect was called
    expect(redirect).toHaveBeenCalledWith('/welcome');
  });

  it('should return error for incorrect username', async () => {
    const formData = new FormData();
    formData.append('username', 'wronguser');
    formData.append('password', 'xyz');
    const result = await loginAction(formData);
    expect(result).toEqual({ success: false, message: 'Invalid username or password.' });
  });

  it('should return error for incorrect password', async () => {
    const formData = new FormData();
    formData.append('username', 'snow');
    formData.append('password', 'wrongpassword');
    const result = await loginAction(formData);
    expect(result).toEqual({ success: false, message: 'Invalid username or password.' });
  });

  it('should return error for both incorrect credentials', async () => {
    const formData = new FormData();
    formData.append('username', 'wronguser');
    formData.append('password', 'wrongpassword');
    const result = await loginAction(formData);
    expect(result).toEqual({ success: false, message: 'Invalid username or password.' });
  });

  it('should return error for empty username', async () => {
    const formData = new FormData();
    formData.append('username', '');
    formData.append('password', 'xyz');
    const result = await loginAction(formData);
    expect(result).toEqual({ success: false, message: 'Invalid username or password.' });
  });

  it('should return error for empty password', async () => {
    const formData = new FormData();
    formData.append('username', 'snow');
    formData.append('password', '');
    const result = await loginAction(formData);
    expect(result).toEqual({ success: false, message: 'Invalid username or password.' });
  });
});
