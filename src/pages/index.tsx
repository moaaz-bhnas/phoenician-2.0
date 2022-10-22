import Container from "components/Container";
import PageLayout from "components/PageLayout";
import Banner from "sections/banner/Banner";

function HomePage() {
  return (
    <PageLayout title="Home">
      <Container className="max-h-[calc(100vh-4rem)] lg:pt-7">
        <Banner />
      </Container>
    </PageLayout>
  );
}

export default HomePage;
