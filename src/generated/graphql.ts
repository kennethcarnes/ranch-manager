import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};



/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "observations" */
  delete_observations?: Maybe<Observations_Mutation_Response>;
  /** delete single row from the table: "observations" */
  delete_observations_by_pk?: Maybe<Observations>;
  /** delete data from the table: "widgets" */
  delete_widgets?: Maybe<Widgets_Mutation_Response>;
  /** delete single row from the table: "widgets" */
  delete_widgets_by_pk?: Maybe<Widgets>;
  /** insert data into the table: "observations" */
  insert_observations?: Maybe<Observations_Mutation_Response>;
  /** insert a single row into the table: "observations" */
  insert_observations_one?: Maybe<Observations>;
  /** insert data into the table: "widgets" */
  insert_widgets?: Maybe<Widgets_Mutation_Response>;
  /** insert a single row into the table: "widgets" */
  insert_widgets_one?: Maybe<Widgets>;
  /** update data of the table: "observations" */
  update_observations?: Maybe<Observations_Mutation_Response>;
  /** update single row of the table: "observations" */
  update_observations_by_pk?: Maybe<Observations>;
  /** update data of the table: "widgets" */
  update_widgets?: Maybe<Widgets_Mutation_Response>;
  /** update single row of the table: "widgets" */
  update_widgets_by_pk?: Maybe<Widgets>;
};


/** mutation root */
export type Mutation_RootDelete_ObservationsArgs = {
  where: Observations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Observations_By_PkArgs = {
  observation_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_WidgetsArgs = {
  where: Widgets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Widgets_By_PkArgs = {
  widget_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ObservationsArgs = {
  objects: Array<Observations_Insert_Input>;
  on_conflict?: Maybe<Observations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Observations_OneArgs = {
  object: Observations_Insert_Input;
  on_conflict?: Maybe<Observations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WidgetsArgs = {
  objects: Array<Widgets_Insert_Input>;
  on_conflict?: Maybe<Widgets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Widgets_OneArgs = {
  object: Widgets_Insert_Input;
  on_conflict?: Maybe<Widgets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ObservationsArgs = {
  _inc?: Maybe<Observations_Inc_Input>;
  _set?: Maybe<Observations_Set_Input>;
  where: Observations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Observations_By_PkArgs = {
  _inc?: Maybe<Observations_Inc_Input>;
  _set?: Maybe<Observations_Set_Input>;
  pk_columns: Observations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WidgetsArgs = {
  _inc?: Maybe<Widgets_Inc_Input>;
  _set?: Maybe<Widgets_Set_Input>;
  where: Widgets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Widgets_By_PkArgs = {
  _inc?: Maybe<Widgets_Inc_Input>;
  _set?: Maybe<Widgets_Set_Input>;
  pk_columns: Widgets_Pk_Columns_Input;
};

/** columns and relationships of "observations" */
export type Observations = {
  __typename?: 'observations';
  created_at: Scalars['timestamptz'];
  name: Scalars['String'];
  observation_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "observations" */
export type Observations_Aggregate = {
  __typename?: 'observations_aggregate';
  aggregate?: Maybe<Observations_Aggregate_Fields>;
  nodes: Array<Observations>;
};

/** aggregate fields of "observations" */
export type Observations_Aggregate_Fields = {
  __typename?: 'observations_aggregate_fields';
  avg?: Maybe<Observations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Observations_Max_Fields>;
  min?: Maybe<Observations_Min_Fields>;
  stddev?: Maybe<Observations_Stddev_Fields>;
  stddev_pop?: Maybe<Observations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Observations_Stddev_Samp_Fields>;
  sum?: Maybe<Observations_Sum_Fields>;
  var_pop?: Maybe<Observations_Var_Pop_Fields>;
  var_samp?: Maybe<Observations_Var_Samp_Fields>;
  variance?: Maybe<Observations_Variance_Fields>;
};


/** aggregate fields of "observations" */
export type Observations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Observations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "observations" */
export type Observations_Aggregate_Order_By = {
  avg?: Maybe<Observations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Observations_Max_Order_By>;
  min?: Maybe<Observations_Min_Order_By>;
  stddev?: Maybe<Observations_Stddev_Order_By>;
  stddev_pop?: Maybe<Observations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Observations_Stddev_Samp_Order_By>;
  sum?: Maybe<Observations_Sum_Order_By>;
  var_pop?: Maybe<Observations_Var_Pop_Order_By>;
  var_samp?: Maybe<Observations_Var_Samp_Order_By>;
  variance?: Maybe<Observations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "observations" */
export type Observations_Arr_Rel_Insert_Input = {
  data: Array<Observations_Insert_Input>;
  on_conflict?: Maybe<Observations_On_Conflict>;
};

/** aggregate avg on columns */
export type Observations_Avg_Fields = {
  __typename?: 'observations_avg_fields';
  observation_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "observations" */
export type Observations_Avg_Order_By = {
  observation_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "observations". All fields are combined with a logical 'AND'. */
export type Observations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Observations_Bool_Exp>>>;
  _not?: Maybe<Observations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Observations_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  observation_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "observations" */
export enum Observations_Constraint {
  /** unique or primary key constraint */
  ObservationsPkey = 'observations_pkey'
}

/** input type for incrementing integer column in table "observations" */
export type Observations_Inc_Input = {
  observation_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "observations" */
export type Observations_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  observation_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Observations_Max_Fields = {
  __typename?: 'observations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  observation_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "observations" */
export type Observations_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  observation_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Observations_Min_Fields = {
  __typename?: 'observations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  observation_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "observations" */
export type Observations_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  observation_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "observations" */
export type Observations_Mutation_Response = {
  __typename?: 'observations_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Observations>;
};

/** input type for inserting object relation for remote table "observations" */
export type Observations_Obj_Rel_Insert_Input = {
  data: Observations_Insert_Input;
  on_conflict?: Maybe<Observations_On_Conflict>;
};

/** on conflict condition type for table "observations" */
export type Observations_On_Conflict = {
  constraint: Observations_Constraint;
  update_columns: Array<Observations_Update_Column>;
  where?: Maybe<Observations_Bool_Exp>;
};

/** ordering options when selecting data from "observations" */
export type Observations_Order_By = {
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  observation_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "observations" */
export type Observations_Pk_Columns_Input = {
  observation_id: Scalars['Int'];
};

/** select columns of table "observations" */
export enum Observations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  ObservationId = 'observation_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "observations" */
export type Observations_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  observation_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Observations_Stddev_Fields = {
  __typename?: 'observations_stddev_fields';
  observation_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "observations" */
export type Observations_Stddev_Order_By = {
  observation_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Observations_Stddev_Pop_Fields = {
  __typename?: 'observations_stddev_pop_fields';
  observation_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "observations" */
export type Observations_Stddev_Pop_Order_By = {
  observation_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Observations_Stddev_Samp_Fields = {
  __typename?: 'observations_stddev_samp_fields';
  observation_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "observations" */
export type Observations_Stddev_Samp_Order_By = {
  observation_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Observations_Sum_Fields = {
  __typename?: 'observations_sum_fields';
  observation_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "observations" */
export type Observations_Sum_Order_By = {
  observation_id?: Maybe<Order_By>;
};

/** update columns of table "observations" */
export enum Observations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Name = 'name',
  /** column name */
  ObservationId = 'observation_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Observations_Var_Pop_Fields = {
  __typename?: 'observations_var_pop_fields';
  observation_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "observations" */
export type Observations_Var_Pop_Order_By = {
  observation_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Observations_Var_Samp_Fields = {
  __typename?: 'observations_var_samp_fields';
  observation_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "observations" */
export type Observations_Var_Samp_Order_By = {
  observation_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Observations_Variance_Fields = {
  __typename?: 'observations_variance_fields';
  observation_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "observations" */
export type Observations_Variance_Order_By = {
  observation_id?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "observations" */
  observations: Array<Observations>;
  /** fetch aggregated fields from the table: "observations" */
  observations_aggregate: Observations_Aggregate;
  /** fetch data from the table: "observations" using primary key columns */
  observations_by_pk?: Maybe<Observations>;
  /** fetch data from the table: "widgets" */
  widgets: Array<Widgets>;
  /** fetch aggregated fields from the table: "widgets" */
  widgets_aggregate: Widgets_Aggregate;
  /** fetch data from the table: "widgets" using primary key columns */
  widgets_by_pk?: Maybe<Widgets>;
};


/** query root */
export type Query_RootObservationsArgs = {
  distinct_on?: Maybe<Array<Observations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Observations_Order_By>>;
  where?: Maybe<Observations_Bool_Exp>;
};


/** query root */
export type Query_RootObservations_AggregateArgs = {
  distinct_on?: Maybe<Array<Observations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Observations_Order_By>>;
  where?: Maybe<Observations_Bool_Exp>;
};


/** query root */
export type Query_RootObservations_By_PkArgs = {
  observation_id: Scalars['Int'];
};


/** query root */
export type Query_RootWidgetsArgs = {
  distinct_on?: Maybe<Array<Widgets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Widgets_Order_By>>;
  where?: Maybe<Widgets_Bool_Exp>;
};


/** query root */
export type Query_RootWidgets_AggregateArgs = {
  distinct_on?: Maybe<Array<Widgets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Widgets_Order_By>>;
  where?: Maybe<Widgets_Bool_Exp>;
};


/** query root */
export type Query_RootWidgets_By_PkArgs = {
  widget_id: Scalars['Int'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "observations" */
  observations: Array<Observations>;
  /** fetch aggregated fields from the table: "observations" */
  observations_aggregate: Observations_Aggregate;
  /** fetch data from the table: "observations" using primary key columns */
  observations_by_pk?: Maybe<Observations>;
  /** fetch data from the table: "widgets" */
  widgets: Array<Widgets>;
  /** fetch aggregated fields from the table: "widgets" */
  widgets_aggregate: Widgets_Aggregate;
  /** fetch data from the table: "widgets" using primary key columns */
  widgets_by_pk?: Maybe<Widgets>;
};


/** subscription root */
export type Subscription_RootObservationsArgs = {
  distinct_on?: Maybe<Array<Observations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Observations_Order_By>>;
  where?: Maybe<Observations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootObservations_AggregateArgs = {
  distinct_on?: Maybe<Array<Observations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Observations_Order_By>>;
  where?: Maybe<Observations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootObservations_By_PkArgs = {
  observation_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootWidgetsArgs = {
  distinct_on?: Maybe<Array<Widgets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Widgets_Order_By>>;
  where?: Maybe<Widgets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWidgets_AggregateArgs = {
  distinct_on?: Maybe<Array<Widgets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Widgets_Order_By>>;
  where?: Maybe<Widgets_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootWidgets_By_PkArgs = {
  widget_id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "widgets" */
export type Widgets = {
  __typename?: 'widgets';
  name: Scalars['String'];
  widget_id: Scalars['Int'];
};

/** aggregated selection of "widgets" */
export type Widgets_Aggregate = {
  __typename?: 'widgets_aggregate';
  aggregate?: Maybe<Widgets_Aggregate_Fields>;
  nodes: Array<Widgets>;
};

/** aggregate fields of "widgets" */
export type Widgets_Aggregate_Fields = {
  __typename?: 'widgets_aggregate_fields';
  avg?: Maybe<Widgets_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Widgets_Max_Fields>;
  min?: Maybe<Widgets_Min_Fields>;
  stddev?: Maybe<Widgets_Stddev_Fields>;
  stddev_pop?: Maybe<Widgets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Widgets_Stddev_Samp_Fields>;
  sum?: Maybe<Widgets_Sum_Fields>;
  var_pop?: Maybe<Widgets_Var_Pop_Fields>;
  var_samp?: Maybe<Widgets_Var_Samp_Fields>;
  variance?: Maybe<Widgets_Variance_Fields>;
};


/** aggregate fields of "widgets" */
export type Widgets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Widgets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "widgets" */
export type Widgets_Aggregate_Order_By = {
  avg?: Maybe<Widgets_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Widgets_Max_Order_By>;
  min?: Maybe<Widgets_Min_Order_By>;
  stddev?: Maybe<Widgets_Stddev_Order_By>;
  stddev_pop?: Maybe<Widgets_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Widgets_Stddev_Samp_Order_By>;
  sum?: Maybe<Widgets_Sum_Order_By>;
  var_pop?: Maybe<Widgets_Var_Pop_Order_By>;
  var_samp?: Maybe<Widgets_Var_Samp_Order_By>;
  variance?: Maybe<Widgets_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "widgets" */
export type Widgets_Arr_Rel_Insert_Input = {
  data: Array<Widgets_Insert_Input>;
  on_conflict?: Maybe<Widgets_On_Conflict>;
};

/** aggregate avg on columns */
export type Widgets_Avg_Fields = {
  __typename?: 'widgets_avg_fields';
  widget_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "widgets" */
export type Widgets_Avg_Order_By = {
  widget_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "widgets". All fields are combined with a logical 'AND'. */
export type Widgets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Widgets_Bool_Exp>>>;
  _not?: Maybe<Widgets_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Widgets_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  widget_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "widgets" */
export enum Widgets_Constraint {
  /** unique or primary key constraint */
  WidgetsPkey = 'widgets_pkey'
}

/** input type for incrementing integer column in table "widgets" */
export type Widgets_Inc_Input = {
  widget_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "widgets" */
export type Widgets_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  widget_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Widgets_Max_Fields = {
  __typename?: 'widgets_max_fields';
  name?: Maybe<Scalars['String']>;
  widget_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "widgets" */
export type Widgets_Max_Order_By = {
  name?: Maybe<Order_By>;
  widget_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Widgets_Min_Fields = {
  __typename?: 'widgets_min_fields';
  name?: Maybe<Scalars['String']>;
  widget_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "widgets" */
export type Widgets_Min_Order_By = {
  name?: Maybe<Order_By>;
  widget_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "widgets" */
export type Widgets_Mutation_Response = {
  __typename?: 'widgets_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Widgets>;
};

/** input type for inserting object relation for remote table "widgets" */
export type Widgets_Obj_Rel_Insert_Input = {
  data: Widgets_Insert_Input;
  on_conflict?: Maybe<Widgets_On_Conflict>;
};

/** on conflict condition type for table "widgets" */
export type Widgets_On_Conflict = {
  constraint: Widgets_Constraint;
  update_columns: Array<Widgets_Update_Column>;
  where?: Maybe<Widgets_Bool_Exp>;
};

/** ordering options when selecting data from "widgets" */
export type Widgets_Order_By = {
  name?: Maybe<Order_By>;
  widget_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "widgets" */
export type Widgets_Pk_Columns_Input = {
  widget_id: Scalars['Int'];
};

/** select columns of table "widgets" */
export enum Widgets_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  WidgetId = 'widget_id'
}

/** input type for updating data in table "widgets" */
export type Widgets_Set_Input = {
  name?: Maybe<Scalars['String']>;
  widget_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Widgets_Stddev_Fields = {
  __typename?: 'widgets_stddev_fields';
  widget_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "widgets" */
export type Widgets_Stddev_Order_By = {
  widget_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Widgets_Stddev_Pop_Fields = {
  __typename?: 'widgets_stddev_pop_fields';
  widget_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "widgets" */
export type Widgets_Stddev_Pop_Order_By = {
  widget_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Widgets_Stddev_Samp_Fields = {
  __typename?: 'widgets_stddev_samp_fields';
  widget_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "widgets" */
export type Widgets_Stddev_Samp_Order_By = {
  widget_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Widgets_Sum_Fields = {
  __typename?: 'widgets_sum_fields';
  widget_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "widgets" */
export type Widgets_Sum_Order_By = {
  widget_id?: Maybe<Order_By>;
};

/** update columns of table "widgets" */
export enum Widgets_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  WidgetId = 'widget_id'
}

/** aggregate var_pop on columns */
export type Widgets_Var_Pop_Fields = {
  __typename?: 'widgets_var_pop_fields';
  widget_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "widgets" */
export type Widgets_Var_Pop_Order_By = {
  widget_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Widgets_Var_Samp_Fields = {
  __typename?: 'widgets_var_samp_fields';
  widget_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "widgets" */
export type Widgets_Var_Samp_Order_By = {
  widget_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Widgets_Variance_Fields = {
  __typename?: 'widgets_variance_fields';
  widget_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "widgets" */
export type Widgets_Variance_Order_By = {
  widget_id?: Maybe<Order_By>;
};

export type AllObservationsQueryVariables = {};


export type AllObservationsQuery = (
  { __typename?: 'query_root' }
  & { observations: Array<(
    { __typename?: 'observations' }
    & Pick<Observations, 'observation_id' | 'created_at' | 'name'>
  )> }
);

export type Delete_ObservationMutationVariables = {
  observation_id: Scalars['Int'];
};


export type Delete_ObservationMutation = (
  { __typename?: 'mutation_root' }
  & { delete_observations_by_pk?: Maybe<(
    { __typename?: 'observations' }
    & Pick<Observations, 'observation_id'>
  )> }
);

export type Insert_Single_ObservationMutationVariables = {
  object: Observations_Insert_Input;
};


export type Insert_Single_ObservationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_observations_one?: Maybe<(
    { __typename?: 'observations' }
    & Pick<Observations, 'observation_id' | 'name'>
  )> }
);

export type GetObservationNameQueryVariables = {
  observation_id: Scalars['Int'];
};


export type GetObservationNameQuery = (
  { __typename?: 'query_root' }
  & { observations_by_pk?: Maybe<(
    { __typename?: 'observations' }
    & Pick<Observations, 'observation_id' | 'name'>
  )> }
);

export type UpdateObservationNameMutationVariables = {
  observation_id: Scalars['Int'];
  name: Scalars['String'];
};


export type UpdateObservationNameMutation = (
  { __typename?: 'mutation_root' }
  & { update_observations_by_pk?: Maybe<(
    { __typename?: 'observations' }
    & Pick<Observations, 'observation_id'>
  )> }
);

export type AllWidgetsQueryVariables = {};


export type AllWidgetsQuery = (
  { __typename?: 'query_root' }
  & { widgets: Array<(
    { __typename?: 'widgets' }
    & Pick<Widgets, 'widget_id' | 'name'>
  )> }
);

export const AllObservationsDocument = gql`
    query AllObservations {
  observations {
    observation_id
    created_at
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllObservationsGQL extends Apollo.Query<AllObservationsQuery, AllObservationsQueryVariables> {
    document = AllObservationsDocument;
    
  }
export const Delete_ObservationDocument = gql`
    mutation delete_observation($observation_id: Int!) {
  delete_observations_by_pk(observation_id: $observation_id) {
    observation_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Delete_ObservationGQL extends Apollo.Mutation<Delete_ObservationMutation, Delete_ObservationMutationVariables> {
    document = Delete_ObservationDocument;
    
  }
export const Insert_Single_ObservationDocument = gql`
    mutation insert_single_observation($object: observations_insert_input!) {
  insert_observations_one(object: $object) {
    observation_id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Insert_Single_ObservationGQL extends Apollo.Mutation<Insert_Single_ObservationMutation, Insert_Single_ObservationMutationVariables> {
    document = Insert_Single_ObservationDocument;
    
  }
export const GetObservationNameDocument = gql`
    query GetObservationName($observation_id: Int!) {
  observations_by_pk(observation_id: $observation_id) {
    observation_id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetObservationNameGQL extends Apollo.Query<GetObservationNameQuery, GetObservationNameQueryVariables> {
    document = GetObservationNameDocument;
    
  }
export const UpdateObservationNameDocument = gql`
    mutation UpdateObservationName($observation_id: Int!, $name: String!) {
  update_observations_by_pk(pk_columns: {observation_id: $observation_id}, _set: {name: $name}) {
    observation_id
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateObservationNameGQL extends Apollo.Mutation<UpdateObservationNameMutation, UpdateObservationNameMutationVariables> {
    document = UpdateObservationNameDocument;
    
  }
export const AllWidgetsDocument = gql`
    query AllWidgets {
  widgets {
    widget_id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllWidgetsGQL extends Apollo.Query<AllWidgetsQuery, AllWidgetsQueryVariables> {
    document = AllWidgetsDocument;
    
  }