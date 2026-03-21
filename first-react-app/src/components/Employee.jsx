import EditEmployee from "./EditEmployee.jsx";

function Employee(props) {
  return (
    <>
      <div className="mx-auto mb-5 flex max-w-sm flex-col items-center gap-6 rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-900/5 sm:flex-row sm:py-4">
        <img
          className="mx-auto h-24 w-24 rounded-full sm:mx-0 sm:shrink-0"
          src={props.image}
          alt="NA"
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">{props.name}</p>
            <p className="font-medium text-gray-500">
              {props.position ? props.position : "Not specified"}
            </p>
          </div>
          <EditEmployee />
        </div>
      </div>
    </>
  );
}

export default Employee;
