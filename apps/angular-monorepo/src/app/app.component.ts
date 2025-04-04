import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [ RouterModule ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'cra-ggvie';
}
