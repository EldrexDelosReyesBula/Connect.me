import React from 'react';
import { X, Gavel, Shield, ArrowRight, ChevronRight } from 'lucide-react';

interface AboutSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutSheet: React.FC<AboutSheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1b1c17]/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div className="relative w-full max-w-[420px] bg-[#fdfdf6] rounded-t-[32px] sm:rounded-[32px] shadow-2xl animate-sheet-up flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-2">
          <h2 className="text-[24px] font-normal text-[#1b1c17]">About Contact.me</h2>
          <button 
            onClick={onClose}
            className="p-2 bg-[#e2e3dd] rounded-full hover:bg-[#c6c8c0] transition-colors active:scale-95"
          >
            <X className="w-6 h-6 text-[#44473f]" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto p-6 pt-2 space-y-8 scrollbar-hide">
          
          {/* Version Info */}
          <div>
            <h3 className="text-lg font-medium text-[#1b1c17]">Contact.me Portal</h3>
            <p className="text-sm text-[#44473f] bg-[#e2e3dd] inline-block px-3 py-1 rounded-full mt-2 font-medium">
              Version 1.0
            </p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#1b1c17]">What is Contact.me?</h4>
            <p className="text-sm text-[#44473f] leading-relaxed">
              Contact.me is a personal digital contact designed to provide a clear, professional, and structured way to connect with Eldrex Delos Reyes Bula.
            </p>
            <p className="text-sm text-[#44473f] leading-relaxed">
              It separates academic and personal communication channels, each with its own purpose and expectations, helping ensure messages are sent through the most appropriate path and receive timely responses.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-[#1b1c17] mb-2">Links</h4>
            
            {/* Terms */}
            <button className="w-full flex items-center justify-between group p-1 active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e2e3dd] flex items-center justify-center text-[#44473f]">
                  <Gavel className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-base font-medium text-[#1b1c17]">Terms of Use</span>
                  <span className="block text-xs text-[#44473f]">Guidelines for using the Contact.me</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#44473f]/50 group-hover:text-[#1b1c17] group-hover:translate-x-1 transition-all" />
            </button>

            {/* Privacy */}
            <button className="w-full flex items-center justify-between group p-1 active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e2e3dd] flex items-center justify-center text-[#44473f]">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block text-base font-medium text-[#1b1c17]">Privacy Policy</span>
                  <span className="block text-xs text-[#44473f]">How your data and interactions are handled</span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#44473f]/50 group-hover:text-[#1b1c17] group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          {/* Footer */}
          <div className="pt-8 pb-4 text-center border-t border-[#74796d]/10">
            <p className="text-xs text-[#44473f]/60 font-medium">
              © 2026 Contact.me
            </p>
            <p className="text-xs text-[#44473f]/60 mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSheet;
