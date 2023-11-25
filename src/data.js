//User data is stored in the database in the form of an array of objects.
const data = [
  {
    name: "Deshdeep",
    subscribedChannel: "T-Series",
  },
  {
    name: "Sonani",
    subscribedChannel: "Sony Entertainment",
  },
  {
    name: "Pragati",
    subscribedChannel: "Zee Music Company",
  },
  {
    name: "Lalit",
    subscribedChannel: "Goldmines",
  },
  {
    name: "Abhi",
    subscribedChannel: "Sony SAB",
  },
  {
    name: "Isha Bajaj",
    subscribedChannel: "Zee TV",
  },
  {
    name: "Kanika",
    subscribedChannel: "Colors TV",
  },
  {
    name: "Payal",
    subscribedChannel: "Shemaroo Entertainment",
  },
];

module.exports = data;

// The 'data' array is an array of objects that stores user data.
// Each object in the array represents a user and contains two properties: 'name' and 'subscribedChannel'.
// The 'name' property is a string that represents the user's name.
// The 'subscribedChannel' property is also a string that represents the channel the user is subscribed to.
// The 'module.exports' is used to make the 'data' array available to other parts of the code that require it.
