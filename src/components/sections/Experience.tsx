"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { type TranslationKey } from "~/lib/i18n";

interface ExperienceProps {
  tKey: (key: string) => string;
}

export function Experience({ tKey }: ExperienceProps) {
  return (
    <Element name="experience" className="py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">{tKey("experience")}</h2>
        </div>
        
        {/* Experience Cards */}
        <div className="space-y-6">
          {[
            {
              key: "experienceTexas",
              title: "Title",
              position: "Position",
              date: "Date",
              desc1: "Desc1",
              desc2: "Desc2",
              desc3: "Desc3",
              skills: "Skills"
            },
            {
              key: "experienceCnpq",
              title: "Title",
              position: "Position",
              date: "Date",
              desc1: "Desc1",
              desc2: "Desc2",
              desc3: "Desc3",
              skills: "Skills"
            },
            {
              key: "experienceImeJunior",
              title: "Title",
              position: "Position",
              date: "Date",
              desc1: "Desc1",
              desc2: "Desc2",
              desc3: "Desc3",
              skills: "Skills"
            },
            {
              key: "experienceProject",
              title: "Title",
              position: "Position",
              date: "Date",
              desc1: "Desc1",
              desc2: "Desc2",
              desc3: "Desc3",
              skills: "Skills"
            },
            {
              key: "experienceStem",
              title: "Title",
              position: "Position",
              date: "Date",
              desc1: "Desc1",
              desc2: "Desc2",
              desc3: "Desc3",
              skills: "Skills"
            }
          ].map((exp) => (
            <Card key={exp.key}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{tKey(`${exp.key}${exp.title}`)}</CardTitle>
                    <CardDescription>{tKey(`${exp.key}${exp.position}`)}</CardDescription>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{tKey(`${exp.key}${exp.date}`)}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>{tKey(`${exp.key}${exp.desc1}`)}</li>
                  <li>{tKey(`${exp.key}${exp.desc2}`)}</li>
                  <li>{tKey(`${exp.key}${exp.desc3}`)}</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tKey(`${exp.key}${exp.skills}`).split(',').map((skill, index) => (
                    <Badge key={`${exp.key}-skill-${index}`} variant="secondary">{skill.trim()}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </Element>
  );
} 