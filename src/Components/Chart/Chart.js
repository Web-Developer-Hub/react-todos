import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const data = [
        {
            name: "Active A",
            active: 4000,
            false: 2400,
            amt: 2400
        },
        {
            name: "Active B",
            active: 3000,
            false: 4398,
            amt: 2210
        },
        {
            name: "Active C",
            active: 2000,
            false: 9800,
            amt: 2290
        },
        {
            name: "Active D",
            active: 2780,
            false: 3908,
            amt: 2000
        },
        {
            name: "Active E",
            active: 10890,
            false: 4800,
            amt: 2181
        },
        {
            name: "Active F",
            active: 2390,
            false: 3800,
            amt: 8500
        },
        {
            name: "Active G",
            active: 3490,
            false: 4300,
            amt: 2100
        }
    ];


    return (
        <AreaChart style={{ maxWidth: '1250px', margin: 'auto', marginTop: '100px' }}
            width={1200}
            height={600}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="active" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="false" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="amt" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
    );
};

export default Chart;