import { type PropsWithChildren } from "react";

interface HeaderProps
  extends PropsWithChildren<{ image: { src: string; alt: string } }> {}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
