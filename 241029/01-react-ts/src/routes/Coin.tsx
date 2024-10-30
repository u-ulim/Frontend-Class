import React, { useState, useEffect } from "react";
import { useParams, useLocation, Outlet, useMatch } from "react-router-dom";
import styled from "styled-components";
// import Chart from "./Chart";
// import Price from "./Price";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinPrice } from "../api";
import { CoinInterface } from "./Coins";
import { Helmet } from "react-helmet";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Header = styled.header`
  font-size: 32px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Overview = styled.div`
  width: 600px;
  color: ${(props) => props.theme.bgColor};
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  background: ${(props) => props.theme.textColor};
  border-radius: 8px;
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Description = styled.div`
  width: 600px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 8px;
  background: ${(props) => props.theme.accentColor};
`;

const Tabs = styled.div`
  width: 600px;
  display: flex;
  gap: 10px;
`;

const Tab = styled.span<IsActive>`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background: ${(props) =>
    props.isActive ? props.theme.textColor : props.theme.accentColor};
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  padding: 8px 0px;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.textColor};
    color: ${(props) => props.theme.accentColor};
  }
`;

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: string;
      percent_from_price_ath: number;
    };
  };
}
interface IsActive {
  isActive: boolean;
}

// *Coins 컴포넌트에서 Link를 클릭했을 때, state 속성 안에 값이 담겨서 Coin 컴포넌트로 이동시키게 한 이유?

// 1) 외부 API데이터 & Parameter 값을 비교해서 UI를 출력
// 2) 많은 중요한 데이터를 state로 보내면 되지 않나?
// const Coin = () => {
//   const [loading, setLoading] = useState(true);
//   const [info, setInfo] = useState({});
//   const [priceInfo, setPriceInfo] = useState([]);
//   const { state } = useLocation() as LocationState;
//   const { coinId } = useParams<RouterParams | any>();

//   useEffect(() => {
//     (async () => {
//       const infoData = await (
//         await fetch(
//           `https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json`
//         )
//       ).json();
//       // console.log(info);
//       const priceData = await (
//         await fetch(
//           `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
//         )
//       ).json(); // 괄호 위치 수정
//       setInfo(infoData);
//       setPriceInfo(priceData);
//       console.log(info);
//     })();
//   }, [coinId]);

//   return (
//     <Container>
//       <Header>
//         <Title>{state || "Detour this page..."}</Title>
//       </Header>
//       {loading ? <Loader>Loading...</Loader> : null}
//     </Container>
//   );
// };

// export default Coin;

const Coin = () => {
  // const [loading, setLoading] = useState(true);
  // const [info, setInfo] = useState<InfoData>();
  // const [priceInfo, setPriceInfo] = useState<PriceData>();
  // state를 쓰면, 즐겨찾기 했을 때 뜨지않음.
  // 중첩 삼항 조건 연산자를 쓴다.
  const { state } = useLocation() as LocationState;
  const { coinId } = useParams<RouterParams | any>();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  console.log(priceMatch);
  console.log(chartMatch);

  // useEffect(() => {
  //   (async () => {
  //     const infoData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
  //       )
  //     ).json();
  //     const priceData = await (
  //       await fetch(
  //         `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  //       )
  //     ).json();
  //     setInfo(infoData);
  //     setPriceInfo(priceData);
  //     setLoading(false);
  //   })();
  // }, []);

  // 값을 가져온 후 데이터를 출력할 때 사용하는 방법
  const { isLoading: infoLoading, data: infoData } = useQuery<CoinInterface>({
    queryKey: ["info", coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });

  // 값을 가져온 후 데이터를 출력할 때 사용하는 방법
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["price", coinId],
    queryFn: () => fetchCoinInfo(coinId),
    refetchInterval: 5000,
  });

  const loading = infoLoading || priceLoading;

  return (
    <Container>
      <Header>
        <Helmet>
          <title>Coin</title>
        </Helmet>

        <Title>{state ? state : loading ? "Loading..." : infoData?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank : </span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol : </span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source : </span>
              <span>{infoData?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            🌈infomation of {infoData?.type} type : Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eligendi soluta, nesciunt quasi iste
            molestiae consequuntur, sit possimus in voluptatem quam sed, ullam
            aperiam? Voluptatibus quasi recusandae beatae modi nam sequi! Sunt,
            dicta quasi harum magnam nemo ratione! Vel minus autem neque quia
            repellendus placeat voluptates voluptatem? Incidunt accusantium vero
            esse voluptatibus consectetur inventore, minima magni praesentium
            optio iure omnis vitae?
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply : </span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply : </span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet />
    </Container>
  );
};

export default Coin;
