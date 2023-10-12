import { render } from '@testing-library/react';
import Header from '@/components/header/Header';

describe('Home', () => {
  it('snapshot 테스트입니다.', () => {
    const { container } = render(<Header lng="ko" />);
    expect(container).toMatchSnapshot();
  });
});
