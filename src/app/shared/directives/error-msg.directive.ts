import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  private _color:string='red';
  private _mensaje:string='Este campo es obligatorio';

  htmlElement: ElementRef<HTMLElement>;
  // @Input() color: string = 'red';
   @Input() set color(valor:string){
      this._color = valor; 
      this.setColor()
   }

  // @Input() mensaje:string='Este campo es obligatorio';
     @Input() set mensaje( valor:string ){
        this._mensaje = valor;
        this.setMensaje()
     }

     @Input() set valido( valor:boolean ){
        if( valor ){
          this.htmlElement.nativeElement.classList.add('hidden');
        }else{
          this.htmlElement.nativeElement.classList.remove('hidden');

        }
   }

  constructor( private el:ElementRef ) { 
    this.htmlElement = el;


  }

  ngOnInit(): void {
    this.setEstilo();


     this.setColor();
     this.setMensaje();
  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text')

  }

   setColor(){
    this.htmlElement.nativeElement.style.color = this._color;

   }

   setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje;

   }

}
