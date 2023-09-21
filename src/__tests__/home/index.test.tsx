import { render } from '@testing-library/react';
import Home from '@/app/page';


describe('Home', () => {
  it('snapshot 테스트입니다.', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});

