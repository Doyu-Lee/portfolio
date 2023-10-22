import { ReactNode } from 'react';

export const getProps = (
  stringProps: string | undefined,
  nodeProps: ReactNode | undefined,
): string | ReactNode | null => {
  if (stringProps) return stringProps;
  if (nodeProps) return nodeProps;
  return null;
};
