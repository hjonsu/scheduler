export function getAppointmentsForDay(state, day) {
  let appArr = [];
  const appToday = [];
  state.days.map((element) => {
    if (element.name === day) {
      appArr = element.appointments;
    }
  });

  appArr.map((element) => {
    appToday.push(state.appointments[element]);
  });

  return appToday;
}
