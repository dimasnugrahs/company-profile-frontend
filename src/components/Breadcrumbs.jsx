const Breadcrumbs = ({ items }) => {
  return (
    <nav className="">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-4 text-gray-400">{">"}</span> // atau '›'
            )}
            {item.href ? (
              <a href={item.href} className="hover:text-company-950 text-company-600">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
