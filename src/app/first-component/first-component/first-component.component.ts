import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExampleActions } from 'src/app/store/example.actions';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  public message: string = '';

  constructor(
    private store$: Store
  ) { }

  ngOnInit(): void {
  }

  public increaseCount(): void {
    this.store$.dispatch(ExampleActions.increaseCount());
  }

  public sendMessage(): void {
    this.store$.dispatch(ExampleActions.sendMessage({message: this.message}))
  }

}
