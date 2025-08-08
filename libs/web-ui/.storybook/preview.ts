import { provideAnimations } from '@angular/platform-browser/animations';
import { applicationConfig, Preview } from '@storybook/angular';
import { providePrimeNG } from 'primeng/config';
import {
  provideHttpClient,
} from '@angular/common/http';
import {
  provideTranslateService,

} from '@ngx-translate/core';
import {
  provideAppInitializer,
} from '@angular/core';
import { firstValueFrom, of, tap } from 'rxjs';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyAuraOrangePreset } from '@esame/common';


const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        providePrimeNG({
          theme: {
            preset: MyAuraOrangePreset
          },
        }),
        provideHttpClient(),
        provideHttpClient(),
        provideTranslateService({
          loader: provideTranslateHttpLoader({
            prefix: 'public/i18n/',
            suffix: '.json'
          }),
          fallbackLang: 'en',
          lang: 'en'
        }),
        provideAppInitializer(() => {
          // const translate = inject(TranslateService);
          return firstValueFrom(
            of(null).pipe(
              tap(() => {
                // translate.setDefaultLang('en');
                // translate.use('en');
                return of(null);
              })
            )
          );
        }),
      ],
    }),
  ],
};

export default preview;
