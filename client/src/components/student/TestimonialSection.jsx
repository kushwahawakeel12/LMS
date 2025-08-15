import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
          <p className="mt-2 text-gray-600 text-sm">
            Hear from our learners about their journeys of success and growth.
          </p>
        </div>

        {/* Small Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {dummyTestimonial.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 hover:shadow-md transition"
            >
              {/* Top Section */}
              <div className="flex items-center gap-3">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    className="h-4"
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                    alt=""
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm mt-3 line-clamp-4">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
