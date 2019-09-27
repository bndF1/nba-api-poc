import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FeatureModule } from './features/feature.module';
import { SharedModule } from './shared/shared.module';

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
