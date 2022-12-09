import { trpc } from "../utils/trpc";

export async function getStaticPaths() {
  const { data } = trpc.product.getAll.useQuery();

  const paths = data?.map((item) => ({
    params: { id: item.code },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const id = context.params.id;
  const { data } = trpc.product.getOneWhere.useQuery({ code: id as string });
  return {
    // Passed to the page component as props
    props: { product: data },
  };
}

export default function Post({ product }) {
  // Render post...
  return <div>Đây là page: {product.code}</div>;
}
