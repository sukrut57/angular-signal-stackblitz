import { Injectable, signal } from '@angular/core';
import { Snack, SNACKS } from './snack/snack.model';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  private snacks = signal<Snack[]>(SNACKS);
  constructor() {}

  public getSnacks() {
    return this.snacks();
  }
}
