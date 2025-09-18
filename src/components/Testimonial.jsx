import TestimonialSwiper from './TestimonialSwiper'

export default function Testimonial() {
  return (
    <div className="mb-8 max-w-6xl mx-auto px-4">
      <h2 className="mx-auto my-3 font-bold text-3xl text-center md:mb-9">
        What they've said
      </h2>

      <TestimonialSwiper />

      <button
        className="bg-primary-orange px-7 py-2 my-4 block mx-auto rounded-full font-semibold text-neutral-gray50 shadow-primary-orange/80 shadow-xl 
          transition-all hover:scale-105 hover:opacity-80"
      >
        Get Started
      </button>
    </div>
  )
}
