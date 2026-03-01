import React from 'react'

function Skills() {
  return (
    <>
          <div className='border px-10 pt-8 pb-10 my-10 md:my-0'>
              <h1 className='mb-3 font-medium'>Frontend</h1>
              <div className='grid grid-cols-3 md:grid-cols-6 bg-base-300'>
                  <div className='p-3 border text-center' >React</div>
                  <div className='p-3 border text-center' >Html</div>
                  <div className='p-3 border text-center' >Javascript</div>
                  <div className='p-3 border text-center' >Css</div>
                  <div className='p-3 border text-center' >Tailwind</div>
                  <div className='p-3 border text-center' >Bootstrap</div>
              </div>

              <h1 className='mb-3 mt-5 font-medium'>Backend</h1>
              <div className='grid grid-cols-3 md:grid-cols-6 bg-base-300'>
                  <div className='p-3 border text-center' >Node.js</div>
                  <div className='p-3 border text-center' >Express.js</div>
                  <div className='p-3 border text-center' >JWT (Auth)</div>
                  <div className='p-3 border text-center' > Joi (Validation)</div>
                  <div className='p-3 border text-center' >REST APIs</div>
                  <div className='p-3 border text-center' ></div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 mt-8 '>
                  <div className=''>
                      <h1 className='mb-3 font-medium'>Database</h1>
                      <div className='grid grid-cols-3 bg-base-300'>
                          <div className='p-3 border text-center' >MongoDB</div>
                          <div className='p-3 border text-center' >Mongoose</div>
                          <div className='p-3 border text-center' >SQL</div>
                      </div>
                  </div>
                  <div className=''>
                      <h1 className='mt-5 md:mt-0 mb-3 font-medium'>Developer Tools</h1>
                      <div className='grid grid-cols-3 bg-base-300'>
                          <div className='p-3 border text-center' >Git/Github</div>
                          <div className='p-3 border text-center' >Postman</div>
                          <div className='p-3 border text-center' >Render</div>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}

export default Skills
