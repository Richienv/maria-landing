import { MentoringSection } from "@/components/ui/mentoring-section"

function MentoringSectionDemo() {
  return (
    <MentoringSection 
      sectionNumber="04."
      gradientTitle="Private Mentoring"
      mainHeading="Akses Langsung Ke Para Founder Untuk Main Ke Kantor Kita"
      subHeading="untuk private mentoring dengan komunitas."
      images={[
        {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=90",
          alt: "Team working together in a collaborative meeting"
        },
        {
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=90",
          alt: "Private mentoring session with creative planning"
        },
        {
          src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=90",
          alt: "Group collaboration on a digital project"
        }
      ]}
      buttonText="VALUE, 17JT PER TAHUN"
    />
  )
}

export { MentoringSectionDemo } 