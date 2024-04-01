import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  children: string;

};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-2xl">{props.children}</div>
  </header>
);

export { HeroOneButton };
