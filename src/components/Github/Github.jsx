import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/SurajVishw")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <>
      <div className="grid grid-cols-2 p-10 bg-orange-700 gap-9 my-10">
        <div>
          <img src={data.avatar_url} alt={data.name} className="w-full" />
        </div>
        <div className="text-left flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Name : {data.name}</h1>
          <p className="text-2xl font-semibold">Login : {data.login}</p>
          <p className="text-2xl font-semibold">Id : {data.id}</p>
        </div>
      </div>
    </>
  );
}

export default Github;

export const loaderEffect = async () => {
  const loader = await fetch("https://api.github.com/users/SurajVishw");
  return loader.json();
};
