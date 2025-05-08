import React, { Suspense } from "react";
import { AuthContext } from "../../AuthProvider";
import Banner from "../Banner";
import RecomendedApp from "../RecomendedApp";
import EducationApp from "../EducationApp";
import HealthApp from "../HealthApp";
import GameApp from "../GameApp";
import ProductivityApp from "../ProductivityApp";
import PopularApp from "../PopularApp";
import { useLoaderData } from "react-router";

const Root = () => {
  let datas = useLoaderData()
  //   let { dataPromise } = use(AuthContext);
  //   let datas = use(dataPromise);

  return (
    <div>
      <Banner></Banner>
      <RecomendedApp datas={datas}></RecomendedApp>
      <PopularApp datas={datas}></PopularApp>
      {/* <ProductivityApp datas={datas}></ProductivityApp>
      <EducationApp datas={datas}></EducationApp>
      <HealthApp datas={datas}></HealthApp>
      <GameApp datas={datas}></GameApp> */}
    </div>
  );
};

export default Root;
