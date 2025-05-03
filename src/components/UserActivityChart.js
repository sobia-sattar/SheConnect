import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3000 },
  { name: 'Mar', users: 5000 },
  // Add more data here
];

const UserActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserActivityChart;
