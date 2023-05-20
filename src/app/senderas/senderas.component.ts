import { Component, OnInit } from '@angular/core';
import {AllWidgetsGQL, Widgets} from "../../generated/graphql";

@Component({
  selector: 'app-senderas',
  templateUrl: './senderas.component.html',
  styleUrls: ['./senderas.component.scss']
})
export class SenderasComponent implements OnInit {
  widgets: Widgets[] = [];
  loading = true;
  error: any;

  constructor(private allWidgetsQuery: AllWidgetsGQL) {
  }

  ngOnInit(): void {
    this.allWidgetsQuery.fetch({}, {
      fetchPolicy: "network-only"
    }).subscribe(res => {
      this.widgets = res.data && res.data.widgets
      this.loading = res.loading;
      this.error = res.errors;
    })
  }
}
