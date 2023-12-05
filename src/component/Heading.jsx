const mystyle = {
  border: "1px solid black",
  padding: "10px",
};
function Heading() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td style={mystyle}>first row</td>
            <td style={mystyle}>first row</td>
            <td style={mystyle}>first row</td>
          </tr>
          <tr>
            <td style={mystyle}>second row</td>
            <td style={mystyle}>second row</td>
            <td style={mystyle}>second row</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Heading;
