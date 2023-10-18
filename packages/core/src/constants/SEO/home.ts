export const homeMetaData = {
  metadataKO: {
    metadataBase: new URL('https://portfolio-doyu.vercel.app'),
    alternates: {
      canonical: '/',
      languages: {
        'ko-KR': '/ko',
        'en-US': '/en',
      },
    },
    title: {
      template: '🐱 %s | 도유의 블로그',
      default: '🐱 도유의 블로그',
    },
    description: '개발과 관련된 다양한 정보들을 기록하는 장소입니다.',
    icons: {
      icon: '/images/meta/favicon.ico',
    },
    openGraph: {
      title: {
        template: '🐱 %s | 도유의 블로그',
        default: '🐱 도유의 블로그',
      },
      description: '개발과 관련된 다양한 정보들을 기록하는 장소입니다.',
      images: [
        {
          url: '/images/meta/opengraph-image.png',
          alt: '도유의 블로그 OG 이미지',
        },
      ],
    },
  },

  metadataEN: {
    metadataBase: new URL('https://portfolio-doyu.vercel.app'),
    alternates: {
      canonical: '/',
      languages: {
        'ko-KR': '/ko',
        'en-US': '/en',
      },
    },
    title: {
      template: "🐱 %s | Doyu's Blog",
      default: "🐱 Doyu's Blog",
    },
    description: 'A blog recording various insights related to development',
    icons: {
      icon: '/images/meta/favicon.ico',
    },
    openGraph: {
      title: {
        template: "🐱 %s | Doyu's Blog",
        default: "🐱 Doyu's Blog",
      },
      description: 'A blog recording various insights related to development',
      images: [
        {
          url: '/images/meta/opengraph-image.png',
          alt: "Doyu's Blog OG Image",
        },
      ],
    },
  },
};
