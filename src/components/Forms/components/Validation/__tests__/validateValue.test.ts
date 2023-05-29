import validateValue from '../validateValue';
import { createInput } from '../../../../../test/utils';

describe('Validation: Value', () => {
  it('should return true if input value is the same as expected value', () => {
    const input = createInput('text', 'hello');
    const result = validateValue(input, 'hello');
    expect(result.isValid).toBe(true);
  });

  it('should return false if input value is not the same as expected value', () => {
    const input = createInput('text', 'hi');
    const result = validateValue(input, 'hello');
    expect(result.isValid).toBe(false);
  });
});
