import { NextPageWithLayout } from "next";
import LayoutAdmin from "../../../components/LayoutAdmin";

type Props = {};

const DashboardPage: NextPageWithLayout<Props> = () => {
  return <div>Dashboard 👋</div>;
};

DashboardPage.getLayout = (page) => {
  return <LayoutAdmin title="Admin | Dashboard">{page}</LayoutAdmin>;
};

export default DashboardPage;
