import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";

function FetchUser() {
  const url = "http://206.189.49.197/User/";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1> Fetch data from an api in react </h1>{" "}
      {data.map((data) => (
        <ol key={data.id}>
          First Name: {data.firstName}, Last Name: {data.lastName}, User ID:{" "}
          {data.baseID}
        </ol>
      ))}
    </div>
  );
}

//   const [product, setProduct] = useState(null);

//   let content = null;

//   useEffect(() => {
//     axios.get(url).then((response) => {
//       setProduct(response.data);
//     });
//   }, [url]);

//   if (product) {
//     content = (
//       <div>
//         <h1 className="text-2xl font-bold mb-3">{product}</h1>
//         <div>
//           <img src={product.images[0].imageUrl} alt={product} />
//         </div>
//         <div className="font-bold text-xl mb-3">$ {product}</div>
//         <div>{product}</div>
//       </div>
//     );
//   }
//   return <div>{content}</div>;

export default FetchUser;
