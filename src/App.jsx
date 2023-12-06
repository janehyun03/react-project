import "./App.css";

function Movie(props) {
  return (
    <>
      <span>{props.name}</span>
      <span>{props.hasWatched && "has Watched"}</span>
    </>
  );
}

function ContactTable(props) {
  return (
    <>
      <table>
        <tr>
          {props.name && (
            <>
              <td>{props.name}</td>
            </>
          )}
        </tr>
        <tr>
          {props.companyName && (
            <>
              <td>{props.companyName}</td>
            </>
          )}
        </tr>
        <tr>
          {props.category ? (
            <>
              <td>{props.category}</td>
            </>
          ) : (
            <>
              <td>contact could not list category</td>
            </>
          )}
        </tr>
      </table>
    </>
  );
}

function Weekday(props) {
  return (
    <>
      <div style={{ width: "200px" }}>{props.weekday}</div>
      <div style={{ width: "200px" }}>{props.day}</div>
    </>
  );
}

function App() {
  let customer1ContactForm = {
    name: "John",
    companyName: "NIKE",
    category: "",
  };

  let customer2ContactForm = {
    name: "Kevin",
    companyName: "Adidas",
    category: "Business",
  };

  let arr1 = [customer1ContactForm, customer2ContactForm];

  const weekday = [
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let arr = [];
  let daysToShow = 12;
  for (let i = 0; i < daysToShow; i++) {
    arr.push({ weekday: weekday[i % weekday.length], day: i + 1 });
    {
      console.log(arr);
    }
  }

  return (
    <>
      <Movie name="How Grinch Stole Christmas" hasWatched={false} />
      <br></br>
      <Movie name="Harry Potter" hasWatched={true} />
      <br></br>
      <ContactTable
        name={customer1ContactForm.name}
        companyName={customer1ContactForm.companyName}
        category={customer1ContactForm.category}
      />
      <ContactTable {...customer2ContactForm} />
      {arr1.map((customer) => (
        <ContactTable {...customer} />
      ))}

      {arr.map((week, i) => (
        <Weekday key={i} {...week} />
      ))}
    </>
  );
}

export default App;
