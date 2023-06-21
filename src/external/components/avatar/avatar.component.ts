import { NgOptimizedImage, NgIf } from '@angular/common'
import { HttpClient, provideHttpClient } from '@angular/common/http'
import { Component, Input, inject } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'

@Component({
  selector: 'astro-avatar',
  template: ` <img *ngIf="imgSrc" [ngSrc]="imgSrc" width="400" height="200" /> `,
  standalone: true,
  styles: [
    `
      .avatar {
        vertical-align: middle;
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    `
  ],
  imports: [NgOptimizedImage, NgIf]
})
export class AvatarComponent {
  @Input() imgSrc: string = ''

  static renderProviders = [provideHttpClient()]
  static clientProviders = [AvatarComponent.renderProviders, provideAnimations()]

  private _http = inject(HttpClient)
}
