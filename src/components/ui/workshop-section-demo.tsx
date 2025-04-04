import { MentoringSection } from "@/components/ui/mentoring-section"

function WorkshopSectionDemo() {
  return (
    <MentoringSection 
      sectionNumber="05."
      gradientTitle="Monthly Workshops"
      titleGradient="from-amber-500 via-orange-500 to-rose-500"
      mainHeading="Get Practical with In-depth Monthly Workshops Led by Top Experts"
      subHeading="Whether it's mastering negotiation tactics, designing a family financial plan, or sharpening your leadership skills, these sessions give you immediately applicable expertise."
      images={[
        {
          src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=90",
          alt: "Workshop participants collaborating on a design project"
        },
        {
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=90",
          alt: "Hands-on coding workshop with multiple participants"
        },
        {
          src: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=90",
          alt: "Interactive workshop with digital tools and equipment"
        }
      ]}
      buttonText="ACCESS ALL WORKSHOP MATERIALS"
    />
  )
}

export { WorkshopSectionDemo } 