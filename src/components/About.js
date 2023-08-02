import React from 'react'

export default function About(props) {

return (
  <>
    <div className='container flex justify-center items-center ' style={props.dkmode}>
      <h1 className='text-2xl font-bold'>About Us</h1>
    </div>
    <section class="text-gray-600 body-font" style={props.dkmode}>
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.plDtoL3XjPALljdScukgeQHaHa%26pid%3DApi&f=1&ipt=fbde38ad686b3bb44a8e69493dcda54911d127174c74ae824c3fad456a29e83c&ipo=images" />
              <p class="leading-relaxed">Welcome to our innovative text editing app! We are a team of dedicated developers committed to revolutionizing the way you edit and refine your written content. Our app offers a seamless and intuitive user interface, empowering users with a wide range of powerful editing tools and features.</p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm"style={props.dkmode}>SAGAR YENKURE</h2>
              <p class="text-gray-500">MERN DEVLOPER</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.gtfWbRZv1HEC6Fu0-vAHpQAAAA%26pid%3DApi&f=1&ipt=24bf182f91a34ec534670d07aaf0e78c6f2da864ba1d963d365fb5b8a1212b09&ipo=images" />
              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki tax Lorem ipsum dolor sit amet. idermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag Lorem ipsum dolor sit amet. drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm" style={props.dkmode}>CONNIE</h2>
              <p class="text-gray-500">AOT</p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.byiS-lCht_XzyGiq_s4M9wHaHa%26pid%3DApi&f=1&ipt=15654c7847ff4acbb4d6cf70c839afab2668de2c40a892faf2e90adf87e8ecec&ipo=images" />
              <p class="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm" style={props.dkmode}>TANJIRO</h2>
              <p class="text-gray-500">DEMON SLAYER</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <button onClick={dkbutton} className='upperbtn bg-black text-white space-y-2 p-2 m-2 rounded-xl'>{dktext}</button> */}

  </>
)
}

