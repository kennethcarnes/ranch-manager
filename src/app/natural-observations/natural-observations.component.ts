import { Component, OnInit } from '@angular/core';
import {AllObservationsGQL, Delete_ObservationGQL, Observations} from "../../generated/graphql";

@Component({
  selector: 'app-natural-observations',
  templateUrl: './natural-observations.component.html',
  styleUrls: ['./natural-observations.component.scss']
})
export class NaturalObservationsComponent implements OnInit {
  observations: Pick<Observations, 'observation_id' | 'created_at' | 'name'>[] = [];
  loading = true;
  error: any;

  constructor(private allObservationsQuery: AllObservationsGQL, private deleteObservationMutation: Delete_ObservationGQL) {
  }

  deleteObservation(observation_id: number) {
    this.deleteObservationMutation
      .mutate({observation_id})
      .subscribe(_ => this.fetchObservations());
  }


  ngOnInit(): void {
    this.fetchObservations()
  }

  fetchObservations(): void {
    this.allObservationsQuery.fetch({}, {fetchPolicy: "network-only"})
      .subscribe(res => {
        this.observations = res.data && res.data.observations
        this.loading = res.loading;
        this.error = res.errors;
      })
  }
}
