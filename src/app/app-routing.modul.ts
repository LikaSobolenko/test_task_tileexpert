import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';

const routes: Routes = [
    { path: 'main', component:  HeaderMobileComponent},
    { path: 'search', component:  SearchPageComponent},
    { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class RoutingModule {}