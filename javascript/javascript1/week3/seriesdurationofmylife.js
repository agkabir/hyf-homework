const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText(seriesDurations) {
  const eightyYears = 42048000; //in minutes
  let total = 0;
  for (tvSeries of seriesDurations) {
    const percentageOfLifespan = (
      ((tvSeries.days * 24 * 60 + tvSeries.hours * 60 + tvSeries.minutes) *
        100) /
      eightyYears
    ).toFixed(3);
    total += Number(percentageOfLifespan);
    console.log(`${tvSeries.title} took ${percentageOfLifespan}% of my life`);
  }
  console.log(`In total that is ${total}% of my life`);
}

logOutSeriesText(seriesDurations);
