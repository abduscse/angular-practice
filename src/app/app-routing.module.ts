import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './practice/routing-start/page-not-found/page-not-found.component';
import { EditServer2Component } from './practice/routing-start/servers2/edit-server2/edit-server2.component';
import { Server2Component } from './practice/routing-start/servers2/server2/server2.component';
import { Servers2Component } from './practice/routing-start/servers2/servers2.component';
import { UserComponent } from './practice/routing-start/users/user/user.component';
import { UsersComponent } from './practice/routing-start/users/users.component';
import { HomeComponent } from './practice/routing-start/home/home.component';
import { AuthGaurd } from './auth-gaurd.service';
import { CanDeactivateGaurd } from './can-deactivate-gaurd.service';
import { ErrorPageComponent } from './practice/routing-start/error-page/error-page.component';
import { ServerResolver } from './practice/routing-start/servers2/server2/server-resolver.service';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
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

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [
            { path: '', component: RecipeNotSelectedComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },

    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent }
        ]
    },
    {
        path: 'servers',
        // canActivate: [AuthGaurd],
        canActivateChild: [AuthGaurd],
        component: Servers2Component,
        children: [
            {
                path: ':id',
                component: Server2Component,
                resolve: { server: ServerResolver }
            },
            { path: ':id/edit', component: EditServer2Component, canDeactivate: [CanDeactivateGaurd] }
        ]
    },
    {
        path: 'observables', component: ObservablesStartComponent, children: [
            { path: 'home', component: Home2Component },
            { path: 'user/:id', component: User2Component }
        ]
    },
    { path: 'form-td-start', component: FormTdStartComponent },
    { path: 'form-td-assignment', component: FormTdAssignmentComponent },
    { path: 'forms-reactive-start', component: FormsReactiveStartComponent },
    { path: 'forms-reactive-assignment', component: FormsReactiveAssignmentComponent },
    { path: 'pipes-start', component: PipesStartComponent },
    // { path: 'not-found', component: PageNotFoundComponent },
    {
        path: 'not-found',
        component: ErrorPageComponent,
        data: {
            errorMessage: 'The Page was not found. Error: 404'
        }
    },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, { useHash: true })
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
