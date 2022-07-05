import { NextPageWithLayout } from "next";
import LayoutAdmin from "../../../components/LayoutAdmin";

type Props = {};

const ExamplePage: NextPageWithLayout<Props> = () => {
  return <div>Departamentos</div>;
};

ExamplePage.getLayout = (page) => {
  return <LayoutAdmin title="Admin | Departamentos">{page}</LayoutAdmin>;
};

export default ExamplePage;
