"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card, SectionHeader } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Comparison() {
  const t = useTranslations("comparison");

  const tableRows = ["yield", "duration", "collateral", "liquidity", "correlation"];
  const columns = ["govtBonds", "corpHY", "tradeFinance"];

  const defiComparison = [
    "borrowers",
    "rates",
    "collateral",
    "risk",
    "returns",
  ];

  return (
    <section id="comparison" className="relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {/* Comparison Table */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="overflow-x-auto -mx-4 sm:mx-0"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="px-4 sm:px-0 min-w-min">
              <Card className="overflow-hidden p-0">
                <table className="w-full min-w-[500px]">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left p-2 sm:p-3 md:p-4 text-slate-400 font-medium text-xs sm:text-sm whitespace-nowrap">
                        {t("table.metric")}
                      </th>
                      <th className="text-center p-2 sm:p-3 md:p-4 text-emerald-400 font-medium bg-emerald-500/10 text-xs sm:text-sm whitespace-nowrap">
                        {t("table.tradeFinance")}
                      </th>
                      <th className="text-center p-2 sm:p-3 md:p-4 text-slate-400 font-medium text-xs sm:text-sm whitespace-nowrap">
                        {t("table.govtBonds")}
                      </th>
                      <th className="text-center p-2 sm:p-3 md:p-4 text-slate-400 font-medium text-xs sm:text-sm whitespace-nowrap">
                        {t("table.corpHY")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.map((row, index) => (
                      <tr
                        key={row}
                        className={
                          index < tableRows.length - 1
                            ? "border-b border-slate-800"
                            : ""
                        }
                      >
                        <td className="p-2 sm:p-3 md:p-4 text-slate-300 font-medium text-xs sm:text-sm whitespace-nowrap">
                          {t(`table.${row}`)}
                        </td>
                        <td className="p-2 sm:p-3 md:p-4 text-center text-emerald-400 font-semibold bg-emerald-500/10 financial-number text-xs sm:text-sm whitespace-nowrap">
                          {t(`values.${row}.tf`)}
                        </td>
                        <td className="p-2 sm:p-3 md:p-4 text-center text-slate-400 financial-number text-xs sm:text-sm whitespace-nowrap">
                          {t(`values.${row}.govt`)}
                        </td>
                        <td className="p-2 sm:p-3 md:p-4 text-center text-slate-400 financial-number text-xs sm:text-sm whitespace-nowrap">
                          {t(`values.${row}.corp`)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        {/* Not DeFi Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
              {t("notDefi.title")}
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">{t("notDefi.subtitle")}</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card variant="gradient" className="p-4 sm:p-6 md:p-8">
              <div className="space-y-3 sm:space-y-4">
                {defiComparison.map((item) => (
                  <div
                    key={item}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-2 sm:py-3 border-b border-slate-800 last:border-b-0"
                  >
                    {/* Bad (DeFi) */}
                    <div className="flex-1 flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                      </div>
                      <span className="text-slate-400 text-xs sm:text-sm md:text-base">
                        {t(`notDefi.items.${item}.bad`)}
                      </span>
                    </div>

                    {/* Arrow for desktop */}
                    <div className="hidden sm:block text-slate-600">→</div>

                    {/* Good (Trade Finance) */}
                    <div className="flex-1 flex items-center gap-2 sm:gap-3 ml-8 sm:ml-0">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                      </div>
                      <span className="text-emerald-400 font-medium text-xs sm:text-sm md:text-base">
                        {t(`notDefi.items.${item}.good`)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
