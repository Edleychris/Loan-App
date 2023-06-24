// import React from 'react';
import chartstyle from './PChart.module.css'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 500 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 600 },
];
const COLORS = ['#44D307', '#D30744', '#0744D3'];

const PChart = () => {
  return (
    <ResponsiveContainer width={900} height={300} className={chartstyle.chart}>
      <PieChart>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={90}
          // fill="#8884d8"
          // paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie> */}
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PChart;
