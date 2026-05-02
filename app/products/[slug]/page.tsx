import { notFound } from "next/navigation";
import { getInitialLang } from "../../lang";
import { PRODUCT_ORDER, productDetails } from "../../site-data";
import { ProductDetailPage } from "../../site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PRODUCT_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = productDetails[slug];
  if (!product) return {};
  return {
    title: product.name.en,
    description: product.tagline.en
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  if (!productDetails[slug]) notFound();
  return <ProductDetailPage slug={slug} initialLang={await getInitialLang()} />;
}
