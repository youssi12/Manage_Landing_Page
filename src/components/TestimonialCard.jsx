export default function TestimonialCard({ pic, name, text }) {
  return (
    <div className="bg-gray-100 text-center max-w-[400px] p-5 rounded-lg   mx-auto  h-[250px]">
      <div className="mb-3 flex justify-center items-center">
        <img src={pic} alt={name} className="w-[70px]" />
      </div>
      <h3 className="capitalize font-semibold text-lg">{name}</h3>
      <p className="text-neutral-400 text-center mt-2">{text}</p>
    </div>
  );
}
