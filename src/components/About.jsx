import AboutCard from "./AboutCard"

export default function About() {
  return (
     <div className= "my-6 flex flex-col md:p-3 md:gap-30 md:flex-row">
      <div>
          <h2 className='text-3xl font-semibold text-center my-6 
          max-w-xs md:max-w-md mx-auto
          md:text-left md:text-5xl '>What's different about Manage?</h2>
          <p className="text-neutral-400 text-sm text-center  mb-7  md:text-left sm:max-w-md  mx-auto md:leading-6  ">
            Manage provides all the functionality  your team needs, without 
             the complexity. Our software is tailor-made for modern digital 
              product teams. </p>

      </div>
          <div className="space-y-4  ">
      <AboutCard
        number="01"
        title="Track company-wide progress"
        text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again."
      />

      <AboutCard
        number="02"
        title="Advanced built-in reports"
        text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
      />

      <AboutCard
        number="03"
        title="Everything you need in one place"
        text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
      />
    </div>

     </div>
  )
}
