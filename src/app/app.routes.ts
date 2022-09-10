import { Route } from '@angular/router';

import { ProductDetailComponent } from './core/components/product-detail/product-detail.component';
import { ProductListComponent } from './core/components/product-list/product-list.component';
import { TermsAndConditionsComponent } from './core/components/terms-and-conditions/terms-and-conditions.component';
import { StorytellingComponent } from './core/components/storytelling/storytelling.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

export const routes: Route[] = [
    {
        path: 'category/:slug',
        component: ProductListComponent,
        pathMatch: 'full',
    },
    {
        path: 'search',
        component: ProductListComponent,
    },
    {
        path: 'product/:slug',
        component: ProductDetailComponent,
    },
    {
        path: 'account',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    },
    {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
    },
    {
      path: 'terms-and-conditions',
      component: TermsAndConditionsComponent,
    },
    {
      path: 'storytelling',
      component: StorytellingComponent,
    },
    {
      path: '**',
      component: PageNotFoundComponent,
    },
];
