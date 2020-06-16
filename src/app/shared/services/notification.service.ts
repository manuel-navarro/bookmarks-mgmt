import { Injectable } from "@angular/core";
import {
    MatSnackBar,
    MatSnackBarConfig
} from "@angular/material";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private snackBarConfig: MatSnackBarConfig;
    private snackBarAutoHide = "5000";

    constructor(private sb: MatSnackBar) { }

    openSnackBar(message) {
        this.snackBarConfig = new MatSnackBarConfig();
        this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
        this.sb.open(message, "", this.snackBarConfig);
    }
}