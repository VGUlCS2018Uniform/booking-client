import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  @ViewChild(MatSidenavContent)
  content! :MatSidenavContent
  constructor(private observer: BreakpointObserver) {}
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1200px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
          this.content._container.updateContentMargins()
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
          this.content._container.updateContentMargins()

        }
      });
  }
}

