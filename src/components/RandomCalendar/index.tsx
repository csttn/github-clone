import React from 'react';
import HeatMap from 'react-calendar-heatmap'

import { subYears, isBefore, isSameDay, addDays } from 'date-fns'

import { Container } from './styles';


type HeatmapValue = {
  date: Date;
  count: number
}

const RandomCalendar: React.FC = () => {
  const endDate = new Date();
  const startDate = subYears(new Date(), 1)

  return (
    <Container>
      <div className="wrapper">
        <HeatMap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatmapsValues(startDate, endDate)}
          gutterSize={3.5}
          classForValue={(item: HeatmapValue) => {

            let clampedCount = 0;

            if (item !== null) {
              clampedCount = Math.max(item.count, 0);
              clampedCount = Math.min(item.count, 4);
            }

            return `scale-${clampedCount}`
          }}
          showWeekdayLabels
        />
      </div>

      <span>Calendario Ramdomico</span>
    </Container>
  );
}


const generateHeatmapsValues = (startDate: Date, endDate: Date) => {

  const values: HeatmapValue[] = [];

  // passando a data de inicio do loop ( 1 ano atras)
  let currentDate = startDate

  //percorrendo da data incial ate a data atual
  while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {

    //gerando valor randomico de 0 a 4
    const count = Math.random() * 4;

    // setando valor ramdomico no array, com a data e o valor de count
    // Math.round arredonda o valor do count
    values.push({ date: currentDate, count: Math.round(count) })

    currentDate = addDays(currentDate, 1)
  }

  return values;

}

export default RandomCalendar;