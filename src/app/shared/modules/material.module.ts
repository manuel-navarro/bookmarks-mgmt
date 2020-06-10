import { NgModule } from '@angular/core';
import {
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatIconModule,
        MatCardModule
    ]
})
export class MaterialModule { }