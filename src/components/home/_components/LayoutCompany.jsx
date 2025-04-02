const LayoutCompany = ({ title, children }) => {
  return (
    <div className="bg-blue-50 py-20 lg:px-32 px-6 text-company-950">
      <h2 className="text-4xl font-semibold mb-8">{title}</h2>
      {children}
    </div>
  );
};

export default LayoutCompany;
