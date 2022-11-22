import React from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const userProfiles = [
    {
      name: "sonu singh",
      age: 27,
      city: "patna",
      profileUrl: "https://avatars.githubusercontent.com/u/110038971?v=4"
    },
    {
      name: "rohit sharma",
      age: 27,
      city: "pune",
      profileUrl: "https://avatars.githubusercontent.com/u/110038971?v=4"
    },
    {
      name: "sarthak kaushik",
      age: 17,
      city: "noida",
      profileUrl: "https://avatars.githubusercontent.com/u/110038971?v=4"
    },
    {
      name: "Deepak kumar",
      age: 23,
      city: "lucknow",
      profileUrl: "https://avatars.githubusercontent.com/u/110038971?v=4"
    }
  ];

  //return holds ur JSX code,but outside  return we can write javascript code
  return (
    <div className="main">
      <Card
        name={userProfiles[0].name}
        age={userProfiles[0].age}
        city={userProfiles[0].city}
        url={userProfiles[0].profileUrl}
      />
      <Card
        name={userProfiles[1].name}
        age={userProfiles[1].age}
        city={userProfiles[1].city}
        url={userProfiles[1].profileUrl}
      />
      <Card
        name={userProfiles[2].name}
        age={userProfiles[2].age}
        city={userProfiles[2].city}
        url={userProfiles[2].profileUrl}
      />
    </div>
  );
}

export default App;
