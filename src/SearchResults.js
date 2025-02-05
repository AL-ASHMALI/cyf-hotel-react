import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [clicked, setClicked] = useState();

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">nights</th>
            <th scope="col"> profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((booking, index) => {
            return (
              <tr
                key={index}
                onClick={() => setClicked(!clicked)}
                style={clicked ? { backgroundColor: "yellow" } : {}}
              >
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>
                  {moment(booking.checkOutDate).diff(
                    booking.checkInDate,
                    "days"
                  )}
                </td>
                <td>
                  <button>Show Profile</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>{" "}
      <CustomerProfile />
    </div>
  );
};

export default SearchResults;
