import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Icon } from '@/components/shared/icon';

describe('Icon', () => {
  it('renders an svg for a registered name', () => {
    const { container } = render(<Icon name="Github" />);
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('renders nothing for an unknown name', () => {
    const { container } = render(<Icon name="DefinitelyNotAnIcon" />);
    expect(container.firstChild).toBeNull();
  });
});
