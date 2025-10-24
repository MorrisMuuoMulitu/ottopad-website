import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title = 'Ottopad Technologies - Premium Digital Agency in Nairobi',
  description = "Nairobi's premier dev agency blending Silicon Savannah innovation with world-class engineering. We craft digital masterpieces for Africa's fastest growing teams.",
  ogImage = '/og-image.jpg',
  ogType = 'website',
}: SEOProps) {
  const siteUrl = 'https://ottopad.co.ke';
  const fullTitle = title.includes('Ottopad') ? title : `${title} | Ottopad Technologies`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Ottopad Technologies" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional */}
      <meta name="theme-color" content="#10b981" />
      <link rel="canonical" href={siteUrl} />
    </Head>
  );
}
