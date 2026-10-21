import Link from "next/link";
import BudgetCalculator from "@/components/BudgetCalculator";
import { Wallet, ShieldCheck, ChevronRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Trip Cost & Budget Calculator | Bharat Yatra",
  description: "Calculate realistic travel expenses across stays, authentic cuisine, transport, and monument entries in your chosen currency.",
};

export default function BudgetPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400">
        <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-amber-400 font-semibold">Travel Budget Engine</span>
      </nav>

      {/* Main Interactive Budget Tool */}
      <BudgetCalculator />
    </div>
  );
}
