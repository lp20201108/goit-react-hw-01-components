import React from "react";
import Profile from "./userProfile/Profile";
import FriendList from "./friendList/FriendList";
import Statistics from "../components/statistics/Statistics";
import TransactionHistory from "./transactions/TransactionHistory";
import user from "../data-base/user.json";
import friends from "../data-base/friends.json";
import statisticalData from "../data-base/statistical-data.json";
import transactions from "../data-base/transactions.json";
// import {
//   user,
//   friends,
//   statisticalData,
//   transactions,
// } from "../data-base/index";

const App = () => {
  return (
    <>
      <Profile {...user} />
      <FriendList friends={friends} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <TransactionHistory items={transactions} />;
    </>
  );
};

export default App;
