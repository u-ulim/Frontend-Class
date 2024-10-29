import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const CoinList = styled.ul`
  width: 700px;
`;

const Coin = styled.li`
  width: 100%;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  display: flex;
  cursor: pointer;
  a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: inherit;
    transition: color 0.3s;
    margin: 0 4px;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

// const coins = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "eth",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "hex-hex",
//     name: "Hex",
//     symbol: "Hex",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
// ];

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Img = styled.img`
  width: 35px;
  height: auto;
  margin: 0 26px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
      );
      const json = await response.json(); // await 키워드를 추가하여 JSON 데이터를 가져옴
      setCoins(json.slice(0, 101));
      setLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Coin List</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              🎁 Now Rank: {coin.rank}
              <Img
                src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
              />
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                {coin.name} Information ({coin.symbol}) &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
