import { MentoringSection } from "@/components/ui/mentoring-section"

function CommunitySectionDemo() {
  return (
    <MentoringSection 
      sectionNumber="06."
      gradientTitle="Elite Network"
      titleGradient="from-emerald-500 via-teal-500 to-cyan-500"
      mainHeading="Connect With Over 700 Team Members and Industry Leaders Across Indonesia"
      subHeading="Elegant dinners, rooftop mixers, and exclusive events held quarterly in cities like Jakarta, Surabaya, and Bali. Build lasting connections that open doors to partnerships and opportunities."
      images={[
        {
          src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=90",
          alt: "Global networking event with diverse participants"
        },
        {
          src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=90",
          alt: "Community members collaborating in a casual environment"
        },
        {
          src: "https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=90",
          alt: "Community celebration and social gathering"
        }
      ]}
      buttonText="SECURE ONE OF 15 MONTHLY SPOTS"
    />
  )
}

export { CommunitySectionDemo } 