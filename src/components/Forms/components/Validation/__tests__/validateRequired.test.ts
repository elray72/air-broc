import validateRequired from '../validateRequired';
import { createInput } from '../../../../../test/utils';

describe('Validation: Required', () => {
  it('should return true if input has value', () => {
    const input = createInput('text', 'hello');
    const result = validateRequired(input);
    expect(result.isValid).toBe(true);
  });

  it('should return false if input has no value', () => {
    const input = createInput('text', '');
    const result = validateRequired(input);
    expect(result.isValid).toBe(false);
  });
});
