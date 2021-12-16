import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    interviewers: {},
    appointments: {},
  });
  const setDay = (day) => setState({ ...state, day });

  function cancelInterview(id) {
    const nullAppointment = {
      ...state.appointments[id],
      interview: null,
    };
    const nullAppointments = { ...state.appointments, [id]: nullAppointment };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({ ...state, nullAppointments });
      updateSpots();
    });
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      setState({ ...state, appointments });
      updateSpots();
    });
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((res) => {
      setState((prev) => ({
        ...prev,
        days: res[0].data,
        appointments: res[1].data,
        interviewers: res[2].data,
      }));
    });
  }, []);

  const updateSpots = () => {
    axios
      .get("/api/days")
      .then((response) => {
        setState((prev) => ({ ...prev, days: response.data }));
      })
      .catch((error) => console.log(error));
  };

  return { state, setDay, bookInterview, cancelInterview };
}
