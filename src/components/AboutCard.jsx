
export default function AboutCard({number,title,text}) {
  return (
     
    <div class="  w-full sm:w-2/3 py-2 pl-2 right-0 md:w-full"> 
        <div class=" bg-neutral-orange   flex gap-3  items-center rounded-l-full mb-2  w-screen md:bg-transparent  md:w-auto   ">
            <div class=" bg-primary-orange px-4 rounded-full py-1 word-break "> {number}</div>
             <h3 class="font-semibold ">{title}</h3>
        </div>
        <p class="  text-neutral-400 text-sm p-1 ml-[4vw]">{text}</p>
    </div>
 
 
  )
}
