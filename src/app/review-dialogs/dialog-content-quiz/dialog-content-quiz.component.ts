import { Component, Inject, Input, OnDestroy } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Technique } from '../../techniques/technique';

export interface DialogData {
  technique: Technique;
  answered: boolean;
}

@Component({
  selector: 'app-dialog-content-quiz',
  templateUrl: 'dialog-content-quiz.component.html',
  styleUrls: ['dialog-content-quiz.component.css'],
})
export class DialogContentQuizComponent implements OnDestroy {
  private ngUnsubscribe = new Subject();
  @Input() technique: Technique;
  answered: boolean;
  @Input() isQuizDone: boolean;

  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentQuizDialogComponent, {
      width: '500px',
      data: {
        technique: this.technique,
        answered: false,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isQuizDone = true;
      this.authService
        .updateTechnique(this.technique, 'quiz')
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

@Component({
  selector: 'app-dialog-content-quiz-dialog',
  templateUrl: 'dialog-content-quiz-dialog.component.html',
  styleUrls: ['dialog-content-quiz-dialog.component.css'],
})
export class DialogContentQuizDialogComponent implements OnDestroy {
  answered: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogContentQuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  selectAnswer() {
    this.data.answered = true;
  }

  ngOnDestroy() {
    // this is to reset the green box after closing
    this.answered = false;
    // pass data back with this method
    // this.dialogRef.close(this.data);
  }
}
