export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="container flex items-center justify-center py-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CareHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
