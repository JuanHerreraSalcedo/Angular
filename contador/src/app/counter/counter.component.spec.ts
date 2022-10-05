import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonAddComponent } from "./button-add/button-add.component";
import {CounterComponent} from "./counter.component"
describe("CounterComponent Unit", () =>{

    beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [CounterComponent],
        }).compileComponents();
      });

    it("Se debe crear el componente counter", () =>{
       const fixture = TestBed.createComponent(CounterComponent);
       
       expect(fixture.componentInstance).toBeTruthy();
    });

    it("Debe crear el texto counter:0", () =>{
       const fixture = TestBed.createComponent(CounterComponent);

       fixture.detectChanges();

       const compiled: HTMLElement = fixture.nativeElement;

      //  console.log(compiled)
       
       expect(compiled.querySelector("h1")?.textContent).toEqual("Contador: 0");
      //  expect(fixture.componentInstance).toBeTruthy();
    });
      
    it("Valor inicial del contador es 0", () => {

        const counter = new CounterComponent() 

        expect(counter.contador).toBe(0);
    });
});


describe("Integration Testing", () =>{

  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  
   


  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent, ButtonAddComponent],
    }).compileComponents();
  });

  beforeEach(() =>{
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("evento click", ()=> {
    const compiled: HTMLElement = fixture.nativeElement;

    // console.log(compiled);

    const counterValue = compiled.querySelector("h1")!;

    const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector("#add");

    btnAdd.click();

    fixture.autoDetectChanges();

    expect(counterValue.textContent).toEqual("Contador: 1")
  })
});

