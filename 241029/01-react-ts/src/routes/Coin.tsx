import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Header = styled.header``;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Overview = styled.div`
  width: 600px;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 20px;
  span:first-child {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: ${(props) => props.theme.accentColor};
  }
`;

const Description = styled.p`
  background: ${(props) => props.theme.accentColor};
  width: 600px;
  padding: 10px 20px;
  margin-bottom: 10px;
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
  quootes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
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
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoData>();
  const [priceInfo, setPriceInfo] = useState<PriceData>();
  const { state } = useLocation() as LocationState;
  const { coinId } = useParams<RouterParams | any>();
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state ? state : loading ? "Loading..." : info?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank : </span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol : </span>
              <span>{info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open source: </span>
              <span>{info?.is_active ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>
          <Description>
            🎃 Information of {info?.type} type Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestiae, ad similique possimus sit
            sequi voluptatem voluptatum alias ipsa ut sed repellat! Ipsam
            corporis laborum ducimus mollitia corrupti vero nemo harum.
            Provident, at assumenda soluta debitis neque sed necessitatibus!
            Iste deleniti blanditiis perspiciatis velit nihil error nobis, neque
            praesentium eveniet est unde magni ab tempora obcaecati nisi iure
            quam adipisci officia. 🎃
          </Description>
          <Overview>
            <OverviewItem>
              <span>Total Supply: </span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
          </Overview>
          <Overview>
            <OverviewItem>
              <span>Max Supply: </span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
          </Overview>
        </>
      )}
    </Container>
  );
};
export default Coin;
