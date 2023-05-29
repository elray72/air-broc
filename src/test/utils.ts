import React from 'react';
import { cleanup, render, RenderOptions } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

function customRender(ui: React.ReactElement, options: RenderOptions = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
}

function createInput(type: string, value: string, name?: string) {
  const input = document.createElement('input');
  input.type = type;
  input.value = value;
  if (name) input.name = name;
  return input;
}

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export { createInput, customRender as render };
