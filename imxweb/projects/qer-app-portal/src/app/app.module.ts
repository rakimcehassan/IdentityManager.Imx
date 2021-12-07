/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
 * Copyright 2021 One Identity LLC.
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EuiCoreModule, EuiMaterialModule } from '@elemental-ui/core';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, TranslateService } from '@ngx-translate/core';

import {
  CdrRegistryService,
  GlobalErrorHandler,
  ImxTranslateLoader,
  ImxMissingTranslationHandler,
  MastHeadModule,
  MenuModule,
  LdsReplacePipe,
  Paginator,
  UserMessageModule,
  QbmModule,
  AuthenticationModule
} from 'qbm';
import {
  AddressbookModule,
  ApprovalsModule,
  IdentitiesModule,
  DelegationModule,
  ObjectSheetModule,
  ObjectsheetPersonModule,
  ProductSelectionModule,
  QerModule,
  QpmIntegrationModule,
  RequestHistoryModule,
  RiskanalysisModule,
  ServiceCategoriesModule,
  ServiceItemsEditModule,
  ShoppingCartModule,
  StarlingService,
  ProfileModule,
  RequestConfigModule,
  RoleManangementModule,
  HistoryModule
} from 'qer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { PortalStarlingService } from './portal-starling.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    BrowserModule,
    EuiCoreModule,
    EuiMaterialModule,
    HttpClientModule,
    IdentitiesModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF }),
    MatDialogModule,
    MatTabsModule,
    MastHeadModule,
    MenuModule,
    AddressbookModule,
    QbmModule,
    QerModule,
    ProfileModule,
    RoleManangementModule,
    QpmIntegrationModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: ImxTranslateLoader
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: ImxMissingTranslationHandler
      }
    }),
    UserMessageModule,
    DelegationModule,
    ShoppingCartModule,
    ObjectSheetModule,
    ObjectsheetPersonModule,
    ProductSelectionModule,
    HistoryModule,
    RiskanalysisModule,
    ApprovalsModule,
    RequestConfigModule,
    RequestHistoryModule,
    ServiceCategoriesModule,
    ServiceItemsEditModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: AppService.init,
      deps: [AppService],
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    {
      provide: StarlingService,
      useClass: PortalStarlingService
    },
    {
      provide: MatPaginatorIntl,
      useFactory: Paginator.Create,
      deps: [
        TranslateService,
        LdsReplacePipe
      ]
    },
    CdrRegistryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }