import { Directive, ElementRef, OnInit,Renderer2 } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  constructor(
      private element: ElementRef<any>,
      private renderer: Renderer2,
      private userService: UserService
  ){
    console.log(!this.userService.isLogged());
    console.log('oi');
  }

  ngOnInit(): void {
    //testar essas condicoes
    console.log(!this.userService.isLogged());
        !this.userService.isLogged()    
    && this.renderer.setStyle(this.element.nativeElement, 'display', 'none');


  }
}