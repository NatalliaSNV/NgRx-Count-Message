import { Component, OnInit } from '@angular/core';
import { ExampleSelectors } from '../../store/example.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.scss']
})
export class SecondComponentComponent implements OnInit {

  public count$: Observable<number>;
  public message$: Observable<string | undefined>;

  constructor(
    private store$: Store
  ) { 
    this.count$ = this.store$.select(ExampleSelectors.count);
    this.message$ = this.store$.select(ExampleSelectors.message)
  }

  ngOnInit(): void {
  }

}
