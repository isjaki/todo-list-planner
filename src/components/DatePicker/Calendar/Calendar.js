import React, { Component, Fragment } from 'react';
import calendarCreator from '../../helpers/calendar';

import CalendarTable from '../../components/CalendarTable/CalendarTable';
import './Calendar.css';

class Calendar extends Component {
    state = {
        monthData: null,
        calendarCaption: null,
        prevButtonDisabled: false
    }

    componentDidMount() {
        const isPrevButtonDisabled = calendarCreator.getCurrentMonthDigit() === new Date().getMonth() &&
            calendarCreator.getCurrentYear() === new Date().getFullYear();

        this.setState({
            monthData: calendarCreator.getArrayWithNewMonth(),
            calendarCaption: `${calendarCreator.getCurrentMonth()}, ${calendarCreator.getCurrentYear()}`,
            prevButtonDisabled: isPrevButtonDisabled
        });
    }

    switchToNextMonth = () => {
        const updatedMonthData = calendarCreator.getDataForNextMonth();
        const updatedCalendarCaption = `${calendarCreator.getCurrentMonth()}, ${calendarCreator.getCurrentYear()}`;

        this.setState({
            monthData: updatedMonthData,
            calendarCaption: updatedCalendarCaption,
            prevButtonDisabled: false
        });
    }

    switchToPrevMonth = () => {
        const updatedMonthData = calendarCreator.getDataForPreviousMonth();
        const updatedCalendarCaption = `${calendarCreator.getCurrentMonth()}, ${calendarCreator.getCurrentYear()}`;
        const isPrevButtonDisabled = calendarCreator.getCurrentMonthDigit() === new Date().getMonth() &&
            calendarCreator.getCurrentYear() === new Date().getFullYear();

        this.setState({
            monthData: updatedMonthData,
            calendarCaption: updatedCalendarCaption,
            prevButtonDisabled: isPrevButtonDisabled
        });
    }

    render() {
        let calendarTable = null;

        if (this.state.monthData) {
            calendarTable = <CalendarTable 
                monthData={this.state.monthData}
                clicked={this.props.dateClicked} />
        }

        return (
            <Fragment>
                <div className="Calendar__caption">
                    <button 
                        onClick={this.switchToPrevMonth}
                        className="Calendar__prev-button"
                        disabled={this.state.prevButtonDisabled}
                    ><i className="fas fa-chevron-left"></i></button>
                    <span>{this.state.calendarCaption}</span>
                    <button 
                        onClick={this.switchToNextMonth}
                        className="Calendar__next-button"
                    ><i className="fas fa-chevron-right"></i></button>
                </div>
                <div className="Calendar">
                    <div className="Calendar__header">Mon</div>
                    <div className="Calendar__header">Tue</div>
                    <div className="Calendar__header">Wed</div>
                    <div className="Calendar__header">Thu</div>
                    <div className="Calendar__header">Fri</div>
                    <div className="Calendar__header">Sat</div>
                    <div className="Calendar__header">Sun</div>
                    {calendarTable}
                </div>
            </Fragment>
        )
    }
}

export default Calendar;