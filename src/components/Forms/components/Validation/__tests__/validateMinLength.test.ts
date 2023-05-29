import validateMinLength from '../validateMinLength';
import { createInput } from '../../../../../test/utils';

describe('Validation: Min length', () => {
  it('should return true if value is greater than min length', () => {
    const input = createInput('text', 'hello');
    const result = validateMinLength(input, 1);
    expect(result.isValid).toBe(true);
  });

  it('should return true if value is greater than min length', () => {
    const input = createInput('text', 'hi');
    const result = validateMinLength(input, 5);
    expect(result.isValid).toBe(false);
  });
});
