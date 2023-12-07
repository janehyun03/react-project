const OneYearDateArray = () => {
  const startDate = new Date("2023-01-01");
  console.log("startDate:", startDate);
  const endDate = new Date("2023-12-31");
  console.log("endDate:", endDate);
  const datesArray = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    datesArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const chunkSize = 7;
  const datesChunks = [];
  for (let i = 0; i < datesArray.length; i += chunkSize) {
    datesChunks.push(datesArray.slice(i, i + chunkSize));
  }

  const holidays = [
    "Sun Jan 01 2023",
    "Fri Apr 07 2023",
    "Mon Apr 10 2023",
    "Mon May 22 2023",
    "Sat Jun 24 2023",
    "Sat Jul 01 2023",
    "Mon Aug 07 2023",
    "Mon Sep 04 2023",
    "Mon Oct 09 2023",
    "Sat Nov 11 2023",
    "Mon Dec 25 2023",
    "Tue Dec 26 2023",
  ];

  return (
    <>
      <table>
        {datesChunks.map((chunk, index) => (
          <tr key={index}>
            {chunk.map((date, innerIndex) => (
              <td
                className={
                  holidays.find((element) => element == date.toDateString())
                    ? "holiday"
                    : "" || date.getDay() == 6 || date.getDay() == 0
                    ? "weekend"
                    : ""
                }
                key={innerIndex}
                style={{ border: "1px solid black" }}
              >
                {date.getDate()}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};

export default OneYearDateArray;
