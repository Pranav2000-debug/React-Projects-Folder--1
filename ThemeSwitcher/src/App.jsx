import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import ThemeProvider from "./context/Theme";


function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn></ThemeBtn>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card></Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
