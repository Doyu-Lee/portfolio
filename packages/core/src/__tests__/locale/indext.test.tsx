import React from 'react';
import { render } from '@testing-library/react';
import Header from '@/components/header/Header';

describe('한영 변환 테스트', () => {
  it('영어 페이지', () => {
    const { container } = render(<Header lng="en" />);
    expect(container.innerHTML).toContain('roadmap');
  });
});
