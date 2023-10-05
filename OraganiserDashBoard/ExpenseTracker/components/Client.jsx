import "../CSS/Client.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarDays,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import DashBoard from "./DashBoard";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

function Client() {
  return (
    <div className="Client">
      <div className="RightSide">
        <div className="ExpenseTracker">
          <DashBoard />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </div>
  );
}

export default Client;
