import { NextPageWithLayout } from "next";
import LayoutAdmin from "../../../components/LayoutAdmin";

type Props = {};

const ExamplePage: NextPageWithLayout<Props> = () => {
  return <div>Produtos</div>;
};

ExamplePage.getLayout = (page) => {
  return <LayoutAdmin title="Admin | Produtos">{page}</LayoutAdmin>;
};

export default ExamplePage;
