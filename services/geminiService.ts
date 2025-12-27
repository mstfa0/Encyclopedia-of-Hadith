
import { GoogleGenAI, Type } from "@google/genai";
import { SearchResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const searchHadith = async (query: string): Promise<SearchResult> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Search for Hadiths related to: "${query}". Provide a detailed explanation and a list of relevant Hadiths with their sources and grades.`,
    config: {
      systemInstruction: `You are an expert in Islamic Hadith studies (Muhaddith). 
      Format your response as a JSON object matching the SearchResult interface. 
      Language must be Arabic.
      Always include 'hadiths' (array of objects with text, source, grade) and 'explanation' (string).`,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          hadiths: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                text: { type: Type.STRING },
                source: { type: Type.STRING },
                grade: { type: Type.STRING },
              },
              required: ['text', 'source', 'grade']
            }
          },
          explanation: { type: Type.STRING },
        },
        required: ['hadiths', 'explanation']
      }
    },
  });

  return JSON.parse(response.text || '{}');
};
