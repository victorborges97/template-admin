import { GetServerSideProps, NextPageWithLayout } from "next";
import LayoutAdmin from "../../components/LayoutAdmin";

export const getServerSideProps = (ctx: GetServerSideProps) => {
  return {
    redirect: {
      permanent: false,
      destination: "/admin/dashboard",
    },
    props: {},
  };
};

const IndexPage: NextPageWithLayout = () => (
  <h1 className="text-4xl text-purple-500">Dashboard 👋</h1>
);

IndexPage.getLayout = (page) => {
  return <LayoutAdmin title="Admin | Dashboard">{page}</LayoutAdmin>;
};

export default IndexPage;
