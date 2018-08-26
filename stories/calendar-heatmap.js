import React from 'react';
import { storiesOf } from '@storybook/react';
import CalendarHeatmap from '@bloveless/react-calendar-heatmap/CalendarHeatmap';

import '@bloveless/react-calendar-heatmap/css/CalendarHeatmap.css';

storiesOf('Calendar Heatmap', module)
  .add('Default', () => {
    const heatmapData = [
      {
        date: '2018-08-14',
        value: 40,
      },
      {
        date: '2018-08-15',
        value: 30,
      },
      {
        date: '2018-08-16',
        value: 50,
      },
      {
        date: '2018-08-17',
        value: 10,
      },
      {
        date: '2018-08-18',
        value: 100,
      },
      {
        date: '2018-08-19',
        value: 200,
      },
      {
        date: '2018-08-20',
        value: 250,
      },
    ];

    return (
      <CalendarHeatmap
        currentDate="2018-08-18T12:00:00"
        data={heatmapData}
        height={500}
        width={500}
      />
    );
  });
