import { CheckoutEffects } from './../checkout/effects/checkout.effects';
import { CheckoutActions } from './../checkout/actions/checkout.actions';
import { CheckoutService } from './services/checkout.service';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
// Components

// Services
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { AuthActions } from '../auth/actions/auth.actions';
import { VariantRetriverService } from './services/variant-retriver.service';
import { VariantParserService } from './services/variant-parser.service';
import { TokenInterceptor } from './interceptors/token.interceptor';
// import { ProductDummyService } from './services/product-dummy.service';

import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from '../auth/effects/auth.effects';
import { ProductEffects } from '../product/effects/product.effects';
import { UserActions } from '../user/actions/user.actions';
import { UserEffects } from '../user/effects/user.effects';
import { UserService } from '../user/services/user.service';
import { CanActivateViaAuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    // components
    // DummyService,
    // pipes
  ],
  exports: [
    // components
    // DummyService
    NgProgressModule
  ],
  imports: [
    // Were not working on modules sice update to rc-5
    // TO BE moved to respective modules.
    EffectsModule.forFeature([
      AuthenticationEffects,
      ProductEffects,
      CheckoutEffects,
      UserEffects
    ]),
    NgProgressModule
  ],
  providers: [
    VariantParserService,
    VariantRetriverService,
    AuthService,
    CheckoutService,
    // ProductDummyService,
    ProductService,
    AuthActions,
    CheckoutActions,
    UserActions,
    UserService,
    CanActivateViaAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true },
  ]
})
export class CoreModule {}
