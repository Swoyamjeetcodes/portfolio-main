const Footer = () => {
  return (
    <footer className="py-6 px-6 border-t border-border">
      <div className="max-w-[38rem] mx-auto flex flex-col items-center gap-2 text-center">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Built with care · designed & developed by{" "}
          <span className="text-primary">me</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
