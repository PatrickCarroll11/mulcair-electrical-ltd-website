import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div>
            <h4 className="font-heading font-bold text-xl mb-4 text-accent">Mulcair Electrical Ltd</h4>
            <p className="text-sm opacity-70 leading-relaxed mb-6">
              Mulcair Electrical Ltd, providing trusted electrical services across Limerick and beyond.
            </p>
            <div className="space-y-3 text-sm opacity-80">
              <a href="tel:0863722601" className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-200">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                086 3722601
              </a>
              <a href="mailto:mulcairelectricalltd@gmail.com" className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-200">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                mulcairelectricalltd@gmail.com
              </a>
            </div>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-6">Service Areas</h4>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li>Co. Limerick</li>
              <li>Co. Clare</li>
              <li>Co. Tipperary</li>
              <li>Co. Cork</li>
              <li>Co. Kerry</li>
              <li>Co. Galway</li>
              <li className="opacity-50 italic text-xs mt-4">Nationwide coverage available</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-6">Contact</h4>
            <ul className="space-y-4 text-sm opacity-70">
              <li>
                <a href="tel:0863722601" className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-200">
                  <Phone className="h-4 w-4 text-accent shrink-0" />
                  086 3722601
                </a>
              </li>
              <li>
                <a href="mailto:mulcairelectricalltd@gmail.com" className="flex items-center gap-3 hover:opacity-100 transition-opacity duration-200">
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  mulcairelectricalltd@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Limerick, Ireland</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-background/10 mt-16 pt-8 text-center text-xs opacity-40">
          © {new Date().getFullYear()} Mulcair Electrical Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;