export default function Door() {
  return (
    <>
      <div className="door" />
      <AlertButton message="I like green eggs and ham.">button 1</AlertButton>
      <AlertButton message="I don't like green eggs and ham.">
        button 2
      </AlertButton>
    </>
  );
}

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
