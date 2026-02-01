import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">        
        <span className="footer-copy">© Martín Manes</span>

        <div className="footer-socials">
          <a 
            href="https://github.com/tu-usuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src="/github.svg" alt="GitHub" />
          </a>
          <a 
            href="https://linkedin.com/in/tu-perfil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src="/linkedin.svg" alt="LinkedIn" />
          </a>          
        </div>
      </div>      
    </footer>
  );
}
