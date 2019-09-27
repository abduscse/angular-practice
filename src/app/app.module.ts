import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { serverComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './practice/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './practice/success-alert/success-alert.component';
import { DataBindingComponent } from './practice/data-binding/data-binding.component';
import { DirectivesComponent } from './practice/directives/directives.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CmpDatabindingComponent } from './practice/cmp-databinding/cmp-databinding.component';
import { CockpitComponent } from './practice/cmp-databinding/cockpit/cockpit.component';
import { ServerElementComponent } from './practice/cmp-databinding/server-element/server-element.component';
import { GameControlComponent } from './practice/game-control/game-control.component';
import { OddComponent } from './practice/game-control/odd/odd.component';
import { EvenComponent } from './practice/game-control/even/even.component';
import { DirectivesStartComponent } from './practice/directives-start/directives-start.component';
import { basicHighlightDirective } from './basic-highlight/basic-hightlight.directive';
import { BetterDirectiveDirective } from './better-directive/better-directive.directive';
import { UnlessDirective } from './custom-structural-directive/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { ServicesStartComponent } from './services-start/services-start.component';
import { AccountComponent } from './services-start/account/account.component';
import { NewAccountComponent } from './services-start/new-account/new-account.component';
import { AccountsService } from './shared/accounts.service';
import { LoggingService } from './shared/logging.service';
import { ServicesAssignmentComponent } from './practice/services-assignment/services-assignment.component';
import { ActiveUsersComponent } from './practice/services-assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './practice/services-assignment/inactive-users/inactive-users.component';
// import using angular 6+ new syntax..
// import { UsersService } from './practice/services-assignment/services/users.service';
import { CounterService } from './practice/services-assignment/services/counter.service';
import { RoutingStartComponent } from './practice/routing-start/routing-start.component';
import { HomeComponent } from './practice/routing-start/home/home.component';
import { UsersComponent } from './practice/routing-start/users/users.component';
import { UserComponent } from './practice/routing-start/users/user/user.component';
import { Servers2Component } from './practice/routing-start/servers2/servers2.component';
import { ServersService2 } from './practice/routing-start/servers2/servers2.service';
import { EditServer2Component } from './practice/routing-start/servers2/edit-server2/edit-server2.component';
import { Server2Component } from './practice/routing-start/servers2/server2/server2.component';

import { PageNotFoundComponent } from './practice/routing-start/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGaurd } from './auth-gaurd.service';
import { AuthService } from './auth.service';
import { CanDeactivateGaurd } from './can-deactivate-gaurd.service';
import { ErrorPageComponent } from './practice/routing-start/error-page/error-page.component';
import { ServerResolver } from './practice/routing-start/servers2/server2/server-resolver.service';
import { RecipeNotSelectedComponent } from './recipes/recipe-not-selected/recipe-not-selected.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservablesStartComponent } from './practice/observables-start/observables-start.component';
import { User2Component } from './practice/observables-start/user2/user2.component';
import { Home2Component } from './practice/observables-start/home2/home2.component';
import { FormTdStartComponent } from './practice/form-td-start/form-td-start.component';
import { FormTdAssignmentComponent } from './practice/form-td-assignment/form-td-assignment.component';
import { FormsReactiveStartComponent } from './practice/forms-reactive-start/forms-reactive-start.component';
import { FormsReactiveAssignmentComponent } from './practice/forms-reactive-assignment/forms-reactive-assignment.component';
import { PipesStartComponent } from './practice/pipes-start/pipes-start.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { FilterPipe } from './shared/filter.pipe';
import { ReversePipe } from './shared/reverse.pipe';
import { SortPipe } from './shared/sort.pipe';
import { HttpStartComponent } from './practice/http-start/http-start.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './practice/http-start/auth-interceptor.service';
import { LoggingInterceptorService } from './practice/http-start/logging-interceptor.service';

@NgModule({
  declarations: [AppComponent, serverComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent,
    DataBindingComponent, DirectivesComponent, HeaderComponent, ShoppingListComponent, ShoppingListEditComponent,
    RecipeListComponent, RecipeItemComponent, RecipeDetailComponent, RecipesComponent, CmpDatabindingComponent,
    CockpitComponent, ServerElementComponent, GameControlComponent, OddComponent, EvenComponent, DirectivesStartComponent,
    basicHighlightDirective, BetterDirectiveDirective, UnlessDirective, DropdownDirective, ServicesStartComponent,
    AccountComponent, NewAccountComponent, ServicesAssignmentComponent, ActiveUsersComponent, InactiveUsersComponent,
    RoutingStartComponent, HomeComponent, UsersComponent, UserComponent, Servers2Component, EditServer2Component,
    Server2Component, PageNotFoundComponent, ErrorPageComponent, RecipeNotSelectedComponent, RecipeEditComponent,
    ObservablesStartComponent, User2Component, Home2Component, FormTdStartComponent, FormTdAssignmentComponent,
    FormsReactiveStartComponent, FormsReactiveAssignmentComponent, PipesStartComponent, ShortenPipe,
    FilterPipe, ReversePipe, SortPipe, HttpStartComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [
    // import using angular 6+ new syntax..
    // UsersService,
    AccountsService, LoggingService, CounterService, ServersService2, AuthGaurd, AuthService, CanDeactivateGaurd,
    ServerResolver, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
