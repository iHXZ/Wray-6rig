"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { suggestions } from "@/data/suggestions"

export default function SuggestionCard() {
  const [currentSuggestion, setCurrentSuggestion] = useState(() => {
    return suggestions[Math.floor(Math.random() * suggestions.length)]
  })

  const getNewSuggestion = () => {
    let newSuggestion
    do {
      newSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)]
    } while (newSuggestion === currentSuggestion)

    setCurrentSuggestion(newSuggestion)
  }

  return (
    <div className="w-full">
      <Card className="bg-gray-900 border-gray-800 shadow-lg">
        <CardContent className="p-6">
          <div className="min-h-[150px] flex items-center justify-center">
            <p className="text-xl text-center font-medium text-white" dir="rtl">
              {currentSuggestion}
            </p>
          </div>
        </CardContent>
      </Card>

      <Button onClick={getNewSuggestion} className="w-full mt-4 bg-blue-900 hover:bg-blue-800 text-white" dir="rtl">
        عطنا فكرة ثانية
      </Button>
    </div>
  )
}
