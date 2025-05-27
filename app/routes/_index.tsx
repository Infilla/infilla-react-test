import type { MetaFunction } from "@remix-run/node";
import { ParcelNumberInput } from "~/components/ParcelNumberInput";

export const meta: MetaFunction = () => {
  return [
    { title: "Infilla App" },
    { name: "description", content: "Welcome to Infilla!" },
  ];
};

export default function IndexPage() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Application</h1>
        <div className="mt-4 p-4 bg-white w-fit">
          <h2 className="text-xl mb-2">Property details</h2>

          <div className="text-m text-gray-500 my-2">
            Enter the parcel number formatted like 000-000-000
          </div>

          <ParcelNumberInput value={""} onChange={console.log} />

          {/* <div className="text-m text-red-500 my-2">
            Error messages here
          </div> */}

          <button
            className="mt-4 h-10 px-4 py-2 inline-flex items-center justify-center bg-emerald-400 text-white hover:bg-emerald-500"
            onClick={() => alert("TODO")}
          >
            Submit
          </button>
      </div>
    </div>
  );
}

// Snippet for a parcel lookup
//
// fetch('/lookup/123-456-008', {headers: {'Content-Type': 'application/json'}})
//   .then(async (res) => {
//     console.log(await res.json())
//   })
