import validateRegex from '../validateRegex';
import { createInput } from '../../../../../test/utils';
import { REGEX } from '../../../../../common/constants';

describe('Validation: Regex', () => {
  it('should return true if no regex provided', () => {
    const input = createInput('text', '');
    const result = validateRegex(input);
    expect(result.isValid).toBe(true);
  });

  it('should return true if input has email value', () => {
    const input = createInput('text', 'john@smith.com');
    const result = validateRegex(input, REGEX.Email);
    expect(result.isValid).toBe(true);
  });

  it('should return false if input has no value', () => {
    const input = createInput('text', 'john smith');
    const result = validateRegex(input, REGEX.Email);
    expect(result.isValid).toBe(false);
  });
});
