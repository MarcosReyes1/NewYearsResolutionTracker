import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resolution } from '../models/resolution';
 
@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {

  @Input() resolution!: Resolution;
  @Output() progressChanged = new EventEmitter<{id: string, progress: number}>();
  @Output() deleteRequested = new EventEmitter<string>();

  increase(): void {
    if (this.resolution.currentProgress < this.resolution.targetProgress) {
      const newProgress = this.resolution.currentProgress + 1;
      this.progressChanged.emit({
        id: this.resolution.id,
        progress: newProgress
      });
    }
  }

  decrease(): void {
    if (this.resolution.currentProgress > 0) {
      const newProgress = this.resolution.currentProgress - 1;
      this.progressChanged.emit({
        id: this.resolution.id,
        progress: newProgress
      });
    }
  }

  getProgressPercentage(): number {
    return (this.resolution.currentProgress / this.resolution.targetProgress) * 100;
  }

  delete(): void {
    this.deleteRequested.emit(this.resolution.id);
  }
}
