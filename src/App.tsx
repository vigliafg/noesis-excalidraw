import { useState } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { FileJson, HelpCircle } from "lucide-react";

// Import Excalidraw styles
import "@excalidraw/excalidraw/index.css";

export default function App() {
  const [excalidrawAPI, setExcalidrawAPI] = useState<any>(null);

  return (
    <div className="h-screen w-screen flex flex-col bg-neutral-50 font-sans overflow-hidden">
      {/* Header / Toolbar */}
      <header className="h-14 border-b border-neutral-200 bg-white flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-3">
          <div className="bg-neutral-900 text-white p-1.5 rounded-lg">
            <FileJson size={20} />
          </div>
          <h1 className="text-sm font-semibold tracking-tight text-neutral-900 italic font-serif">
            Excalidraw Local
          </h1>
        </div>

        <button
          onClick={() => excalidrawAPI?.updateAppState({ openDialog: "help" })}
          className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-full transition-colors"
          title="Help"
        >
          <HelpCircle size={20} />
        </button>
      </header>

      {/* Main Editor */}
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0">
          <Excalidraw
            excalidrawAPI={(api) => setExcalidrawAPI(api)}
            UIOptions={{
              canvasActions: {
                loadScene: true,
                saveToActiveFile: false,
                saveAsImage: true,
                export: {
                  saveFileToDisk: true,
                },
              },
            }}
          >
          <MainMenu>
            <MainMenu.DefaultItems.LoadScene />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.Export />
            <MainMenu.Separator />
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.Separator />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
          
          <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.Logo />
              <WelcomeScreen.Center.Heading>
                Excalidraw Local
              </WelcomeScreen.Center.Heading>
            </WelcomeScreen.Center>
          </WelcomeScreen>
        </Excalidraw>
      </div>
    </main>

      {/* Footer / Status */}
      <footer className="h-8 border-t border-neutral-200 bg-white flex items-center justify-between px-4 text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
        <div className="flex items-center gap-4">
          <span>Mode: Standalone / Serverless</span>
        </div>
        <div>
          {new Date().toLocaleDateString()}
        </div>
      </footer>
    </div>
  );
}
