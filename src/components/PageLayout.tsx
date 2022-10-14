import Head from "next/head";
import { memo, ReactNode } from "react";

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

      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}

export default memo(Layout);
