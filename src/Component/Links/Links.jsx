



const Links = ({route}) => {
  return (
    <div>
       <li>
       <a href={route.path}>{route.name}</a>
       </li>
    </div>
  );
};

export default Links;
