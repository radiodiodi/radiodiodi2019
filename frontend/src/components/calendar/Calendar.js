import React from 'react';
import styled from 'styled-components'
import { groupBy } from 'lodash';
import Program from './Program'
import PropTypes from 'prop-types';

import dotenv from 'dotenv';
dotenv.config();

const Button = styled.button`
  background-color: ${p => p.theme.color.pink75};
  color: ${p => p.theme.color.white100};
  padding: 0.5rem;
  font-size: 14px;
  border: none;
  min-width: 100px;

  @media screen and (max-width: 450px) {
    margin: 0.5rem 0;
  }
`;

const Controls = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  flex-direction: row;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const CalendarLink = styled.div`
  text-align: center;
`;

class Calendar extends React.Component {
  static contextTypes = {
    trans: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      intervalHandle: null,
    }
    this.incrementDay = this.incrementDay.bind(this);
    this.decrementDay = this.decrementDay.bind(this);
    this.fetchProgrammes = this.fetchProgrammes.bind(this);
  }

  incrementDay() {
    this.setState(({ today }) => ({ today: Math.min(30, today + 1) }))
  }
  decrementDay() {
    this.setState(({ today }) => ({ today: Math.max(16, today - 1) }))
  }

  async fetchProgrammes() {
    try {
      const resp = await fetch(`${process.env.REACT_APP_BACKEND_HTTP_URL}/programmes`)
      const data = await resp.json();
      if (!data || !Array.isArray(data)) {
        console.log('Programme data null. Data:');
        console.log(data);
        return;
      }

      const r = data.sort((x, y) => + Date.parse(x.start) - Date.parse(y.start));
      const grouped = groupBy(r, (x) => x.start.substr(8, 2));
      this.setState({
        today: Math.max((new Date()).getDate(), 16),
        all: grouped,
        ready: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  forceRerender = () => {
    this.forceUpdate();
  }

  componentWillMount() {
    const POLL_INTERVAL = 10000;
    const intervalHandle = window.setInterval(this.forceRerender, POLL_INTERVAL);

    this.fetchProgrammes();

    this.setState({
      intervalHandle,
    });
  }

  componentWillUnmount() {
    const { intervalHandle } = this.state;
    window.clearInterval(intervalHandle);
  }

  render() {
    const { oneDayPreview } = this.props;
    const { ready, all, today} = this.state;
    const { trans } = this.context;
    const weekdays = [
      trans.mon, trans.tue, trans.wed, trans.thu,
      trans.fri, trans.sat, trans.sun
    ];
    const dayOfTheWeek = weekdays[(today - 16) % 7];
    const calendarControls = <Controls>
      <Button onClick={this.decrementDay}>{trans.previous}</Button>
      <span>{dayOfTheWeek} {today}.4.2019</span>
      <Button onClick={this.incrementDay}>{trans.next}</Button>
    </Controls>
    if (!ready) return null;

    if (oneDayPreview) {
      if (all[today]) {
        const currentProgram = all[today].find(program => {
          const now = new Date();
          const start = new Date(Date.parse(program.start));
          const end = new Date(Date.parse(program.end));
          const hasNotEnded = end > now;
          const hasStarted = start < now;
          return hasStarted && hasNotEnded;
        });

        if (!currentProgram) {
          return null;
        }
        return <Program oneDayPreview p={currentProgram} />;
      } else {
        return null;
      }
    }

    return (
      <div>
        <h2 id="calendar">{trans.calendar}</h2>
        {calendarControls}
        {all[today] && all[today].map(p => <Program p={p} key={String(p.start) + String(today)} />)}
        {calendarControls}
        <CalendarLink>
          {trans.gcalvisiblehere}: <a href="https://calendar.google.com/calendar/b/4/r?cid=radiodiodi.fi_9g8tojuhcb2dgj82l51sr09jno@group.calendar.google.com">
            Google Calendar
          </a>
        </CalendarLink>
      </div>
    )
  }
}

export default Calendar
