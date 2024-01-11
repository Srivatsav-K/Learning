import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/native-form">Native form</Link>
      <Link to="/manage-form-state">Manage form state</Link>
      <Link to="/validation-1">Validation 1</Link>
      <Link to="/initial-values">Initial values</Link>
      <Link to="/fetch-initial-values">Fetch initial values</Link>
      <Link to="/nested-objects">Nested objects</Link>
      <Link to="/arrays">Arrays</Link>
      <Link to="/dynamic-fields">Dynamic fields</Link>
      <Link to="/practise">Practise</Link>
      <Link to="/numeric-and-date">Numeric and date values</Link>
      <Link to="/watch-fields">Watch fields</Link>
      <Link to="/get-and-set-field-values">Get and set field values</Link>
      <Link to="/touched-and-dirty">Touched and dirty fields</Link>
      <Link to="/disabling-fields">Disabling fields</Link>
      <Link to="/handle-submission-error">Handle submission error</Link>
      <Link to="/disable-form-submission">Disable form submission</Link>
      <Link to="/form-submission-states">Form submission states</Link>
      <Link to="/reset-form">Reset form</Link>
      <Link to="/mui">Material UI</Link>
    </nav>
  );
};

export default Navbar;
