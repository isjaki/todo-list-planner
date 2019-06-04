import React, { Component } from 'react';
import getKey from '../../helpers/getKey';
import activateSmoothScroll from '../../helpers/activateSmoothScroll';
import calendarCreator from '../../helpers/calendar';

import Lists from './Lists/Lists';
import AddList from './AddList/AddList';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class ListsManager extends Component {
    constructor(props) {
        super(props);
        this.listsRef = React.createRef();
    }
    
    state = {
        currentListTitle: '',
        pickedDate: null,
        lists: [
          { id: '5865', title: 'Test list', date: 'March 21, 2019' }
        ],
        calendarOpened: false
    }

    // set the current date in the DatePicker component
    // when the app is initially rendered
    componentDidMount() {
        const currentMonth = calendarCreator.getCurrentMonth();
        const currentDay = new Date().getDate();
        const currentYear = calendarCreator.getCurrentYear();

        const dateInCaption = `${currentMonth} ${currentDay}, ${currentYear}`;

        this.setState({
            pickedDate: dateInCaption
        });
    }

    openCalendarHandler = () => {
        this.setState({ calendarOpened: true });
    }

    closeCalendarHandler = () => {
        if (!this.state.calendarOpened) return;
    
        this.setState({ calendarOpened: false });
    }
    
    pickDateHandler = (event) => {
        event.stopPropagation();
    
        const pickedDate = event.target.className.split(' ')[0].replace(/-/g, ' ');
    
        this.setState({
            pickedDate: pickedDate,
            calendarOpened: false
        });
    }

    titleChangeHandler = (event) => {
        this.setState({ currentListTitle: event.target.value });
    }

    addNewListHandler = () => {
        const newList = {
          id: getKey(this.state.currentListTitle),
          title: this.state.currentListTitle,
          date: this.state.pickedDate
        }
    
        const updatedLists = [
          ...this.state.lists
        ];
    
        updatedLists.push(newList);
    
        this.setState({
          currentListTitle: '',
          lists: updatedLists
        });
    
        activateSmoothScroll(this.listsRef.current);
    }

    deleteListHandler = (listIndex) => {
        const updatedLists = [
          ...this.state.lists
        ];
    
        updatedLists.splice(listIndex, 1);
    
        this.setState({ lists: updatedLists });
    }

    render() {
        return (
            <Aux>
                <AddList
                    onTitleChange={this.titleChangeHandler}
                    addNewList={this.addNewListHandler}
                    title={this.state.currentListTitle}
                    date={this.state.currentListDate}
                    pickedDate={this.state.pickedDate}
                    calendarOpened={this.state.calendarOpened}
                    openCalendarHandler={this.openCalendarHandler}
                    closeCalendarHandler={this.closeCalendarHandler}
                    pickDateHandler={this.pickDateHandler} />
                <Lists
                    ref={this.listsRef} 
                    todoLists={this.state.lists}
                    onListRemove={this.deleteListHandler} />
            </Aux>
        );
    }
}

export default ListsManager;