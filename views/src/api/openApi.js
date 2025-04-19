import axios from "axios";
import { dfs_xy_conv } from "../utils/xy";

//const URL = "http://apis.data.go.kr/B551182/";
//http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0
const URL =
  "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
//http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst
//?serviceKey=인증키&numOfRows=10&pageNo=1
//&base_date=20210628&base_time=0600&nx=55&ny=127

const apiKey =
  "G1zKspcc/ZudD4n/spBIwniRMfSdVJJtOxngQ2Zym02R3+gVNkCHR2yPbBgoFMrciEDEzYmvTvrFA2KS4xSIgw==";

const navigatorFn = () => {
  if (navigator.geolocation) {
    function saveCoords(coordsObj) {
      localStorage.setItem("COORDS", JSON.stringify(coordsObj));
      //localstorage의 key, value 값은 모두 string 타입으로 저장되기때문에 변환시켜준다.
    }

    function handleSuccess(position) {
      const latitude = position.coords?.latitude;
      const longitude = position.coords?.longitude;
      const coordsObj = {
        // 객체의 key,  value 값이 동일할 때에는 한번만 써줘도 된다.
        latitude, // localStorage에 객체로 value에 저장하기위해서 객체에 넣어준다.
        longitude,
      };
      saveCoords(coordsObj); // localStorage에 위치 저장
    }

    function handleError() {
      console.log("cant not access to location");
    }

    function askForCoords() {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }

    let loadedCoords = localStorage.getItem("COORDS");
    console.log(
      "loadCoords 로컬저장소에서 저장된 위도경도 가져오기 : ",
      JSON.stringify(loadedCoords)
    );
    loadedCoords = JSON.parse(loadedCoords);

    if (loadedCoords === null) {
      // localStorage에 좌표값이 저장되어있지않다면
      askForCoords(); // 좌표값을 물어본다
    }
    const xyresult = dfs_xy_conv(
      "toXY",
      Number(loadedCoords?.latitude),
      Number(loadedCoords?.longitude)
    );
    return xyresult;
  } //if
}; //navigatorFn

export const weatherapi = async ({ weatherDate, weatherTime }) => {
  // const {  } = params;

  var weatherapiresult = null;

  const xyresult = navigatorFn();
  console.log("weatherapi() 내 위경도를 xy변경후 : ", xyresult);
  console.log("weatherapi() 내 weatherDate 확인 ->  ", weatherDate);
  console.log("weatherapi() 내 weatherTime 확인 ->  : ", weatherTime);
  try {
    //로컬시
    // const result = await axios.get(URL, {
    //   params: {
    //     serviceKey: apiKey,
    //     numOfRows: 10,
    //     pageNo: 1,
    //     dataType: "JSON",
    //     base_date: weatherDate,
    //     base_time: weatherTime,
    //     nx: xyresult.x,
    //     ny: xyresult.y,
    //   },
    // });
    //weatherapiresult = result?.data?.response?.body?.items?.item;
    //console.log("openAPI 공공 api axios 결과 ", weatherapiresult);

    const params = {
      serviceKey: apiKey,
      numOfRows: 10,
      pageNo: 1,
      dataType: "JSON",
      base_date: weatherDate,
      base_time: weatherTime,
      nx: xyresult.x,
      ny: xyresult.y,
    };

    console.log(
      "openApi.js axios.post(/api/main/openapi) 보내기전 요청본문 내용확인 -> ",
      params
    );

    const result = await axios.post("/api/main/openapi", { url: URL, params });

    result.then((result) => {
      console.log(
        "openApi.js axios.post(/api/main/openapi) 결과 result-> ",
        result
      );

      console.log(
        "openApi.js axios.post(/api/main/openapi) 결과 result.result-> ",
        result.result
      );
      weatherapiresult = result.result;

      return weatherapiresult;
    });
  } catch (e) {
    console.log("openApi.js axios.post(/api/main/openapi) 에러발생", e);
  }
}; //weatherapi
