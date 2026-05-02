import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInitialLang } from "../../lang";
import { PRODUCT_ORDER, productDetails } from "../../site-data";
import { ProductDetailPage } from "../../site";

type Props = {
  params: Promise<{ slug: string }>;
};

const PUBLIC_PRODUCT_SLUGS = ["agentryx", "itineva", "moduboza", "retalk"] as const;
const OG_IMAGE = "/og-image.svg";

export const dynamicParams = false;

function isPublicProductSlug(slug: string): slug is (typeof PUBLIC_PRODUCT_SLUGS)[number] {
  return PUBLIC_PRODUCT_SLUGS.includes(slug as (typeof PUBLIC_PRODUCT_SLUGS)[number]);
}

export function generateStaticParams() {
  return PRODUCT_ORDER.filter(isPublicProductSlug).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isPublicProductSlug(slug)) return {};
  const product = productDetails[slug];
  if (!product) return {};
  const title = product.name.en;
  const description = product.tagline.en;
  const canonical = `/products/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title: `${title} | Agentryx AI`,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${title} by Agentryx AI`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Agentryx AI`,
      description,
      images: [OG_IMAGE]
    }
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (!isPublicProductSlug(slug) || !productDetails[slug]) notFound();
  return <ProductDetailPage slug={slug} initialLang={await getInitialLang()} />;
}
