import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  @HostBinding('style.boxShadow')
  boxShadow = 'none';

  @HostListener('mouseenter')
  addShadow(): void {
    this.boxShadow = '0 5px 10px var(--primary)';
  }

  @HostListener('mouseleave')
  removeShadow(): void {
    this.boxShadow = 'none';
  }
}
