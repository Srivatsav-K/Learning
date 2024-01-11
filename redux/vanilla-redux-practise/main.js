import { bindActionCreators } from "redux";
import { configStore } from "./configStore";
import { orderCake } from "./actions/cakeActions";
import { updateAddress } from "./actions/userActions";
import { startGetUsers } from "./actions/asyncUsers";

// Initialise store
export const store = configStore();
console.log(store.getState());

// Subscribing to store for updates
const unsubscribe = store.subscribe(() => {
  const globalState = store.getState();
  console.log({ globalState });

  renderUsers(globalState);
});

// Dispatching an action
store.dispatch(orderCake({ quantity: 2 }));

// Binding actions
const action = bindActionCreators({ orderCake, updateAddress }, store.dispatch);

action.orderCake({ quantity: 1 });

store.dispatch(updateAddress("321 second street"));

// async action
store.dispatch(startGetUsers());

//fetch users and render them
function renderUsers(globalState) {
  const users = globalState.asyncUsers.data;
  if (!users.length) return;

  const usersUl = document.getElementById("users");

  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.name;

    usersUl.appendChild(li);
  }
}
