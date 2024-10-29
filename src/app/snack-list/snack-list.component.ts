import {
  Component,
  computed,
  inject,
  input
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SnackService } from '../snack.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-snack-list',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './snack-list.component.html',
  styleUrl: './snack-list.component.css',
})
export class SnackListComponent {

  filterByOption = input.required({
    alias:'filterBy',
    transform: (value:string) => value.toLowerCase()
  });

  snackService = inject(SnackService);

  snacks = this.snackService.getSnacks();

  filteredSnacks = computed(() =>
    this.snacks.filter(s => s.name.includes(this.filterByOption()) )
  );

  

  // filteredSnacks = computed(() =>
  //   this.snacks.filter((s) => s.name.includes(this.filterBy))
  // );
}
