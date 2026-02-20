import React, { useState } from 'react';
import { GraduationCap, User, MessageSquare, PenLine } from 'lucide-react';
import Header from './components/Header';
import Profile from './components/Profile';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import ComposeModal from './components/ComposeModal'; // Used for Write Message Fullscreen
import ContactSheet from './components/ContactSheet';
import AboutSheet from './components/AboutSheet';
import { CardVariant } from './types';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<CardVariant | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleCardClick = (variant: CardVariant) => {
    setActiveModal(variant);
  };

  const closeModals = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-4 sm:py-8 px-4 bg-[#F9FAFB]">
      <style>{`
         .stagger-1 { animation-delay: 100ms; }
         .stagger-2 { animation-delay: 200ms; }
         .stagger-3 { animation-delay: 300ms; }
         .stagger-4 { animation-delay: 400ms; }
      `}</style>
      <main className="w-full max-w-[420px] mx-auto bg-white sm:bg-transparent rounded-none sm:rounded-[3rem] p-0 sm:p-6 animate-in fade-in duration-500">
        
        <Header onInfoClick={() => setIsAboutOpen(true)} />
        
        <Profile />
        
        <div className="flex flex-col gap-4 px-4 sm:px-0 mt-2">
          <div className="animate-in slide-in-from-bottom-8 duration-700 ease-md-emphasized stagger-1 fill-mode-backwards">
            <LinkCard 
              variant={CardVariant.ACADEMIC}
              title="Academic"
              description="For school, ICS, and academic matters"
              icon={GraduationCap}
              onClick={() => handleCardClick(CardVariant.ACADEMIC)}
            />
          </div>
          
          <div className="animate-in slide-in-from-bottom-8 duration-700 ease-md-emphasized stagger-2 fill-mode-backwards">
            <LinkCard 
              variant={CardVariant.PERSONAL}
              title="Personal"
              description="For non-academic, Formal and informal communication"
              icon={User}
              onClick={() => handleCardClick(CardVariant.PERSONAL)}
            />
          </div>
          
          <div className="animate-in slide-in-from-bottom-8 duration-700 ease-md-emphasized stagger-3 fill-mode-backwards">
            <LinkCard 
              variant={CardVariant.NGL}
              title="NGL"
              description="Send me anonymous messages and questions"
              icon={MessageSquare}
              onClick={() => handleCardClick(CardVariant.NGL)}
            />
          </div>
          
          <div className="animate-in slide-in-from-bottom-8 duration-700 ease-md-emphasized stagger-4 fill-mode-backwards">
            <LinkCard 
              variant={CardVariant.WRITE_MESSAGE}
              title="Write Message"
              description="Compose a structured email with subject"
              icon={PenLine}
              onClick={() => handleCardClick(CardVariant.WRITE_MESSAGE)}
            />
          </div>
        </div>

        <Footer />
      </main>

      {/* Fullscreen Write Message Modal */}
      <ComposeModal 
        isOpen={activeModal === CardVariant.WRITE_MESSAGE} 
        onClose={closeModals} 
      />

      {/* Bottom Sheet / Dialog for Contacts */}
      <ContactSheet
        isOpen={activeModal === CardVariant.ACADEMIC || activeModal === CardVariant.PERSONAL || activeModal === CardVariant.NGL}
        onClose={closeModals}
        type={activeModal}
      />

      {/* About Info Sheet */}
      <AboutSheet
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
};

export default App;