import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkedinIcon, Briefcase, Award, Users2, ChevronDown, ChevronUp, X } from 'lucide-react';
import { TrainerInfo, trainersData } from '@/lib/trainers-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Founder Card Component - Keeps the original expanded design
const FounderCard: React.FC<{ trainer: TrainerInfo; index: number }> = ({ trainer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="col-span-1 md:col-span-2"
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute h-1 top-0 left-0 right-0 bg-gradient-to-r from-primary to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        <CardContent className="p-6 md:p-8 md:flex md:items-center">
          <div className="md:flex-row gap-6 md:gap-8 flex flex-col md:flex-row">
            <div className="w-full md:w-1/4">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 p-1 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {trainer.linkedin && (
                  <a 
                    href={trainer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
                  >
                    <LinkedinIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Connect on LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
            <div className="w-full md:w-3/4">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge 
                  variant="default"
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 text-white"
                >
                  {trainer.role}
                </Badge>
                {trainer.currentCompany && (
                  <Badge variant="outline" className="border-indigo-200 text-indigo-800 dark:border-indigo-800 dark:text-indigo-200">
                    {trainer.currentCompany}
                  </Badge>
                )}
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {trainer.name}
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {trainer.bio}
                </p>
                
                {trainer.experience && trainer.experience.length > 0 && (
                  <div className="pt-2">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                      <span className="w-8 h-px bg-gradient-to-r from-primary to-purple-600 mr-3" />
                      <Briefcase className="w-4 h-4 mr-2" />
                      Key Experience
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {trainer.experience.map((exp, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Trainer Card Component - Redesigned to match the reference image
const TrainerCard: React.FC<{ trainer: TrainerInfo; index: number; onOpenModal: () => void }> = ({ 
  trainer, 
  index, 
  onOpenModal 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="col-span-1"
    >
      <Card className="h-[520px] hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden bg-white dark:bg-gray-800 flex flex-col">
        <CardContent className="p-8 flex flex-col flex-1">
          {/* Header Section */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
              <img 
                src={trainer.image} 
                alt={trainer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0 pt-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {trainer.name}
              </h3>
              {trainer.companies && trainer.companies.length > 0 && (
                <div className="flex items-center gap-2">
                  {trainer.companies.map((logo, idx) => (
                    <div key={idx} className="h-12 flex items-center">
                      <img 
                        src={logo} 
                        alt={`Company ${idx + 1}`}
                        className="h-full w-auto object-contain max-w-[160px]"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Role Badge */}
          <div className="mb-4">
            <div className="flex items-center gap-2 text-gray-900 dark:text-white mb-3">
              <Briefcase className="w-5 h-5 text-red-500" />
              <span className="font-semibold">{trainer.role}</span>
            </div>
          </div>

          {/* Bio Section */}
          <div className="mb-6 flex-1">
            <div className="flex items-start gap-2 mb-2">
              <Award className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            </div>
          </div>

          {/* LinkedIn Link */}
          {trainer.linkedin && (
            <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
              <a 
                href={trainer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                <LinkedinIcon className="w-5 h-5" />
                <span>LinkedIn Profile</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Trainer Bio Modal Component
const TrainerBioModal: React.FC<{ 
  trainer: TrainerInfo | null; 
  isOpen: boolean; 
  onClose: () => void 
}> = ({ trainer, isOpen, onClose }) => {
  if (!trainer) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <DialogTitle className="text-2xl">{trainer.name}</DialogTitle>
              <Badge 
                variant="secondary"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white mt-1"
              >
                {trainer.role}
              </Badge>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-4 mt-2">
          <p className="text-gray-700 leading-relaxed">
            {trainer.bio}
          </p>
          
          {trainer.specializations && (
            <div className="pt-2">
              <h4 className="font-semibold mb-2 text-gray-900 flex items-center">
                <Award className="w-4 h-4 mr-2 text-indigo-600" />
                Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {trainer.specializations.map((spec, idx) => (
                  <Badge key={idx} variant="outline" className="border-indigo-200 bg-indigo-50">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {trainer.experience && trainer.experience.length > 0 && (
            <div className="pt-2">
              <h4 className="font-semibold mb-2 text-gray-900 flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-indigo-600" />
                Key Experience
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {trainer.experience.map((exp, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-start">
                    <span className="mr-2 text-indigo-500">•</span>
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {trainer.linkedin && (
            <div className="pt-4">
              <a 
                href={trainer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 mr-2" />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const TrainersSection = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerInfo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const founders = trainersData.filter(t => t.isFounder);
  const trainers = trainersData.filter(t => !t.isFounder);
  
  const handleOpenTrainerModal = (trainer: TrainerInfo) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedTrainer(null), 300); // Clear after animation
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0 opacity-10 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,70,252,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-700 bg-clip-text text-transparent">
              Our Leaders & Expert Trainers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the industry veterans and passionate educators who are transforming education and building the future workforce
            </p>
          </motion.div>
        </div>

        {/* Founders Section */}
        {founders.length > 0 && (
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center mb-8 gap-3"
            >
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-center text-primary">
                Visionary Leadership
              </h3>
            </motion.div>
            
            <div className="grid gap-8">
              {founders.map((founder, index) => (
                <FounderCard key={index} trainer={founder} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Trainers Section */}
        <div>
          <motion.div 
            className="flex items-center justify-center mb-12 gap-3 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* <Users2 className="h-6 w-6 text-purple-600" /> */}
            {/* <h3 className="text-2xl font-bold text-center text-purple-800 dark:text-purple-400">
              Expert Trainers & Industry Professionals
            </h3> */}
          </motion.div>
          
          <div className="flex flex-wrap gap-8 justify-center max-w-8xl mx-auto">
            {trainers.map((trainer, index) => (
              <div key={index} className="w-full sm:w-[420px] xl:w-[440px]">
                <TrainerCard 
                  trainer={trainer} 
                  index={index}  
                  onOpenModal={() => handleOpenTrainerModal(trainer)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Trainer Bio Modal */}
      <TrainerBioModal 
        trainer={selectedTrainer} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </section>
  );
};
