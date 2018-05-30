import { Component, OnInit } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { AuthService } from './auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { IAppState } from './store';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isCollapsed = true;
  constructor(
    public electronService: ElectronService,
    public authService: AuthService,
    private ngRedux: NgRedux<IAppState>,
    private toastrService: ToastrService,
  ) {
    authService.handleAuthentication();
    if (electronService.isElectron()) {
      console.log('Mode electron');
      console.log('Electron ipcRenderer', electronService.ipcRenderer);
      console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  ngOnInit() {
    this.ngRedux.select('errorMessage').subscribe((errorMessage: string) => {
      if (errorMessage.length) {
        this.toastrService.error(errorMessage);
      }
    });
    this.ngRedux.select('successMessage').subscribe((successMessage: string) => {
      if (successMessage.length) {
        this.toastrService.success(successMessage);
      }
    });
    this.ngRedux.select('warningMessage').subscribe((warningMessage: string) => {
      if (warningMessage.length) {
        this.toastrService.warning(warningMessage);
      }
    });
  }
}
