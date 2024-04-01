import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <>
          {/* Aqui puede ir lo que del final del navbar */}
        </>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <p className="text-white">Introduce el texto azul claro</p>
            <p className="text-primary-500 text-4xl">Introduce el texto azul claro</p>
          </>
        }        
      >
        {/* Coloca la descripcion */}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus non, reiciendis debitis perferendis, vero earum dignissimos commodi accusamus, animi eveniet dolorum. Consequatur temporibus reprehenderit velit qui saepe quis doloribus culpa.
      </HeroOneButton>
    </Section>
  </Background>
);

export { Hero };
