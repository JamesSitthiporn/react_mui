import * as React from "react";
import { Button, Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
/*
  const bull = (
    <Box
      sx={{
        display: "flex",
        flexDirection: {xs:"column",md:"row"},
        mx: "2px",
        transform: "scale(0.8)",
      }}
    ></Box>
  );
*/
  const card = (
      <Typography>Word of the Day1</Typography>
  );

  return (
    <>
      <Header />
      <h1>ss</h1>
      <BarChart
        series={[
          { data: [35, 44, 24, 34] },
          { data: [51, 6, 49, 30] },
          { data: [15, 25, 30, 50] },
          { data: [60, 50, 15, 25] },
        ]}
        height={290}
        xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
      />
      <Button>Button</Button>
      <Typography variant="h2" component="div">
        Overview
      </Typography>

      <Box sx={{ display: "flex", flexDirection: {xs:"column",md:"row"},justifyContent:"space-between" }}>
        <Paper elevation={3} sx={{width:{md:320}}}>
          <Box sx={{ m: 3 }}>{card}</Box>
        </Paper>
        <Paper elevation={3} sx={{width:{md:320}}}>
          <Box sx={{ m: 3 }}>{card}</Box>
        </Paper>
        <Paper elevation={3} sx={{width:{md:320}}}>
          <Box sx={{ m: 3 }}>{card}</Box>
        </Paper>
      </Box>
    </>
  );
}

export default App;
