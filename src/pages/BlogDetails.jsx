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
            { label: "Blog", href: "/blog" },
            { label: "Blog Detail" }, // item terakhir biasanya tidak punya link
          ]}
        />
        <BlogDetailSection />
      </LayouDefaultContent>
      
    </div>
  );
};

export default BlogDetails;
