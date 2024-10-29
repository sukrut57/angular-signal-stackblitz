import {
  Component,
  computed,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SnackService } from '../snack.service';
import { Snack } from '../snack/snack.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-snack-list',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './snack-list.component.html',
  styleUrl: './snack-list.component.css',
})
export class SnackListComponent implements OnChanges {
  @Input() filterBy = '';
  filteredSnacks: Snack[] = [];

  snacks = this.snackService.getSnacks();

  constructor(private snackService: SnackService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredSnacks = this.snacks.filter((s) =>
      s.name.includes(this.filterBy)
    );
  }

  // filteredSnacks = computed(() =>
  //   this.snacks.filter((s) => s.name.includes(this.filterBy))
  // );
}
