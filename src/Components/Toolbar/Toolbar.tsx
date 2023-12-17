import {NavLink} from 'react-router-dom';

const Toolbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark container">
      <div className="container">
        <NavLink to='/' className="navbar-brand">To Do list</NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;