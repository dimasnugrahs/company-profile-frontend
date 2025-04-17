import BlogDetailSection from "../components/blog/BlogDetailSection";
import Breadcrumbs from "../components/Breadcrumbs";
import LayouDefaultContent from "../layouts/LayoutDefaultContent";

const BlogDetails = () => {
  return (
    <div>
      <LayouDefaultContent>
        <Breadcrumbs
          items={[
            { label: "Beranda", href: "/" },
            { label: "Tabungan Berjangka" }, // item terakhir biasanya tidak punya link
          ]}
        />
      </LayouDefaultContent>
      <BlogDetailSection />
    </div>
  );
};

export default BlogDetails;
