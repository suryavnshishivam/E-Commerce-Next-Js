const ProductDetailsMetaTag = ({ product }) => {
  console.log(product);
  return (
    <>
      <div>
        <title>{product?.title}</title>
        <meta name="description" content={product?.description} />
        <meta name="keyword" content={product?.title} />
        <meta name="author" content="SURYAVNSHI SHIVAM (AnjaneyaHub)" />
        <meta property="og:image" content={product?.thumbnail} />
      </div>
    </>
  );
};

export default ProductDetailsMetaTag;
