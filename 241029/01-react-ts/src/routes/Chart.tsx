import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinsHistory } from "../api";
import ApexCharts from "react-apexcharts";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
`;

interface CoinHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Chart = () => {
  const { coinId } = useParams();
  // console.log(coinId);
  const { isLoading, data } = useQuery<CoinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinsHistory(coinId),
    //refetchInterval: 10000,
  });
  console.log(data);
  // console.log(isLoading, data);
  return (
    <Container>
      {isLoading ? (
        "Loading Chart"
      ) : (
        <ApexCharts
          width={600}
          type="line"
          series={[
            {
              name: "Price",
              data: Array.isArray(data) ? data.map((price) => price.close) : [],
            },
          ]}
          options={{
            // chart: {
            //   width: 500,
            //   height: 500,
            // },
            theme: {
              mode: "dark",
            },
            stroke: {
              width: 6,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: true,
              },
              background: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
            },
            grid: {
              show: true,
            },
            xaxis: {
              labels: {
                show: true,
              },
            },
            yaxis: {
              labels: {
                show: true,
              },
            },
            colors: ["#ffb259"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#c2e7fd"],
                stops: [0, 30],
              },
            },
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </Container>
  );
};

export default Chart;
