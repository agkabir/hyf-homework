const activities = [];
const usageLimit = 120;
function addActivity(activity, duration) {
  activities.push({
    date: new Date().toLocaleDateString("en-US"),
    activity: activity,
    duration: duration,
  });
}

function showStatus(activities) {
  if (activities.length > 0) {
    let totalDuration = 0;
    let countActivities = 0;
    const today = new Date().toLocaleDateString("en-US");
    for (obj of activities) {
      if (obj.date === today) {
        totalDuration += Number(obj.duration);
        countActivities += 1;
      }
    }
    const msg =
      totalDuration > usageLimit
        ? "You have reached your limit, no more smartphoning for you!"
        : `You are ${
            usageLimit - totalDuration
          } min. to reach daily usage limit`;
    console.log(
      `You have added ${countActivities} activities on ${today}. They amount to ${totalDuration} min. of usage. ${msg}`
    );
  } else console.log("Add some activities before calling showStatus");
}

function mostTimeSpent(activities) {
  let newActivities = activities.filter(function (el) {
    return el.date === new Date().toLocaleDateString("en-US");
  });
  let aggActivities = [];
  newActivities.reduce((agg, acti) => {
    if (agg[acti.activity] === undefined) {
      agg[acti.activity] = { activity: acti.activity, duration: 0 };
      aggActivities.push(agg[acti.activity]);
    }
    agg[acti.activity].duration += +acti.duration;
    return agg;
  }, {});

  let mostTime = aggActivities.reduce((acc, activity) => {
    return activity.duration > acc.duration ? activity : acc;
  });
  console.log(
    `You spent most time on ${mostTime.activity} and it is ${mostTime.duration} min.`
  );
}

addActivity("Facebook", 20);
addActivity("Youtube", 40);
addActivity("Youtube", 30);
addActivity("Twitter", 15);
showStatus(activities);
mostTimeSpent(activities);
