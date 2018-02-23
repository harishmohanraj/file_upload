import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

// const data = [
//   {word: 'exciting', weight: 0.5},
//   {word: 'organization', weight: 0.7},
//   {word: '100 Days', weight: 0.2},
//   {word: 'Team', weight: 0.3},
//   {word: 'Loris Nold', weight: 0.01},
// ];

function extractChartData(props){
  let result = [];
  Object.keys(props).filter(i => props[i] > 0).map( i => result.push({'word':i, 'weight': props[i]}))
  return result;
}

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};

export default function CustomShapeBarChart(props) {
  const data = extractChartData(props.data);
  return(
    <BarChart width={600} height={300} data={data}
          margin={{top: 20, right: 30, left: 20, bottom: 5}}>
      <XAxis dataKey="word"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Bar dataKey="weight" fill="#006A4D" shape={<TriangleBar/>} label/>
    </BarChart>
  )
}