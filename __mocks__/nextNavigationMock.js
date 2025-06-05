// __mocks__/nextNavigationMock.js
export const redirect = jest.fn((url) => {
  // In Next.js, redirect() throws an error to signal the redirection.
  // We need to mimic this behavior in our mock if tests depend on it.
  const error = new Error('NEXT_REDIRECT');
  error.url = url; // Optionally attach the URL for assertions
  throw error;
});

export const permanentRedirect = jest.fn((url) => {
  const error = new Error('NEXT_PERMANENT_REDIRECT');
  error.url = url;
  throw error;
});

export const useRouter = jest.fn(() => ({
  push: jest.fn(),
  replace: jest.fn(),
  refresh: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  prefetch: jest.fn(),
}));

export const usePathname = jest.fn(() => '/');
export const useSearchParams = jest.fn(() => new URLSearchParams());
export const useSelectedLayoutSegment = jest.fn(() => null);
export const useSelectedLayoutSegments = jest.fn(() => []);
export const useParams = jest.fn(() => ({}));

// Add any other navigation utilities you might use and need to mock
// For example, if you use `notFound()`:
// export const notFound = jest.fn(() => {
//   const error = new Error('NEXT_NOT_FOUND');
//   throw error;
// });
