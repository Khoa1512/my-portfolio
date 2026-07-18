import { describe, expect, it } from 'vitest';

import { cn } from '@/lib/utils';

describe('cn', () => {
  it('joins truthy class names and drops falsy ones', () => {
    const isActive = false;
    expect(cn('a', isActive && 'b', 'c')).toBe('a c');
  });

  it('merges conflicting tailwind classes (last wins)', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });
});
