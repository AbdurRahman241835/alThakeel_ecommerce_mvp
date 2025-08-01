import ProductView from "../../component/ProductView";

type Props = {
  params: { productId: string };
};

export default async function ProductsView({ params }: Props) {
  const { productId } = await params;
  return <ProductView productId={productId} />;
}
  