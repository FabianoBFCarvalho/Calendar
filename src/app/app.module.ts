import { BrowserModule } 						from '@angular/platform-browser';
import { ErrorHandler, NgModule } 				from '@angular/core';
import { IonicApp, IonicErrorHandler, 
		 IonicModule } 							from 'ionic-angular';
import { SplashScreen } 						from '@ionic-native/splash-screen';
import { StatusBar } 							from '@ionic-native/status-bar';
import { CalendarModule, CalendarDateFormatter, 
		CalendarNativeDateFormatter, 
		DateFormatterParams }               	from 'angular-calendar';

import { MyApp } 								from './app.component';
import { HomePage } 							from '../pages/home/home';
import { MyCalendarDDD } 						from '../components/calendar';


class CustomDateFormatter extends CalendarNativeDateFormatter {
	
	  public dayViewHour({date, locale}): string {
		return new Intl.DateTimeFormat(navigator.language, {
		  hour: 'numeric',
		  minute: 'numeric'
		}).format(date);
	  }
	
	}

@NgModule({
  declarations: [
    MyApp,
	HomePage,
	MyCalendarDDD
  ],
  imports: [
    BrowserModule,
	IonicModule.forRoot(MyApp),
    CalendarModule.forRoot({
		dateFormatter: {
		  provide: CalendarDateFormatter, 
		  useClass: CustomDateFormatter
		}
	  }),
	
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule { }
