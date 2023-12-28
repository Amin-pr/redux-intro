import { useSelector } from "react-redux";
import store from "../../store";
import { createCustomer } from "./customerslice";
function Customer() {
  const customer = useSelector((store) => store.customer);
  console.log(customer);
  return <h2>👋 Welcome {customer.fullName}</h2>;
}

export default Customer;
