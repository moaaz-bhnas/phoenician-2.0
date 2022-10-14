import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";
import PageLayout from "../components/PageLayout";

function HomePage() {
  return (
    <PageLayout title="Home">
      <Container>Home</Container>
    </PageLayout>
  );
}

export default HomePage;
