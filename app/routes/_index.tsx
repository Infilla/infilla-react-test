import type { MetaFunction } from "@remix-run/node";
// import { useEffect } from "react";
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
      <div className="flex mt-4">
        <div className="flex-1 p-4 bg-white">
          <h2 className="text-xl mb-2">Property details</h2>

          <div className="text-m text-gray-500 my-2">
            Enter the parcel number formatted like 000-000-000
          </div>

          <ParcelNumberInput value={""} onChange={console.log}/>

          {/* <div className="text-m text-red-500 my-2">
            Error messages here
          </div> */}

          <button className="mt-4 h-10 px-4 py-2 inline-flex items-center justify-center bg-emerald-400 text-white hover:bg-emerald-500"
            onClick={() => alert("TODO")}>
            Submit
          </button>
        </div>

        <div className="flex-1 p-4 bg-slate-100">
          <h2 className="text-xl mb-2">Submission</h2>
          <code><pre className="text-sm">
            {JSON.stringify({parcelNumber: 'todo'}, null, '  ')}
            </pre></code>
        </div>
      </div>
    </div>
  );
}

// Snippet for a remote validation request
// 
// useEffect(() => {
//   fetch('/validate/123-456-008', {headers: {'Content-Type': 'application/json'}})
//   .then(async (res) => {
//     console.log(await res.json())
//   })
// }, [])
