import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss']
})
export class InputFilterComponent implements OnInit {

  @Input() searchBy: string = '';
  @Output() searchInput = new EventEmitter<string>();
  searchString = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  searchThis(value: string) {
    this.searchInput.emit(value);
}

}
