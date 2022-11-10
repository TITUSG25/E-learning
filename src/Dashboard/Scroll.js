import React from "react";
import { Paper } from "@mui/material";
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

const color=()=>{

}
  
  
const Scroll = () => {
  
// Sample data
const data = [
  { argument: 'jan', value: '10%'},
  { argument: 'Feb', value: '50%' },
  { argument: 'Mar', value: '30%' },
  { argument: 'Apr', value: '70%' },
  { argument: 'May', value: '90%' },
  {argument: 'Jun', value: '100%'},
  
];

return (
    <Paper>
    <Chart
      data={data}
      
    >
      <ArgumentAxis />
      <ValueAxis />
  
      <BarSeries valueField="value" argumentField="argument"  />
    </Chart>
  </Paper>
);
}
  
export default Scroll;