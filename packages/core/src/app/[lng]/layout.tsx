import '@/styles/base/globals.scss';
import { dir } from 'i18next';
import { Metadata } from 'next';
import Header from '@/components/layouts/header/Header';
import { homeMetaData } from '@/constants/SEO/home';
import { LngParamsProps } from '@/types/lngSwitch';
import {
  IBMPlexMono,
  megrim,
  permanentMarker,
  solway,
  balooBhaina,
  chakraPatch,
  spaceMono,
  guide,
} from '../../../public/fonts/fonts';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const revalidate = 3600;

type Props = {
  params: { lng: string };
};
export const generateMetadata = async ({ params: { lng } }: Props): Promise<Metadata> => {
  return lng === 'ko' ? homeMetaData.metadataKO : homeMetaData.metadataEN;
};

interface RootLayoutProps extends LngParamsProps {
  children: React.ReactNode;
}

export default function RootLayout({ children, params: { lng } }: RootLayoutProps) {
  const fontVariables = `
  ${mansalva.variable} 
  ${megrim.variable} 
  ${lobster.variable} 
  ${permanentMarker.variable} 
  ${solway.variable} 
  ${balooBhaina.variable} 
  ${chakraPatch.variable} 
  ${spaceMono.variable}
  ${guide.variable}
  ${IBMPlexMono.variable}`;

  return (
    <html lang={lng} dir={dir(lng)} className={fontVariables}>
      <body>
        <Header lng={lng} />
        {children}
      </body>
    </html>
  );
}
