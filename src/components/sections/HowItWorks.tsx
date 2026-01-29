"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  User,
  Building2,
  Banknote,
  Ship,
  Store,
  ArrowRight,
  Clock,
  Zap,
  FileText,
  Shield,
  Package,
  FileCheck,
} from "lucide-react";
import { Card, SectionHeader } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const dealFlowSteps = [
    { key: "investor", icon: User, color: "text-blue-400" },
    { key: "fund", icon: Building2, color: "text-purple-400" },
    { key: "loan", icon: Banknote, color: "text-emerald-400" },
    { key: "exporter", icon: Ship, color: "text-amber-400" },
    { key: "importer", icon: Store, color: "text-rose-400" },
    { key: "returns", icon: ArrowRight, color: "text-blue-400" },
  ];

  const collateralLayers = [
    { key: "lc", icon: FileText, color: "bg-blue-500/20 border-blue-500/30" },
    { key: "cargo", icon: Package, color: "bg-purple-500/20 border-purple-500/30" },
    { key: "insurance", icon: Shield, color: "bg-emerald-500/20 border-emerald-500/30" },
    { key: "docs", icon: FileCheck, color: "bg-amber-500/20 border-amber-500/30" },
  ];

  return (
    <section id="how-it-works" className="relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />

        {/* Deal Flow */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8 text-center"
          >
            {t("dealFlow.title")}
          </motion.h3>

          {/* Mobile: Vertical timeline layout */}
          <div className="lg:hidden max-w-sm mx-auto">
            {dealFlowSteps.map((step, index) => (
              <motion.div
                key={step.key}
                variants={fadeInUp}
                className="relative flex items-start gap-3 sm:gap-4"
              >
                {/* Timeline connector */}
                <div className="flex flex-col items-center">
                  {/* Step number circle */}
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center flex-shrink-0 z-10 ${step.color}`}
                  >
                    <span className="text-xs sm:text-sm font-bold">{index + 1}</span>
                  </div>
                  {/* Connecting line */}
                  {index < dealFlowSteps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[3rem] bg-gradient-to-b from-slate-600 to-slate-700" />
                  )}
                </div>

                {/* Card content */}
                <div className="flex-1 pb-4">
                  <Card
                    className="p-3 sm:p-4 bg-slate-900 border-slate-700"
                    hover={false}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 ${step.color}`}
                      >
                        <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <h4 className="font-semibold text-white text-sm sm:text-base">
                        {t(`dealFlow.steps.${step.key}.title`)}
                      </h4>
                    </div>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed ml-10 sm:ml-[52px]">
                      {t(`dealFlow.steps.${step.key}.description`)}
                    </p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal flow */}
          <div className="hidden lg:block relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 -translate-y-1/2" />

            <div className="grid grid-cols-6 gap-2">
              {dealFlowSteps.map((step, index) => (
                <motion.div
                  key={step.key}
                  variants={fadeInUp}
                  className="relative"
                >
                  <Card
                    className="text-center p-6 bg-slate-900 border-slate-700"
                    hover={false}
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-3 ${step.color}`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {t(`dealFlow.steps.${step.key}.title`)}
                    </h4>
                    <p className="text-slate-400 text-xs leading-tight">
                      {t(`dealFlow.steps.${step.key}.description`)}
                    </p>
                  </Card>
                  {index < dealFlowSteps.length - 1 && (
                    <div className="flex absolute top-1/2 -right-1 transform translate-x-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Settlement Comparison */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 sm:mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8 text-center"
          >
            {t("settlement.title")}
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Traditional */}
            <motion.div variants={fadeInUp}>
              <Card className="p-4 sm:p-6 bg-slate-800/50 border-slate-700">
                <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                    <h4 className="font-semibold text-white text-sm sm:text-base truncate">
                      {t("settlement.traditional.title")}
                    </h4>
                  </div>
                  <span className="text-amber-400 font-mono text-xs sm:text-sm flex-shrink-0">
                    {t("settlement.traditional.duration")}
                  </span>
                </div>
                <div className="relative">
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] sm:text-xs text-slate-500 gap-1">
                    {(t.raw("settlement.traditional.steps") as string[]).map(
                      (step: string, i: number) => (
                        <span key={i} className="truncate">{step}</span>
                      )
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Blockchain */}
            <motion.div variants={fadeInUp}>
              <Card className="p-4 sm:p-6 bg-slate-800/50 border-emerald-500/30">
                <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                    <h4 className="font-semibold text-white text-sm sm:text-base truncate">
                      {t("settlement.blockchain.title")}
                    </h4>
                  </div>
                  <span className="text-emerald-400 font-mono text-xs sm:text-sm flex-shrink-0">
                    {t("settlement.blockchain.duration")}
                  </span>
                </div>
                <div className="relative">
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] sm:text-xs text-slate-500 gap-1">
                    {(t.raw("settlement.blockchain.steps") as string[]).map(
                      (step: string, i: number) => (
                        <span key={i} className="truncate">{step}</span>
                      )
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-emerald-400 font-semibold mt-4 sm:mt-6 text-sm sm:text-base"
          >
            {t("settlement.timeSaved")}
          </motion.p>
        </motion.div>

        {/* Collateral Stack */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8 text-center"
          >
            {t("collateral.title")}
          </motion.h3>

          <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
            {collateralLayers.map((layer, index) => (
              <motion.div
                key={layer.key}
                variants={fadeInUp}
                custom={index}
              >
                <Card
                  className={`p-3 sm:p-4 border ${layer.color}`}
                  hover={false}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <layer.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-white text-sm sm:text-base">
                        {t(`collateral.layers.${layer.key}.title`)}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm">
                        {t(`collateral.layers.${layer.key}.description`)}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
