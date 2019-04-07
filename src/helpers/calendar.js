//const DAYS_OF_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

class Calendar {
    constructor(options) {
        this._year = options.year;
        this._month = options.month;
    }

    getDataForNextMonth() {
        this._year = this._moveToNextMonth().year;
        this._month = this._moveToNextMonth().month;

        return this.getArrayWithNewMonth();
    }

    getDataForPreviousMonth() {
        this._year = this._moveToPreviousMonth().year;
        this._month = this._moveToPreviousMonth().month;

        return this.getArrayWithNewMonth();
    }

    // function that returns a new array with data for a new (next) month (day, month, year),
    // as well as the data for previous or next month if there are empty cells (the number of cells is 42 (7 * 6))
    getArrayWithNewMonth() {
        const monthData = new Array(42);
        const firstWeekdayOfMonth = this._getFirstWeekdayOfMonth(this._year, this._month);
        const numberOfDaysInMonth = this._getNumberOfDaysInMonth(this._year, this._month);

        let currentDate = 0;
        let currentMonth = this._month;
        let currentYear = this._year;
        let monthClass = 'current-month';

        for (let i = firstWeekdayOfMonth; i < 42; i++) {

            if (currentDate >= numberOfDaysInMonth) {
                currentDate = 0;
                currentMonth = this._moveToNextMonth().month;
                currentYear = this._moveToNextMonth().year;
                monthClass = 'next-month';
            }

            currentDate = currentDate + 1;

            const date = {
                day: currentDate,
                month: MONTHS[currentMonth],
                monthDigit: currentMonth,
                year: currentYear,
                monthClass: monthClass
            };

            monthData[i] = date;
        }

        if (firstWeekdayOfMonth !== 0) {
            const month = this._moveToPreviousMonth().month;
            const year = this._moveToPreviousMonth().year;
            let lastDayOfMonth = this._getNumberOfDaysInMonth(year, month);
            monthClass = 'previous-month'

            for (let i = firstWeekdayOfMonth - 1; i >=0; i--) {
                monthData[i] = {
                    day: lastDayOfMonth,
                    month: MONTHS[month],
                    monthDigit: month,
                    year: year,
                    monthClass: monthClass
                }

                lastDayOfMonth = lastDayOfMonth - 1;
            }
        }

        return monthData;
    }

    _getFirstWeekdayOfMonth(year, month) {
        let firstWeekday = new Date(year, month, 1).getDay();

        // changing sunday from 0 to 6, the other weekdays 
        // become one number lower respectively
        return firstWeekday === 0 ? 6 : firstWeekday - 1;
    }

    _getNumberOfDaysInMonth(year, month) {
        // The day with the given value of 0 gives the last day of the previous month.
        return new Date(year, month + 1, 0).getDate();
    }

    _moveToNextMonth() {
        let month = this._month + 1;
        let year = this._year;

        if (month > 11) {
            month = 0;
            year = year + 1;
        }

        return { month, year };
    }

    _moveToPreviousMonth() {
        let month = this._month - 1;
        let year = this._year;

        if (month < 0) {
            month = 11;
            year = this._year - 1;
        }

        return { month, year };
    }
    
    getCurrentYear() {
        return this._year;
    }
  
    getCurrentMonth() {
        return MONTHS[this._month];
    }

    getCurrentMonthDigit() {
        return this._month;
    }
}

const options = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
}

const calendar = new Calendar(options);

export default calendar;