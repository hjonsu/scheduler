export function getAppointmentsForDay(state, day) {
  let appArr = [];
  const appToday = [];
  state.days.map((d) => {
    if (d.name === day) {
      return (appArr = d.appointments);
    }
  });

  appArr.map((element) => {
    return appToday.push(state.appointments[element]);
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

export function getInterviewersForDay(state, day) {
  let interviewerArr;
  let days = state.days;
  let result = [];
  if (days.length < 1 || !day) {
    return [];
  }
  for (let today of days) {
    if (today.name === day) {
      interviewerArr = today.interviewers;
    }
  }

  if (!interviewerArr) {
    return [];
  }

  for (const id of interviewerArr) {
    result.push(state.interviewers[id]);
  }
  return result;
}
