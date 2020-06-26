import { HighlightDirective } from './highlight.directive';
import { ElementRef } from '@angular/core';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
   let  el:ElementRef
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });
});
