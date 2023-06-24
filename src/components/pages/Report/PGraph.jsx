import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'text',
      uv: 27,
      pv: 52,
      amt: 24,
    },
    {
      name: 'text',
      uv: 30,
      pv: 45,
      amt: 22,
    },
    {
      name: 'text',
      uv: 20,
      pv: 98,
      amt: 20,
    },
  ];

export default class PGraph extends PureComponent {
  

  render() {
    return (
      <ResponsiveContainer width="100%" height={270}>
        <BarChart
          width={350}
          height={900}
          data={data}
          margin={{
            top: 1,
            right: 1,
            left: 1,
            bottom: 1,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis style={{border: 'none'}}/>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="pv" fill="#3969DC" />
          <Bar dataKey="uv" fill="#00D43D" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}