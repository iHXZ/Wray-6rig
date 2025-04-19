import SuggestionCard from "@/components/suggestion-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <header className="w-full py-6 text-center">
        <h1 className="text-4xl font-bold text-white">وراي طريق؟</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md px-4">
        <SuggestionCard />

        <p className="mt-8 text-sm text-gray-400 text-center">بدون تسجيل دخول. استمتع بطريقك!</p>
      </div>
    </main>
  )
}
