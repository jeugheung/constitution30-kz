import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DetailedArticle from "./pages/ArticleDetailedPage";
import DetailedFirst from "./pages/detailed/Detailed-1";
import DetailedNine from "./pages/detailed/Detailed-9";
import DetailedTwelve from "./pages/detailed/Detailed-12";
import DetailedThirty from "./pages/detailed/Detailed-30";
import DetailedArticle40 from "./pages/detailed/Detailed-40";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/article/1" element={<DetailedFirst/>}/>
          <Route path="/article/9" element={<DetailedNine/>}/>
          <Route path="/article/12" element={<DetailedTwelve/>}/>
          <Route path="/article/30" element={<DetailedThirty/>}/>
          <Route path="/article/40" element={<DetailedArticle40/>}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
