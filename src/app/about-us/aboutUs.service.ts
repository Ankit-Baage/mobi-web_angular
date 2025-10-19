import { Injectable } from '@angular/core';
import { heading, Offer, Mission, Vision, Partner, Culture } from './aboutUs.model';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {

  private headings: heading[] = [
    {
      title: 'About Fuevation',
      desc: "Want to see your planet clutter-free, clean, and green? Want to get digitized? Want best deals on New Mobiles, Spares and Accessories? Then switch to technology and distribution solutions with Fuevation!",
      imgMob: '../../../assets/aboutUs/mob/head.png',
      imgTab: '../../../assets/aboutUs/tab/head.png',
      imgDesk: '../../../assets/aboutUs/desk/head.png',
    },
  ];
  private offers: Offer[] = [
    {
      desc: 'Get exposure to more than <span style="color: #FF6F3F;">500+ models</span> and over <span style="color: #FF6F3F;">10+ brands</span>',
    },
    {
      desc: '<span style="color: #FF6F3F;">Huge Inventory</span> exposure and <span style="color: #FF6F3F;">management</span> sysytem.',
    },
    {
      desc: 'Get the best price on <span style="color: #FF6F3F;">Mobile, Spares and Accessories</span>',
    },
  ];
  private visions: Vision[] = [
    {
      title: 'Our Vision',
      desc: 'To transform India’s electronics ecosystem by advancing the circular economy, ensuring that technology remains accessible, sustainable, and affordable for all. Fuevation envisions a future where every device, accessory, and spare part contributes to a greener, digitally empowered Bharat.',
      imgMob: '../../../assets/aboutUs/mob/vision.png',
      imgTab: '../../../assets/aboutUs/tab/vision.png',
      imgDesk: '../../../assets/aboutUs/desk/vision.png',
    },
  ];
  private missions: Mission[] = [
    {
      title: 'Our Mission',
      desc: 'At Fuevation, our mission is to build a Green Digital Bharat by enabling the responsible recycling and distribution of electronic devices, spares and accessories. We aim to empower retailers in Tier 2, Tier 3 and emerging cities through technology-driven platforms that digitize retail operations, reduce e-waste and create new economic opportunities.Through continuous innovation and sustainable practices, we strive to bridge the gap between environmental responsibility and digital inclusion, driving long-term impact across India’s electronics value chain.',
      imgMob: '../../../assets/aboutUs/mob/mission.png',
      imgTab: '../../../assets/aboutUs/tab/mission.png',
      imgDesk: '../../../assets/aboutUs/desk/mission.png',
    },
  ];
  private cultures: Culture[] = [
    {
      title: 'Daily hard work',
      desc: 'Creating an atmosphere that leads to personal growth',
      imgMob: '../../../assets/aboutUs/mob/work.png',
      imgTab: '../../../assets/aboutUs/tab/work.png',
      imgDesk: '../../../assets/aboutUs/desk/work.png',
    },
    {
      title: 'Passion before money ',
      desc: 'Focused and goal-centric efforts every time for growth ',
      imgMob: '../../../assets/aboutUs/mob/money.png',
      imgTab: '../../../assets/aboutUs/tab/money.png',
      imgDesk: '../../../assets/aboutUs/desk/money.png',
    },
    {
      title: 'Teamwork drives results',
      desc: 'Clear and efficient connection within the teams',
      imgMob: '../../../assets/aboutUs/mob/result.png',
      imgTab: '../../../assets/aboutUs/tab/result.png',
      imgDesk: '../../../assets/aboutUs/desk/result.png',
    },
  ];
  private partners: Partner[] = [
    {
      id: 1,
      imgMob: '../../../assets/aboutUs/mob/mobavenue.png',
      imgTab: '../../../assets/aboutUs/tab/mobavenue.png',
      imgDesk: '../../../assets/aboutUs/desk/mobavenue.png',
    },
    {
      id: 2,
      imgMob: '../../../assets/aboutUs/mob/iceBreaker.png',
      imgTab: '../../../assets/aboutUs/tab/icebreaker.png',
      imgDesk: '../../../assets/aboutUs/desk/icebreaker.png',
    },
    {
      id: 3,
      imgMob: '../../../assets/aboutUs/mob/letsVenture.png',
      imgTab: '../../../assets/aboutUs/tab/letsventure.png',
      imgDesk: '../../../assets/aboutUs/desk/letsVenture.png',
    },
    {
      id: 4,
      imgMob: '../../../assets/aboutUs/mob/applyhigh.png',
      imgTab: '../../../assets/aboutUs/tab/applyhigh.png',
      imgDesk: '../../../assets/aboutUs/desk/applyhigh.png',

    },
    {
      id: 5,
      imgMob: '../../../assets/aboutUs/mob/inflection.png',
      imgTab: '../../../assets/aboutUs/tab/inflection.png',
      imgDesk: '../../../assets/aboutUs/desk/inflection.png',
    },
    {
      id: 6,
      imgMob: '../../../assets/aboutUs/mob/artesian.png',
      imgTab: '../../../assets/aboutUs/tab/artesian.png',
      imgDesk: '../../../assets/aboutUs/desk/artesian.png',
    },
    {
      id: 7,
      imgMob: '../../../assets/aboutUs/mob/ved.png',
      imgTab: '../../../assets/aboutUs/tab/ved.png',
      imgDesk: '../../../assets/aboutUs/desk/ved.png',
    },
    {
      id: 1,
      imgMob: '../../../assets/aboutUs/mob/mobavenue.png',
      imgTab: '../../../assets/aboutUs/tab/mobavenue.png',
      imgDesk: '../../../assets/aboutUs/desk/mobavenue.png',
    },
    {
      id: 2,
      imgMob: '../../../assets/aboutUs/mob/iceBreaker.png',
      imgTab: '../../../assets/aboutUs/tab/icebreaker.png',
      imgDesk: '../../../assets/aboutUs/desk/icebreaker.png',
    },
    {
      id: 3,
      imgMob: '../../../assets/aboutUs/mob/letsVenture.png',
      imgTab: '../../../assets/aboutUs/tab/letsventure.png',
      imgDesk: '../../../assets/aboutUs/desk/letsVenture.png',
    },
    {
      id: 4,
      imgMob: '../../../assets/aboutUs/mob/applyhigh.png',
      imgTab: '../../../assets/aboutUs/tab/applyhigh.png',
      imgDesk: '../../../assets/aboutUs/desk/applyhigh.png',

    },
    {
      id: 5,
      imgMob: '../../../assets/aboutUs/mob/inflection.png',
      imgTab: '../../../assets/aboutUs/tab/inflection.png',
      imgDesk: '../../../assets/aboutUs/desk/inflection.png',
    },
    {
      id: 6,
      imgMob: '../../../assets/aboutUs/mob/artesian.png',
      imgTab: '../../../assets/aboutUs/tab/artesian.png',
      imgDesk: '../../../assets/aboutUs/desk/artesian.png',
    },
    {
      id: 7,
      imgMob: '../../../assets/aboutUs/mob/ved.png',
      imgTab: '../../../assets/aboutUs/tab/ved.png',
      imgDesk: '../../../assets/aboutUs/desk/ved.png',
    },
  ];

  constructor() {}

  getHeadings() {
    return this.headings.slice();
  }
  getOffers() {
    return this.offers.slice();
  }
  getVisions() {
    return this.visions.slice();
  }
  getMissions() {
    return this.missions.slice();
  }
  getCultures() {
    return this.cultures.slice();
  }
  getPartners() {
    return this.partners.slice();
  }

}
