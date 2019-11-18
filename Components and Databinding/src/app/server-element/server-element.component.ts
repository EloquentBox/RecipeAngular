import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  ViewChild, ElementRef, AfterViewInit, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() {
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called!');
    console.log(this.header.nativeElement.textContent);
    console.log('Text content of Paragraph' + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log('ndDoCheck Called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContent called!');
    console.log('Text content of Paragraph' + this.paragraph.nativeElement.textContent);

  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit Called!');
    console.log(this.header.nativeElement.textContent);

  }
  ngAfterContentChecked(): void {
    console.log('afterContent Called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestory Called')
  }
}
