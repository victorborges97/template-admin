import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { Menu, useDrawer } from "../hooks/useDrawer";
import Drawer from "./Drawer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const LayoutAdmin = ({ children, title = "Admin" }: Props) => {
  const { MENU } = useDrawer({});
  const router = useRouter();
  const [isOpened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main
        id="container"
        className="text-center flex flex-col min-h-screen text-[#000133]"
      >
        <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
        <div id="content" className="grid grid-cols-6 gap-0 flex-1">
          <Sidebar menu={MENU} />
          <PageContainer children={children} />
        </div>
        <footer
          id="container"
          className="flex bg-[#00022e] h-[50px] items-center justify-center text-[#fc86aa]"
        >
          <span>I'm here to stay (Footer)</span>
        </footer>
      </main>
      <Drawer isOpen={isOpened} setIsOpen={setOpened}>
        <ul className="flex flex-col mt-2">
          {MENU.map((item, index) => (
            <li
              onClick={() => {
                setOpened(false);
                item.rota != router.asPath && router.push(item.rota);
              }}
              key={index}
              className={`
            ${
              router.asPath.includes(item.rota) ? "bg-slate-700 text-white" : ""
            }  p-3 mb-1 hover:bg-slate-700 hover:text-white cursor-pointer`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default LayoutAdmin;

const Sidebar = ({ menu }: { menu: Menu[] }) => {
  const router = useRouter();
  return (
    <div
      id="container"
      className={`
      hidden
      md:block
      bg-[#d8dcd6] 
      transition-all
      h-full
      `}
    >
      Sidebar
      <ul className="flex flex-col mt-2">
        {menu.map((item, index) => (
          <Link href={item.rota} key={index}>
            <li
              className={`
            ${
              router.asPath.includes(item.rota) ? "bg-slate-700 text-white" : ""
            }  p-3 mb-1 hover:bg-slate-700 hover:text-white cursor-pointer`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Header = ({
  isOpened,
  toggleDrawer,
}: {
  isOpened: boolean;
  toggleDrawer: () => void;
}) => {
  return (
    <header
      id="container"
      className="flex bg-[#00022e] h-[50px] items-center justify-between text-[#fc86aa] px-5"
    >
      <div id="title" className="flex gap-2 items-center">
        <div
          id="icon-container"
          className="cursor-pointer md:hidden"
          onClick={toggleDrawer}
        >
          {isOpened ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </div>
        Titulo
      </div>
      <nav className="">
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a>Users List</a>
        </Link>{" "}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
  );
};

const PageContainer = ({ children }: { children: ReactNode }) => (
  <div id="page-container" className="col-span-6 md:col-span-5 p-5 w-full">
    {children}
  </div>
);
