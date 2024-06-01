



const Links = ({route}) => {
  return (
    <div className="flex items-center">
       <li>
       <a href={route.path}>{route.name}</a>
       </li>
    </div>
  );
};

export default Links;
