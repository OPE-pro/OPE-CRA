import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AgentsStore } from './agents.store';

@Component({
  selector: 'lib-agents',
  imports: [CommonModule, RouterModule],
  templateUrl: './agents.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentsComponent implements OnInit {
  store = inject(AgentsStore);

  ngOnInit(): void {
    this.store.loadAll();
  }
}
