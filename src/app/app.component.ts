import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BINARY CALCULATOR';

  // public textsub: string = "111";
  public text: string = "";
  private val1: number;
  private val2: number;
  private sym: string;

  Clear() {  
      // this.textsub = this.text;
      this.text = '';
  }

  DigitClick(ev: MouseEvent) {
    let symbol: string;
    symbol = (ev.target as HTMLElement).textContent;
    if (symbol === '+' || symbol === '-') {
      if (!this.text.includes('+') && !this.text.includes('-')) {
        this.sym = symbol;
        this.val1 = parseInt(this.text, 2);
        this.Clear();
      }
    } else {
      this.text += symbol;
    }
  }

  operation() {
    this.val2 = parseInt(this.text, 2);
    this.Clear();
    if (this.sym === '+') {
      this.text = (this.val1 + this.val2).toString(2);
    } else {
      this.text = (this.val1 - this.val2).toString(2);
    }
  }

  onKey() {
    console.log(this.text);
  }
  // onKey() {
  //   //this.textsub;
  //   console.log(this.textsub);
  // }


  keyboard(e: KeyboardEvent) {
    if (e.key === 'c') {
      this.Clear();
    }
    if (e.key === 'Enter') {
      this.operation();
    } else if (e.key !== '0' && e.key !== '1') {
      e.preventDefault();
    }
    if (!this.text.includes('+') && !this.text.includes('-')) {
      if (e.key === '+' || e.key === '-') {
        this.sym = e.key;
        this.val1 = parseInt(this.text, 2);
        this.text += e.key;
        this.Clear();
      }
    }
  } 
}