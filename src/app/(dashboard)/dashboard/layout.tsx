import { Navbar } from "./_components/navbar";

export default function Layout({ children }: LayoutProps<"/dashboard">) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
