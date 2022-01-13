import Load from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20 ">
      <img
        width={100}
        className="text-center mx-auto"
        src={Load}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
