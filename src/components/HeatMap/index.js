import React from 'react';
import Heatmap from 'react-heatmap-grid';

const data = [
    [0, 0, 5],
    [0, 1, 10],
    [0, 2, 20],
    [1, 0, 30],
    [1, 1, 40],
    [1, 2, 50],
    [2, 0, 60],
    [2, 1, 70],
    [2, 2, 80],
];

const xLabels = ['Jan', 'Feb', 'Mar'];
const yLabels = ['Mon', 'Tue', 'Wed'];

const MyHeatmap = () => {
    return (
        <Heatmap
            xLabels={xLabels}
            yLabels={yLabels}
            data={data}
            xLabelWidth={60}
            cellStyle={(background, value, min, max, data, x, y) => ({
                background: `rgb(0, 151, 230, ${1 - (max - value) / (max - min)})`,
                fontSize: '11px',
            })}
            cellRender={(value) => value && `${value}%`}
            title="My Heatmap"
            height={200}
        />
    );
};

export default MyHeatmap;
