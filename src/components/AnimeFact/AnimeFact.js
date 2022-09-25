import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cls from "./AnimeFact.module.css";

const AnimeFact = () => {
  const [data, setData] = useState({
    success: "",
    data: [],
  });
  let { anime_name, anime_fact } = useParams();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anime_name, anime_fact]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const getData = () => {
    fetch(`${process.env.REACT_APP_API_URL}/${anime_name}/${anime_fact}`, {
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
        <h1 className={cls.anime}>Anime Fact</h1>
        <h1 className={cls.anime}>{anime_name}</h1>
        {data.success ? (
          <div className={cls.card}>
            <h1 className={cls.factNo}>Fact No. {data.data.fact_id}</h1>
            <h2 className={cls.fact}>{data.data.fact}</h2>
          </div>
        ) : (
          <>
            <h1>Error</h1>
            <h2>{data.data}</h2>
          </>
        )}
      </div>
    </>
  );
};

export default AnimeFact;
