import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  GetObservationNameGQL,
  Insert_Single_ObservationGQL,
  UpdateObservationNameGQL
} from "../../../generated/graphql";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-observation-form',
  templateUrl: './observation-form.component.html',
  styleUrls: ['./observation-form.component.scss']
})
export class ObservationFormComponent implements OnInit {

  constructor(
    private insertObservation: Insert_Single_ObservationGQL,
    private getObservationName: GetObservationNameGQL,
    private updateObservationName: UpdateObservationNameGQL,
    private route: ActivatedRoute,
    private router: Router) {
  }

  observationName = new FormControl('');
  observationId: number | null = null
  redirectToList = () => this.router.navigateByUrl("/natural-observations")

  update() {
    if (this.observationId) {
      this
        .updateObservationName
        .mutate({observation_id: this.observationId, name: this.observationName.value})
        .subscribe(this.redirectToList)
    }
  }

  insert() {
    this
      .insertObservation
      .mutate({object: {name: this.observationName.value}})
      .subscribe(this.redirectToList);
  }

  loadExistingObservation(observationId: number) {
    this
      .getObservationName
      .fetch({observation_id: observationId}, {fetchPolicy: "network-only"})
      .subscribe(obs => {
        if (obs.data.observations_by_pk) {
          this.observationName.setValue(obs.data.observations_by_pk.name)
        }
      })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramsObservationId = params.get('observationId')
      if (paramsObservationId) {
        this.observationId = parseInt(paramsObservationId, 10)
        this.loadExistingObservation(this.observationId)
      }
    });
  }
}
