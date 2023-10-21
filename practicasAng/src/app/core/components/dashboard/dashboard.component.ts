import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber, delay, filter, fromEvent, map, mapTo, of, pipe, scan, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //OBSERVABLES

  constructor() {}

  ngOnInit(): void {
    const clicks = fromEvent(document.getElementsByClassName("card-body") , 'click');
    const greetings = clicks.pipe(mapTo('Hi on click'));
   // greetings.subscribe((data) => console.log(data));
    //LOS OBSERVER LOS UTILIZAMOS CUANDO QUEREMOS OBTENER ALGO ESEPCIFICO DE LOS DATOS
    //UNA VEZ QUE NOS SUSCRIBIMOS A NUESTRO OBSERVABLE .subscribe(myObserver);
    const myObserver: Observer<any> = {
      next: (x) => {
        // if (isNaN(x)) {
        //   //console.log(`${x} no es un numero`);
        // } else //console.log(x + 10);
      },
      error: (err: any) => {
        //console.error(err);
      },
      complete() {
        //console.log('complete');
      },
    };

    const myObservable = new Observable((susbscriber) => {
      susbscriber.next('F');
      susbscriber.next(20);
      susbscriber.next(30);
      susbscriber.next('R');
      susbscriber.error('Este es un error');
      susbscriber.next('5');
    });

    // myObservable.subscribe(myObserver);
    // myObservable.subscribe(data => {
    //   console.log('data: ', data)
    // });
    myObservable
      .pipe(
        filter((data: any) => isNaN(data)),
        map((data: any) => {
          // if (isNaN(data)) {
          //   //console.log(`${data} no es un numero`);
          // } else console.log(data + 10);
        })
      )
      .subscribe();

  //OPERATORS - cadena de suscripciones
  const sourceObservable = of("World")
  .pipe(
    // map(x => `Hello ${x}!!\n`),
    // filter(x => x.includes("Hello")),
    // delay(3000),
    // tap(t => console.log(t + "TAP")),
    // scan((acc, one) => acc + one, "Holux "),
  );

  //sourceObservable.subscribe(console.log);

  const fakeData = [
    {a: 1},
    {a: 2},
    {a: 3},
    {a: 4}
  ];

  //OPERATOR PERSONALIZADO
  const toggle = () =>
  pipe(
    scan((acc: any, value : any) => {
      const newValue = value.a;
      if (newValue % 2 == 0) {
        acc.push(newValue);
      }
      return acc;
    }, []),
    //tap((t) => console.log(t))
  );

  const otherObservable = of(...fakeData)
  .pipe(
    toggle(),
    map(x => `Hello ${x}`)
  )

  //otherObservable.subscribe(console.log);

  }//FIN ONINIT

}
