import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

function AreaChartDemo() {
    return (
        <AreaChart width={600} height={400} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="amt" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
    );
}

export default AreaChartDemo;
