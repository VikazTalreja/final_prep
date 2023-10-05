import "./DashBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pfp from "./pfp.jpg";
// import { fauser} from "@f"
import {
  faUser,
  faCalendarDays,
  faShop,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Todolist from "./TodoComponent/TodoList";
import MyComponent from "./OpenTab";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import UpcomingWeddings from "./UpComing Events/Eventlist";
function DashBoard() {
  return (
    <div className="Organiser">
      <div className="leftSide">
        <img src="path_to_your_profile_image.png" alt="Profile" />
        <span className="UserName">Vikas Talreja</span>
        <span className="Role">Organiser</span>
        <div className="buttons">
          <button className="button">
            <FontAwesomeIcon className="logos" icon={faUser} />
            Vendors
            {/* <FontAwesomeIcon className="arrow" icon={faArrowRight} /> */}
          </button>
          <button className="button">
            <FontAwesomeIcon className="logos" icon={faCalendarDays} />
            Calender
          </button>
          <button className="button">
            <FontAwesomeIcon className="logos" icon={faShop} />
            Marketplace
          </button>
        </div>
        <div className="Logout">
          <button className="button">Logout</button>
        </div>
      </div>
      <div className="RightSide">
        <div className="ExpenseTracker">
          <ExpenseTracker />
        </div>
        <div className="upcoming">
          <UpcomingWeddings />
        </div>
        <div className="Todo">
          <Todolist />
        </div>
        <div className="new-event">
          <button onClick={MyComponent}>
            <FontAwesomeIcon className="Event-Create" icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
