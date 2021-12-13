export function getAppointmentsForDay(state, day) {
  let appArr = [];
  const appToday = [];
  state.days.map((d) => {
    if (d.name === day) {
      appArr = d.appointments;
    }
  });

  appArr.map((element) => {
    appToday.push(state.appointments[element]);
  });

  return appToday;
}

export function getInterview(state, interview) {
  let interviewersObj = state.interviewers;
  let result = {};

  if (!interviewersObj || !interview) {
    return null;
  }

  for (const key in interviewersObj) {
    if (interviewersObj[key].id === interview.interviewer) {
      result.interviewer = interviewersObj[key];
      result.student = interview.student;
    }
  }

  return result;
}
