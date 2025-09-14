import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon } from 'lucide-react';
import { TrainerInfo, trainersData } from '@/lib/trainers-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TrainerCard: React.FC<{ trainer: TrainerInfo }> = ({ trainer }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 p-1">
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
            <div className="w-full md:w-2/3">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge 
                  variant={trainer.isFounder ? "default" : "secondary"}
                  className={trainer.isFounder 
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" 
                    : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300"
                  }
                >
                  {trainer.role}
                </Badge>
                {trainer.currentCompany && (
                  <Badge variant="outline" className="border-indigo-200 text-indigo-800 dark:border-indigo-800 dark:text-indigo-200">
                    {trainer.currentCompany}
                  </Badge>
                )}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {trainer.name}
              </h3>
              
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {trainer.bio}
                </p>
                
                {trainer.experience && trainer.experience.length > 0 && (
                  <div className="pt-2">
                    <h4 className="font-semibold mb-3 text-gray-900 dark:text-white flex items-center">
                      <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-indigo-500 mr-3" />
                      Key Experience
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {trainer.experience.map((exp, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                          <span className="mr-2 text-indigo-500">•</span>
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

export const TrainersSection = () => {
  const founders = trainersData.filter(t => t.isFounder);
  const trainers = trainersData.filter(t => !t.isFounder);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(179,70,252,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-800 to-indigo-700 bg-clip-text text-transparent">
              Our Leadership & Expert Trainers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn from industry experts and experienced professionals who bring real-world knowledge to your learning journey
            </p>
          </motion.div>
        </div>

        {/* Founders Section */}
        {founders.length > 0 && (
          <div className="mb-20">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center text-purple-800 dark:text-purple-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Visionary Leadership
            </motion.h3>
            <div className="grid gap-8">
              {founders.map((founder, index) => (
                <TrainerCard key={index} trainer={founder} />
              ))}
            </div>
          </div>
        )}

        {/* Trainers Section */}
        <div>
          <motion.h3 
            className="text-2xl font-bold mb-12 text-center text-purple-800 dark:text-purple-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Expert Trainers & Industry Professionals
          </motion.h3>
          <div className="grid gap-8 md:grid-cols-2">
            {trainers.map((trainer, index) => (
              <TrainerCard key={index} trainer={trainer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
