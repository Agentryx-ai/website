import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCT_ORDER, productDetails } from "../../../site-data";
import { ProductDetailPage } from "../../../site";

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
  const title = product.name.ko;
  const description = product.tagline.ko;
  const canonical = `/ko/products/${slug}`;
  const enCanonical = `/products/${slug}`;

  return {
    title: {
      absolute: `${title} | 에이전트릭스 에이아이`
    },
    description,
    alternates: {
      canonical,
      languages: {
        en: enCanonical,
        ko: canonical,
        "x-default": enCanonical
      }
    },
    openGraph: {
      title: `${title} | 에이전트릭스 에이아이`,
      description,
      url: canonical,
      type: "website",
      locale: "ko_KR",
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
      title: `${title} | 에이전트릭스 에이아이`,
      description,
      images: [OG_IMAGE]
    }
  };
}

export default async function KoProductPage({ params }: Props) {
  const { slug } = await params;
  if (!isPublicProductSlug(slug) || !productDetails[slug]) notFound();
  return (
    <ProductDetailPage
      slug={slug}
      initialLang="ko"
      locked
      langLinks={{ en: `/products/${slug}`, ko: `/ko/products/${slug}` }}
    />
  );
}
