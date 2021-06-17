import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments-view',
  templateUrl: './comments-view.component.html',
  styleUrls: ['./comments-view.component.scss']
})
export class CommentsViewComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      console.log(data)
    });
  }

}
