"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TF</span>
              </div>
              <span className="text-white font-semibold text-lg">
                Trade Finance CR
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">{t("description")}</p>
            <p className="text-slate-500 text-xs">{t("disclaimer")}</p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t("legal.title")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {t("legal.terms")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {t("legal.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {t("legal.disclaimer")}
                </a>
              </li>
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://brx.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  BRX.Finance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm text-center">
            &copy; {currentYear} Trade Finance CR. {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
