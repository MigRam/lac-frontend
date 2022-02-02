import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiMaterialDesignModule } from '@frontend/ui/material-design';
import { SearchComponent } from './search.component';
import { UiPipesModule} from '@frontend/ui/pipes';

@NgModule({
  imports: [CommonModule, 
    UiMaterialDesignModule, 
    ReactiveFormsModule, 
    UiPipesModule],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class UiSearchbarModule { }
