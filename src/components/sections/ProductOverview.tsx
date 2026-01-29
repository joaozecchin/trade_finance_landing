"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Building,
  Scale,
  Lock,
} from "lucide-react";
import { Card, Badge, Button, SectionHeader } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ProductOverview() {
  const t = useTranslations("product");

  const seniorFeatures = [
    { key: "priority", icon: Shield },
    { key: "fixed", icon: TrendingUp },
    { key: "risk", icon: Scale },
    { key: "duration", icon: Clock },
  ];

  const juniorFeatures = [
    { key: "upside", icon: TrendingUp },
    { key: "excess", icon: CheckCircle },
    { key: "risk", icon: Scale },
    { key: "duration", icon: Clock },
  ];

  const crFeatures = [
    { key: "spv", icon: Building },
    { key: "regulation", icon: Shield },
    { key: "segregation", icon: Lock },
  ];

  return (
    <section id="product" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {/* Tranche Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16"
        >
          {/* Senior Tranche */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <Badge variant="senior">{t("senior.badge")}</Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 sm:mt-3">
                      {t("senior.title")}
                    </h3>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 financial-number">
                      {t("senior.return")}
                    </div>
                    <div className="text-slate-400 text-sm">{t("senior.currency")}</div>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {seniorFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm sm:text-base">
                        {t(`senior.features.${feature.key}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="https://brx.finance" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500">
                    {t("senior.cta")}
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>

          {/* Junior Tranche */}
          <motion.div variants={fadeInUp}>
            <Card className="h-full relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600" />
              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div>
                    <Badge variant="junior">{t("junior.badge")}</Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 sm:mt-3">
                      {t("junior.title")}
                    </h3>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 financial-number">
                      {t("junior.return")}
                    </div>
                    <div className="text-slate-400 text-sm">{t("junior.currency")}</div>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {juniorFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm sm:text-base">
                        {t(`junior.features.${feature.key}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="https://brx.finance" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-purple-600 hover:bg-purple-500">
                    {t("junior.cta")}
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* CR Securitization */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Card variant="gradient" className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                {t("cr.title")}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base">{t("cr.subtitle")}</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {crFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                    {t(`cr.features.${feature.key}.title`)}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    {t(`cr.features.${feature.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
