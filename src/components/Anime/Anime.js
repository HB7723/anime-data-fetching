import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cls from "./Anime.module.css";

const Anime = () => {
  const [data, setData] = useState({
    success: "",
    data: [],
  });

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const getData = () => {
    fetch(`${process.env.REACT_APP_API_URL}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData({
          success: res.success,
          data: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={cls.background}>
        <h1 className={cls.anime}>Anime</h1>
        <div className={cls.cardContainer}>
          {data.success ? (
            data.data.map((item) => {
              return (
                <Link
                  to={`/${item.anime_name}`}
                  className={cls.animeContainer}
                  key={item.anime_id}
                >
                  <h1 className={cls.animeName}>{item.anime_name}</h1>
                  <img
                    className={cls.animeImage}
                    src={item.anime_img}
                    alt={item.anime_name}
                    draggable="false"
                  />
                </Link>
              );
            })
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

export default Anime;
