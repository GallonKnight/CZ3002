import React,{useState} from 'react';
import Papa from "papaparse";

function FetchLocations(){
    const [rows, setRows] = React.useState([]);
    React.useEffect(() => {
      async function getData() {
        const response = await fetch("../data/CZ3002_dataset_short.csv",{
          download:true,
          complete: data => {
            setRows(data.data);
          }
        },[]);
        const reader = response.body.getReader();
        const result = await reader.read(); // raw array
        const decoder = new TextDecoder("utf-8");
        const csv = decoder.decode(result.value); // the csv text
        const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
        const rows = results.data; // array of objects
        setRows(rows);
      }
      getData();
    }, []);
  console.log(rows);
  return (
    <div>
      <Table columns={columns} dataSource={rows} />
    </div>
  );
}

export default FetchLocations;