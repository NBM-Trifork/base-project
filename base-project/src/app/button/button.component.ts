import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string = "press";
  @Input()
  primary = false;
  @Input()
  backgroundColor?: string;
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';
  @Input() clickAction = ()=> console.log("clicked");
  @Output() clickEvent: EventEmitter<any>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public onClick(event: any){
    this.clickAction();
    this.clickEvent.emit(event);
  }


  public get classes(): string[] {
    const mode = this.primary ? 'button--primary' : 'button--secondary';

    return ['button', `button--${this.size}`, mode];
  }
}
