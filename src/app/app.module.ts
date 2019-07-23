import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModule } from './features/feature.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule } from '@nebular/theme';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    FeatureModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
