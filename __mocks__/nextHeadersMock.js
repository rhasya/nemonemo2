// __mocks__/nextHeadersMock.js

// Define standalone mock functions for each method on the cookies object
const mockSet = jest.fn();
const mockGet = jest.fn();
const mockHas = jest.fn();
const mockDelete = jest.fn();
const mockClear = jest.fn(); // Example if 'clear' exists
const mockGetAll = jest.fn(() => []); // Example if 'getAll' exists

// The main cookies mock function returns an object that uses these standalone mocks
const cookies = jest.fn(() => ({
  set: mockSet,
  get: mockGet,
  has: mockHas,
  delete: mockDelete,
  clear: mockClear,
  getAll: mockGetAll,
  // Add any other methods that are part_of the next/headers cookies API
  // and might be called by the code under test.
}));

// Headers mock (if needed by other tests or code)
const mockHeaderGet = jest.fn();
const mockHeaderHas = jest.fn();
const mockHeaderSet = jest.fn();
const mockHeaderDelete = jest.fn();
const headers = jest.fn(() => ({
  get: mockHeaderGet,
  has: mockHeaderHas,
  set: mockHeaderSet,
  delete: mockHeaderDelete,
  forEach: jest.fn(), // Example
  // Add other methods of the Headers API as needed
}));

export {
  cookies,
  headers,
  // Export the individual mocks if you want to assert them directly by importing them in tests,
  // though usually asserting via cookies().set is preferred.
  mockSet as __cookieMockSet, // Prefix to avoid name collisions if imported directly
  mockGet as __cookieMockGet,
  mockHas as __cookieMockHas,
  mockDelete as __cookieMockDelete,
};
