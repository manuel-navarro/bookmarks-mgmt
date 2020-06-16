import { NgModule } from '@angular/core';
import {
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatToolbarModule
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
        MatSnackBarModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ],
    exports: [
        MatTableModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ]
})
export class MaterialModule { }