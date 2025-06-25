import { TestBed } from '@angular/core/testing';
import { CarComponent } from './car.component';
import {AppComponent} from '../app.component';

describe('CarComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarComponent],
    }).compileComponents();
  });

  it('should create component instance', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should render h1 tag with title 'My car header'`, () => {
    const fixture = TestBed.createComponent(CarComponent);
    fixture.detectChanges();
    const component = fixture.debugElement.nativeElement;
    const text = component.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });

});
