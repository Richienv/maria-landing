import { HeroSection } from "@/components/ui/hero-section"

function HeroSectionDemo() {
  return (
    <HeroSection
      title="Elite Financial Trading Platform"
      subtitle={{
        regular: "Your gateway to ",
        gradient: "financial independence",
      }}
      description="Access cutting-edge trading tools and exclusive financial strategies developed by industry veterans with our comprehensive platform."
      ctaText="Join Our Elite Team"
      ctaHref="#"
      bottomImage={{
        light: "https://images.unsplash.com/photo-1579621970590-9d624316904b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        dark: "https://images.unsplash.com/photo-1579621970590-9d624316904b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.3,
        cellSize: 50,
        lightLineColor: "#6366f1",
        darkLineColor: "#4338ca",
      }}
    />
  )
}
export { HeroSectionDemo } 