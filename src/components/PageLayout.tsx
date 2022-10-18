import Head from "next/head";
import { memo, ReactNode } from "react";
import Header from "../sections/header/Header";
import Container from "./Container";

type Props = {
  children?: ReactNode;
  title: string;
};

function Layout({ children, title }: Props) {
  const pageTitle = `${title} | Phoenicican`;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container className="border-b !py-0">
        <Header />
      </Container>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default memo(Layout);
