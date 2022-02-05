import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import { useEffect, useState } from "react";
import List from "../../components/list/List";
import axiosClient from "../../axiosClient";



const Home = ({ type }) => {

  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosClient.get(
          `/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjkyNDFlNGQyOTE2YmIwMzYwYmY5OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzc4NjA3NSwiZXhwIjoxNjQ0MjE4MDc1fQ.5zNVVU-1158L_Rz-XdI3jWMJnuHuIZWuzgFtVjLilMI",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, index) => (
        <List list={list} key={index} />
      ))}
    </div>
  );
};

export default Home;
