import { Hero } from './../hero/hero';
import { AfterViewInit, Component, inject } from '@angular/core';
import { Venue } from "../venue/venue";
import { About } from "../about/about";
import { Speakers } from "../speakers/speakers";
import { Agenda } from "../agenda/agenda";
import { Pricing } from "../pricing/pricing";
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Sponsors } from "../sponsors/sponsors";

@Component({
  selector: 'app-home',
  imports: [Hero, Venue, About, Speakers, Agenda, Pricing, RouterLink, Sponsors],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {

  private viewportScroller = inject(ViewportScroller);
  private route = inject(ActivatedRoute);

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        setTimeout(() => {
          const yOffset = 88;
          const anchorPos = this.viewportScroller.getScrollPosition();
          const element = document.getElementById(fragment);
          if (element) {
            const elementPos = element.offsetTop - yOffset;
            this.viewportScroller.scrollToPosition([anchorPos[0], elementPos]);
          }
        }, 0);
      } else {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
