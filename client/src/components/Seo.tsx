import { Helmet } from "react-helmet";
interface SEO {
  title: string;
  description?: string;
  canonicalUrl?: string;
}
const Seo = ({ title, description = "", canonicalUrl = "" }: SEO) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`${title} - Swift Cart`}</title>
      {canonicalUrl ? (
        <link
          rel="canonical"
          href={`${import.meta.env.VITE_CLIENT_DOMAIN}${canonicalUrl}`}
        />
      ) : null}
      {description ? <meta name="description" content={description} /> : null}
    </Helmet>
  );
};

export default Seo;
