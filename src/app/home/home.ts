import { Component } from '@angular/core';
import { Resolution } from '../models/resolution';
import { Section } from "../section/section";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [Section, CommonModule],
})
export class Home {

  resolutions: Resolution[] = [
    {
      id: '1',
      title: 'Read 12 Books',
      description: 'Read one book per month',
      currentProgress: 2,
      targetProgress: 12,
      category: 'Personal Growth',
      createdDate: new Date()
    },
    {
      id: '2',
      title: 'Exercise 150 Days',
      description: 'Work out at least 30 minutes',
      currentProgress: 15,
      targetProgress: 150,
      category: 'Health',
      createdDate: new Date()
    }
  ];

  onProgressChange(id: string, newProgress: number): void {
    const resolution = this.resolutions.find(r => r.id === id);
    if (resolution) {
      resolution.currentProgress = newProgress;
    }
  }

  addResolution(resolution: Resolution): void {
    this.resolutions.push(resolution);
  }

  deleteResolution(id: string): void {
    this.resolutions = this.resolutions.filter(r => r.id !== id);
  }
}
