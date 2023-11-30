import { ShoppingList, Subscribe, Seo } from "../components";

function Home() {
  return (
    <main>
      <Seo
        description="Discover seamless online shopping at Swift Cart - Your go-to destination for a swift and enjoyable shopping experience. Browse a wide range of products, and experience unparalleled convenience. Shop smart, shop swift with Swift Cart."
        title="Home"
        canonicalUrl="/"
      />
      <ShoppingList />
      <Subscribe />
    </main>
  );
}

export default Home;
