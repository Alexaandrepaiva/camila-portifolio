"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { type TranslationKey } from "~/lib/i18n";

interface EducationProps {
  tKey: (key: string) => string;
}

export function Education({ tKey }: EducationProps) {
  return (
    <Element name="education" className="py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">{tKey("education")}</h2>
        </div>
        
        {/* Education Cards */}
        <div className="space-y-6">
          {[
            {
              key: "educationIme",
              title: "Title",
              degree: "Degree",
              date: "Date",
              desc: "Desc"
            },
            {
              key: "educationTexas",
              title: "Title",
              degree: "Degree",
              date: "Date",
              desc: "Desc"
            }
          ].map((edu) => (
            <Card key={edu.key}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{tKey(`${edu.key}${edu.title}`)}</CardTitle>
                    <CardDescription>{tKey(`${edu.key}${edu.degree}`)}</CardDescription>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{tKey(`${edu.key}${edu.date}`)}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{tKey(`${edu.key}${edu.desc}`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </Element>
  );
} 