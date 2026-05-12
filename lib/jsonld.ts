import { site } from '@/lib/data/site';

const baseUrl = site.url;

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}#organization`,
  name: site.name,
  alternateName: site.nameEn,
  url: baseUrl,
  logo: `${baseUrl}/images/logo-vertical.png`,
  image: `${baseUrl}/images/logo-vertical.png`,
  description: site.description,
  email: site.contact.email,
  telephone: site.contact.phone,
  parentOrganization: {
    '@type': 'Organization',
    name: 'BNI Business Network International',
    url: 'https://www.bni.com'
  },
  sameAs: [site.contact.facebook, site.contact.instagram, site.contact.lineUrl],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TW',
    addressRegion: '高雄市',
    addressLocality: '新興區',
    streetAddress: site.meeting.address.replace('高雄市新興區', '')
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: site.contact.email,
      telephone: site.contact.phone,
      availableLanguage: ['zh-Hant', 'en']
    }
  ],
  member: {
    '@type': 'QuantitativeValue',
    value: site.stats.members,
    unitText: '位專業會員'
  }
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}#website`,
  url: baseUrl,
  name: site.name,
  description: site.description,
  inLanguage: 'zh-Hant-TW',
  publisher: { '@id': `${baseUrl}#organization` }
};

export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${baseUrl}#localbusiness`,
  name: `${site.name} 例會`,
  url: `${baseUrl}/visit`,
  image: `${baseUrl}/images/logo-vertical.png`,
  telephone: site.contact.phone,
  priceRange: 'NT$0（免費參訪）',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TW',
    addressRegion: '高雄市'
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'Tuesday',
    opens: '06:30',
    closes: '08:00'
  }
};

export const recurringEventLd = {
  '@context': 'https://schema.org',
  '@type': 'BusinessEvent',
  name: `${site.shortName}每週例會`,
  description: '富聯白金分會每週二清晨線上例會，含 60 秒商機輪播、會員主題簡報、引薦交流。免費歡迎企業主訪客觀摩。',
  url: `${baseUrl}/visit`,
  image: `${baseUrl}/images/logo-vertical.png`,
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  organizer: { '@id': `${baseUrl}#organization` },
  location: {
    '@type': 'VirtualLocation',
    url: `${baseUrl}/visit`
  },
  eventSchedule: {
    '@type': 'Schedule',
    repeatFrequency: 'P1W',
    byDay: 'https://schema.org/Tuesday',
    startTime: '06:30',
    endTime: '08:00'
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'TWD',
    availability: 'https://schema.org/InStock',
    url: `${baseUrl}/visit`
  }
};
