import { Component }        				from '@angular/core';
import { CalendarEvent } 					from 'calendar-utils';

@Component({
	selector: 'calendario',
	templateUrl: 'calendar.html'
})
export class MyCalendarDDD {

    view: string = 'day';
    viewDate: Date = new Date();
    public colors: any = {
        primary: '#FF0055',
        secondary: '#FF0055'
    };  

    events: CalendarEvent[] = [
        {
            start: new Date ("2017-12-05T08:00:18.372000"),
            end: new Date("2017-12-05T09:00:18.372000"),
            title: "Apresentação",
            color: this.colors
        },
        {  
            start: new Date("2017-12-05T10:00:18.372000"),
            end: new Date("2017-12-05T11:00:18.372000"),
            title: "Reunião",
            color: this.colors
            
        },
        {  
            start: new Date("2017-12-05T00:00:18.372000"),
            end: new Date("2017-12-05T02:00:18.372000"),
            title: "Teste",
            color: this.colors 
        }
    ];
}
