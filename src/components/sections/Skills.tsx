"use client"

import { Card, CardContent } from "~/components/ui/card";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { type TranslationKey } from "~/lib/i18n";

interface SkillsProps {
  tKey: (key: string) => string;
}

export function Skills({ tKey }: SkillsProps) {
  return (
    <Element name="skills" className="py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Code className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">{tKey("skills")}</h2>
        </div>
        
        <div className="space-y-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{tKey("technicalSkills")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "autocad", level: "beginner", icon: "/icons/autocad.svg" },
                { name: "python", level: "beginner", icon: "/icons/python.svg" },
                { name: "cfd", level: "intermediate", icon: "/icons/cfd.svg" },
                { name: "mechanicalDesign", level: "intermediate", icon: "/icons/mechanical-design.svg" },
                { name: "ansysFluent", level: "intermediate", icon: "/icons/ansys-fluent.svg" },
                { name: "aerodynamics", level: "advanced", icon: "/icons/aerodynamics.svg" },
                { name: "thermodynamics", level: "advanced", icon: "/icons/thermodynamics.svg" },
                { name: "ballistics", level: "advanced", icon: "/icons/ballistics.svg" },
                { name: "3dPrototyping", level: "advanced", icon: "/icons/3d-prototyping.svg" },
                { name: "flightstream", level: "advanced", icon: "/icons/flightstream.svg" },
                { name: "matlab", level: "advanced", icon: "/icons/matlab.svg" },
                { name: "labview", level: "advanced", icon: "/icons/labview.svg" },
                { name: "solidworks", level: "advanced", icon: "/icons/solidworks.svg" }
              ].map((skill) => (
                <Card key={skill.name} className="overflow-hidden">
                  <CardContent className="p-4 h-24 flex items-center">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-8 h-8 flex-shrink-0">
                        <img src={skill.icon} alt={tKey(skill.name)} className="w-full h-full" />
                      </div>
                      <div>
                        <p className="font-medium">{tKey(skill.name)}</p>
                        <div className={`text-xs px-2 py-0.5 rounded-full inline-flex items-center ${
                          skill.level === "beginner" ? "bg-yellow-100 text-yellow-800" : 
                          skill.level === "intermediate" ? "bg-blue-100 text-blue-800" : 
                          "bg-green-100 text-green-800"
                        }`}>
                          {tKey(skill.level)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{tKey("softSkills")}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "portuguese", level: "advanced", icon: "/icons/portuguese.svg" },
                { name: "english", level: "advanced", icon: "/icons/english.svg" }
              ].map((skill) => (
                <Card key={skill.name} className="overflow-hidden">
                  <CardContent className="p-4 h-24 flex items-center">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-8 h-8 flex-shrink-0">
                        <img src={skill.icon} alt={tKey(skill.name)} className="w-full h-full" />
                      </div>
                      <div>
                        <p className="font-medium">{tKey(skill.name)}</p>
                        <div className={`text-xs px-2 py-0.5 rounded-full inline-flex items-center ${
                          skill.level === "beginner" ? "bg-yellow-100 text-yellow-800" : 
                          skill.level === "intermediate" ? "bg-blue-100 text-blue-800" : 
                          "bg-green-100 text-green-800"
                        }`}>
                          {tKey(skill.level)}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Element>
  );
} 