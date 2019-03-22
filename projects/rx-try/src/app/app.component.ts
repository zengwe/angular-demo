import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent, from } from "rxjs";
import { take, distinctUntilChanged } from 'rxjs/operators';
import { promise } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  constructor(public ele: ElementRef) {
    
  }
  ngAfterViewInit() {
    let btnEle = this.ele.nativeElement.querySelector('.btn');
    distinctUntilChanged()
    console.log(fromEvent(btnEle, 'click'));
    fromEvent(btnEle, 'click')
    .pipe(take(1))
    .subscribe((e: Event)=>{
      console.log(e)
    });
    let pro = new Promise(resolve=>{
      setTimeout(()=>{
        resolve();
      },4000)
    });
    let obs = from(pro);
    obs.subscribe(res=>{
      console.log('get data1')
    });
    obs.subscribe(res=>{
      console.log('get data2')
    });
    setTimeout(()=>{
      obs.subscribe(res=>{
        console.log('get data3')
      });
    },3000);
    let obs2 = from(this.promisefunc());
    obs2.subscribe(res=>{
      console.log('get data from obs2')
    });
  }
  async promisefunc() {
    let res = await new Promise(resolve=>{
      setTimeout(()=>{ resolve()}, 2000)
    });
    return res;
  }
}
