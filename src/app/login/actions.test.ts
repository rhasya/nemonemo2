import { loginAction } from './actions';

describe('loginAction', () => {
  it('should return success for correct credentials', async () => {
    const formData = new FormData();
    formData.append('username', 'snow');
    formData.append('password', 'xyz');
    const result = await loginAction(formData);
    expect(result).toEqual({ success: true, message: 'Login successful!' });
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
