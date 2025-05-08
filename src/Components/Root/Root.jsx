import React, { Suspense } from "react";
import { AuthContext } from "../../AuthProvider";
import Banner from "../Banner";
import RecomendedApp from "../RecomendedApp";
import EducationApp from "../EducationApp";
import HealthApp from "../HealthApp";
import GameApp from "../GameApp";
import ProductivityApp from "../ProductivityApp";
import PopularApp from "../PopularApp";

const Root = () => {
  //   let { dataPromise } = use(AuthContext);
  //   let datas = use(dataPromise);

  return (
    <div>
      <RecomendedApp></RecomendedApp>
      <PopularApp></PopularApp>
      <ProductivityApp></ProductivityApp>
      <EducationApp></EducationApp>
      <HealthApp></HealthApp>
      <GameApp></GameApp>
    </div>
  );
};

export default Root;
