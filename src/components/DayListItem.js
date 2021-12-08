import React from "react";

export default function DayListItem(props) {
  let dayName = props.name;
  let spots = props.spots;

  console.log(props);
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{dayName}</h2>
      <h3 className="text--light">{spots} spots remaining</h3>
    </li>
  );
}
