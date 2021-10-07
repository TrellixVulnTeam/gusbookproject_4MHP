import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import UidContext from "../components/AppContext";
import LeftNav from "../components/LeftNav";
import Card from "../components/Post/Card";
import Trends from "../components/Trends";
import { isEmpty } from "../Util/functions";

const Trending = () => {
  const uid = useContext(UidContext);
  const trendList = useSelector((state) => state.trendingReducer);
  console.log(trendList);

  return (
    <div className="trending-page">
      <LeftNav />
      <div className="main">
        <ul>
          {!isEmpty(trendList[0]) &&
            trendList.map((post) => <Card key={post._id} post={post} />)}
        </ul>
      </div>
      <div className="right-side">
        <div className="right-side-container">
          <Trends />
        </div>
      </div>
    </div>
  );
};

export default Trending;
