import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  weddingDate: Date = new Date("2025-02-22T14:00:00-05:00"); // Fecha de la boda
  timeRemaining: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date();
    this.timeRemaining = this.weddingDate.getTime() - now.getTime();

    if (this.timeRemaining > 0) {
      this.days = Math.floor(this.timeRemaining / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
    }
  }
}
