import React from 'react';

import * as Styled from './Footer.styled';
import SocialMedia from './SocialMedia';
const services = [
  { title: 'Service Center', href: 'https://support.instapro.it/s/' },
  { title: 'About Instapro', href: 'https://www.instapro.it/chi-siamo' },
  { title: 'Blogs and press', href: 'https://www.instapro.it/blog' },
  { title: 'Work with us', href: '/https://careers.instapro.group/' },
];

const moreServices = [
  {
    title: 'Quality standard',
    href: 'https://www.instapro.it/standard-di-qualita',
  },
  {
    title: 'Become Partner with us',
    href: 'https://www.instapro.it/blog/diventa-un-partner-con-noi',
  },
];

const partners = [
  {
    country: 'United States: ',
    href: 'https://www.homeadvisor.com/',
    site: 'HomeAdvisor ',
    moreHref: 'https://www.angi.com/',
    moreSite: ' Angi',
  },
  {
    country: 'United Kingdom: ',
    href: 'https://www.mybuilder.com/',
    site: 'MyBuilder',
  },
  { country: 'Canada: ', href: 'https://homestars.com/', site: 'Homestars' },
  {
    country: 'France: ',
    href: 'https://www.123devis.com/',
    site: '123Devis ',
    moreHref: 'https://www.travaux.com/',
    moreSite: ' Travaux.com',
  },
  {
    country: 'Germany: ',
    href: 'https://www.my-hammer.de/',
    site: 'My Hammer',
  },
  {
    country: 'Austria: ',
    href: 'https://www.my-hammer.de/',
    site: 'My Hammer',
  },
  {
    country: 'Netherlands: ',
    href: 'https://www.werkspot.nl/',
    site: 'Werkspot',
  },
];

const about = [
  { text: 'Sectors', href: 'https://www.instapro.it/settori' },
  { text: 'Services', href: 'https://www.instapro.it/servizi' },
  { text: 'Location', href: 'https://www.instapro.it/tutte-citta' },
  {
    text: 'Price Guide',
    href: 'https://www.instapro.it/guida-ai-prezzi-costo',
  },
  {
    text: 'Privacy and cookie management',
    href: 'https://www.instapro.it/informativa-privacy',
  },
  {
    text: 'Terms and conditions',
    href: 'https://www.instapro.it/termini-condizioni',
  },
];

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.FooterDiv>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <a href={service.href} target="blank">
                {service.title}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          {moreServices.map((service, index) => (
            <li key={index}>
              <a href={service.href} target="blank">
                {service.title}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <li className="singup-link">
            <p>Are you a professional?</p>
            <a href="">
              <i className="fa fa-arrow-right fa-solid yellow-arrow"></i>
              <span>subscribe now</span>
            </a>
          </li>
        </ul>
      </Styled.FooterDiv>

      <SocialMedia />

      <Styled.PartnersDiv>
        <p>Official Partner of HomeAdvisor International</p>
        <Styled.ListContainer>
          <ul>
            {partners.map((partner, index) => (
              <li key={index}>
                {partner.country}
                <a href={partner.href} target="_blank">
                  {partner.site}
                </a>
                {partner.moreHref && partner.moreSite && (
                  <>
                    &
                    <a
                      href={partner.moreHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {partner.moreSite}
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </Styled.ListContainer>
        <Styled.Services>
          <ul>
            {about.map((li, index) => (
              <li key={index}>
                <a href={li.href} target="_blank">
                  {li.text}
                </a>
              </li>
            ))}
            <li>
              <span className="copyright">© 2005-2023 Werkspot BV</span>
            </li>
          </ul>
        </Styled.Services>
      </Styled.PartnersDiv>
    </Styled.Footer>
  );
};

export default Footer;
