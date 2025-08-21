// using https://daisyui.com/components/footer/
export default function Footer() {
    return (
<footer className="footer sm:footer-horizontal footer-center bg-base-100 shadow-sm text-base-content p-9">
  <aside>
    <p>Caroline Robinson © {new Date().getFullYear()} - All right reserved.</p>
    <nav className="grid-flow-col gap-4 md:place-self-center">
        <a href="https://www.linkedin.com/in/carolinerobinsonn/" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
        <a href="https://github.com/cbellerob/" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">Github</a>
        <a href="mailto:robinson.cb1@gmail.com" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">Email</a>
    </nav>
  </aside>
</footer>
      )
  }
  