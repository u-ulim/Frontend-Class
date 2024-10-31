// import React from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
// import { fetchCoinsHistory } from "../api";
// import ApexCharts from "react-apexcharts";
// import styled from "styled-components";

// const Container = styled.div`
//   margin-top: 10px;
// `;

// interface CoinHistory {
//   time_open: string;
//   time_close: string;
//   open: number;
//   high: number;
//   low: number;
//   close: number;
//   volume: number;
//   market_cap: number;
// }

// const Chart = () => {
//   const { coinId } = useParams();
//   // console.log(coinId);
//   const { isLoading, data } = useQuery<CoinHistory[]>({
//     queryKey: ["history", coinId],
//     queryFn: () => fetchCoinsHistory(coinId),
//     //refetchInterval: 10000,
//   });
//   console.log(data);
//   // console.log(isLoading, data);
//   return (
//     <Container>
//       {isLoading ? (
//         "Loading Chart"
//       ) : (
//         <ApexCharts
//           width={600}
//           type="line"
//           series={[
//             {
//               name: "Price",
//               data: Array.isArray(data) ? data.map((price) => price.close) : [],
//             },
//           ]}
//           options={{
//             // chart: {
//             //   width: 500,
//             //   height: 500,
//             // },
//             theme: {
//               mode: "dark",
//             },
//             stroke: {
//               width: 6,
//               curve: "smooth",
//             },
//             chart: {
//               toolbar: {
//                 show: true,
//               },
//               background: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%)",
//             },
//             grid: {
//               show: true,
//             },
//             xaxis: {
//               labels: {
//                 show: true,
//               },
//             },
//             yaxis: {
//               labels: {
//                 show: true,
//               },
//             },
//             colors: ["#ffb259"],
//             fill: {
//               type: "gradient",
//               gradient: {
//                 gradientToColors: ["#c2e7fd"],
//                 stops: [0, 30],
//               },
//             },
//             tooltip: {
//               y: {
//                 formatter: (value) => `$${value.toFixed(2)}`,
//               },
//             },
//           }}
//         />
//       )}
//     </Container>
//   );
// };

// export default Chart;

import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinsHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

const Container = styled.div`
  margin-top: 10px;
`;

interface coinHistory {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface Example {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Chart = () => {
  const isDark = useRecoilValue(isDarkAtom);

  const { coinId } = useParams();
  const { isLoading, data } = useQuery<coinHistory[]>({
    queryKey: ["history", coinId],
    queryFn: () => fetchCoinsHistory(coinId),
  });

  const chartData = Array.isArray(data) && data.length > 0 ? data : [];

  return (
    <Container>
      {isLoading ? (
        "Loading Chart..."
      ) : chartData.length > 0 ? (
        <ApexChart
          width={600}
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map((price) => Number(price.close)) || [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            stroke: {
              width: 4,
              curve: "smooth",
            },
            chart: {
              toolbar: {
                show: true,
              },
              background: "transparent",
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
                style: {
                  fontSize: "12px",
                },
                formatter: (value) => `${value.toFixed(3)}`,
              },
            },
            colors: ["#ffeaa7"],
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#a29bfe"],
                stops: [0, 100],
              },
            },
          }}
        />
      ) : (
        ""
      )}
    </Container>
  );
};

export default Chart;
