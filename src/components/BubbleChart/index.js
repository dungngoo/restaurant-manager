import { CirclePackingCanvas } from '@nivo/circle-packing';

function BubbleChart() {
    const data = [
        {
            id: 'Root',
            children: [
                { id: 'Item 1', value: 100 },
                { id: 'Item 2', value: 200 },
                { id: 'Item 3', value: 150 },
                { id: 'Item 4', value: 50 },
                { id: 'Item 5', value: 75 },
            ],
        },
    ];

    return (
        <CirclePackingCanvas
            data={data}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            identity="id"
            value="value"
            colors={{ scheme: 'category10' }}
            labelSkipRadius={12}
            borderWidth={2}
            padding={6}
            enableLabel={true}
            labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        />
    );
}

export default BubbleChart;