import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import cls from "./AnimeName.module.css";

const AnimeName = () => {
  const [data, setData] = useState({
    success: "",
    data: [],
    img: "",
  });
  let { anime_name } = useParams();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anime_name]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const getData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/${anime_name}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData({
          success: res.success,
          data: res.data,
          img: res.img,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={cls.background}>
        <h1 className={cls.anime}>Anime Name</h1>
        <div className={cls.container}>
          {data.success ? (
            <>
              <h1 className={cls.anime}>{anime_name}</h1>
              <img
                src={data.img}
                alt={anime_name}
                className={cls.image}
                draggable="false"
              />
              {data.data.map((item) => {
                return (
                  <Link
                    to={`/${anime_name}/${item.fact_id}`}
                    className={cls.fact}
                    key={item.fact_id}
                  >
                    {item.fact_id}) {item.fact}
                  </Link>
                );
              })}
            </>
          ) : (
            <>
              <h1>Error</h1>
              <h2>{data.data}</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AnimeName;
