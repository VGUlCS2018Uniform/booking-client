import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { BookingService } from 'src/app/Service/booking.service';

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
  constructor(private observer: BreakpointObserver,private bookingService:BookingService) {}
  ngOnInit() {
    this.bookingService.toggleSidebarFromList.subscribe(
      inputData => {this.sidenav.close();}
    )
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

