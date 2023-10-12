import { fireEvent, screen, render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Header from '@/components/header/Header';

jest.mock(
  'next/dist/shared/lib/router-context',
  () => jest.requireActual('next/dist/shared/lib/router-context.shared-runtime'),
  { virtual: true },
);

it('NextLink 테스트', async () => {
  await render(<Header lng="en" />, {
    wrapper: MemoryRouterProvider,
  });
  fireEvent.click(screen.getByText('dots'));
  expect(mockRouter.asPath).toEqual('/en/dots');
});
