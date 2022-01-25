import {Component, EventEmitter, Output, Input, ViewChild, ElementRef} from '@angular/core';
import {trigger, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'kite-demo-source-code-popup',
  template: require('./source-code-popup.component.html'),
  styles: [require('./source-code-popup.component.scss')],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('300ms', style({opacity: 0}))
      ])
    ])
  ]
})
export class DemoSourceCodePopupComponent {
  isTextCopied = false;
  @Input() title: string;
  @Input() data: any;
  @Output() onConfirm = new EventEmitter<void>();
  @ViewChild('sourceCode') private sourceCodeEl: ElementRef;

  confirm() {
    const sourceCode = this.sourceCodeEl.nativeElement.innerText;
    const textArea = document.createElement('textarea');
    textArea.textContent = sourceCode;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    this.isTextCopied = true;
    setTimeout(() => this.isTextCopied = false, 2000);
  }
}