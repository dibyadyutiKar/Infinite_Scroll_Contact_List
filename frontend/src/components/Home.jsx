import React, { useState } from "react";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Home() {
  const [loadedData, setLoadedData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (loadedData.length === 100) {
        setHasMore(false);
        return;
      }
      // Fetch data from your API using page as a parameter
      const response = await fetch("https://randomuser.me/api/?results=4");
      const newData = await response.json();
      const newResult = await newData.results;

      // Update state with the fetched data
      if (loadedData.length === 0) {
        setLoadedData((prevData) => [...prevData, ...newResult]);
      } else {
        setTimeout(() => {
          setLoadedData((prevData) => [...prevData, ...newResult]);
        }, 1000);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("Profile");
    Navigate("/");
  };

  return (
    <InfiniteScroll
      dataLength={loadedData.length}
      next={fetchData}
      hasMore={hasMore}
      loader={
        <div className=" flex justify-center items-center mt-4">
          <Skeleton count={4} width={300} />
        </div>
      }
    >
      <div className="relative">
        <div className="flex sm:flex-nowrap flex-wrap">
          <h1 className="max-w-[200px] mx-auto mt-4 font-bold text-2xl">
            {" "}
            Contact Details
          </h1>
          <button
            className="bg-red-500 hover:bg-red-600 text-white  font-semibold py-2 px-4 rounded mt-3 mr-10  "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        {loadedData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row flex-wrap max-w-[1080px] sm:w-3/4 sm:mx-auto mx-1  mt-8 border-2 border-black rounded-lg p-4 "
          >
            <img
              src={item.picture.medium}
              className=" sm:h-[120px] sm:w-[120px] h-[80px] w-[80px] rounded-full sm:ml-4 ml-3"
            />
            <div className="mx-4 p-4">
              <h2 className="font-bold flex sm:flex-wrap md:flex-nowrap">
                {item.name.title} {item.name.first} {item.name.last}
              </h2>
              <p className="opacity-50 flex flex-wrap">
                <span className="font-semibold">Email :</span>
                {item.email}
              </p>
              <p>
                <span className="font-semibold">Age :</span>
                {item.dob.age}
              </p>
              <p>
                <span className="font-semibold">Phone : </span>
                {item.phone}
              </p>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}

export default Home;
