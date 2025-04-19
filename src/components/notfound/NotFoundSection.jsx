import NotFound from "../../assets/images/404-error.png";

const NotFoundSection = () => {
  return (
    <div className="w-auto h-screen flex justify-center items-center">
      <img src={NotFound} className="w-200 h-auto" />
    </div>
  );
};

export default NotFoundSection;
