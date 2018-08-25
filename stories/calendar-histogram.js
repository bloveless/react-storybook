import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CalendarHeatmap from '@bloveless/react-calendar-heatmap/src/CalendarHeatmap';
import CalendarHistogram from '../src/CalendarHistogram';

storiesOf('Calendar Histogram', module)
  .add('Default', () => (
    <CalendarHistogram height={500} width={500} />
  ));
