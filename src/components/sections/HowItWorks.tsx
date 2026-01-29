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
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-xl font-semibold text-white mb-8 text-center"
          >
            {t("dealFlow.title")}
          </motion.h3>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 -translate-y-1/2" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2">
              {dealFlowSteps.map((step, index) => (
                <motion.div
                  key={step.key}
                  variants={fadeInUp}
                  className="relative"
                >
                  <Card
                    className="text-center p-4 lg:p-6 bg-slate-900 border-slate-700"
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
                    <p className="text-slate-400 text-xs">
                      {t(`dealFlow.steps.${step.key}.description`)}
                    </p>
                  </Card>
                  {index < dealFlowSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-1 transform translate-x-1/2 -translate-y-1/2 z-10">
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
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-xl font-semibold text-white mb-8 text-center"
          >
            {t("settlement.title")}
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-slate-800/50 border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <h4 className="font-semibold text-white">
                      {t("settlement.traditional.title")}
                    </h4>
                  </div>
                  <span className="text-amber-400 font-mono text-sm">
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
                  <div className="flex justify-between mt-2 text-xs text-slate-500">
                    {(t.raw("settlement.traditional.steps") as string[]).map(
                      (step: string, i: number) => (
                        <span key={i}>{step}</span>
                      )
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Blockchain */}
            <motion.div variants={fadeInUp}>
              <Card className="p-6 bg-slate-800/50 border-emerald-500/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-emerald-400" />
                    <h4 className="font-semibold text-white">
                      {t("settlement.blockchain.title")}
                    </h4>
                  </div>
                  <span className="text-emerald-400 font-mono text-sm">
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
                  <div className="flex justify-between mt-2 text-xs text-slate-500">
                    {(t.raw("settlement.blockchain.steps") as string[]).map(
                      (step: string, i: number) => (
                        <span key={i}>{step}</span>
                      )
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-emerald-400 font-semibold mt-6"
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
            className="text-xl font-semibold text-white mb-8 text-center"
          >
            {t("collateral.title")}
          </motion.h3>

          <div className="max-w-2xl mx-auto space-y-4">
            {collateralLayers.map((layer, index) => (
              <motion.div
                key={layer.key}
                variants={fadeInUp}
                custom={index}
              >
                <Card
                  className={`p-4 border ${layer.color}`}
                  hover={false}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <layer.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {t(`collateral.layers.${layer.key}.title`)}
                      </h4>
                      <p className="text-slate-400 text-sm">
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
