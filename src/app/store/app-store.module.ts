import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { DefaultDataServiceConfig, NgrxDataModule } from 'ngrx-data';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { entityConfig } from './entity-metadata';
import { NgrxDataToastService } from './ngrx-data-toast.service';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgrxDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: []
})
export class AppStoreModule {
    constructor(toastService: NgrxDataToastService) {}
}