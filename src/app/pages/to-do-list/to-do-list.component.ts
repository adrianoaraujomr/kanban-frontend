import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToDoCardWS } from '../../services/to-do-card.service.ws';
import { ToDoCard } from '../../shared/models/to-do-card';

@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule],
  providers: [ToDoCardWS],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent implements OnInit {
  cardStatus = ['Backlog', 'To Do', 'Review', 'Finished'];
  cards: ToDoCard[] = [];

  constructor(private toDoCardWS: ToDoCardWS) {}

  ngOnInit(): void {
    this.toDoCardWS.list().subscribe((result) => {
      this.cards = result;
    });
  }

  filterByStatus(status: string): any[] {
    return this.cards.filter((card) => card.status == status);
  }
}
