import Accordian from "./component/accordian/Accordian";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // height: "100vh",
        padding:"30px"
      }}
    >
      <Accordian />
    </div>
  );
}

export default App;