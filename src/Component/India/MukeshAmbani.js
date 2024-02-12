import React from 'react'
import Header from '../Header'

export default function MukeshAmbani() {
  return (
      <div className='bg-dark '>
      <Header/>
      <div className='container'>
        <div className='row  pt-4'>
          <div className='col-md-4 pt-4'>
        <img
            className="card-img-top border"
            src="/Image/Mukesh_Ambani.jpg"
            alt="Card image"
            width="40px"
            height="380px"
          />
          </div>
          <div className='col-md-8 text-light'>
            <h2 className='text-center text-decoration-underline font-weight-bold mb-3'>About Mukesh Ambani</h2>
            <p>
            Mr Mukesh Ambani is the Founder and Chairman of the Ambani Group, which ranks among the top 3 industrial conglomerates
             in India. Mr Ambani, a first-generation entrepreneur, is driven by the core philosophy of infusing "Growth 
             with Goodness" through his nation-building vision. Each of the Group's businesses focuses on helping build
              world-class infrastructure capabilities to help accelerate the growth of India.<br/><br/>
              Ambani Group consists of 7 publicly listed entities with a combined market capitalization in excess
              of $242.73 billion (as of August 29, 2022) with businesses spanning Energy, Ports & Logistics, 
              Mining & Resources, Gas, Defence & Aerospace, and Airports. The Group has established a leadership
               position in India in each of its business areas.<br/><br/>
               For Mr Ambani, nation-building means transforming India's coastline by building a string of ports and logisti
               cs hubs. For him, nation-building also means strengthening the country's energy security and mitigating the
                urban-rural divide by delivering electricity to several hundreds of millions living in the hinterlands of 
              India. Nation-building, for Mr Ambani, also involves boosting food security by building a modern agriculture
               supply chain and empowering the farmers. Each of his industrial endeavours has created tens of thousands 
               of jobs.     
            </p>
            <hr/>
            <h5 className=' mb-3'>Write some thoughts about Mukesh Ambani</h5>
            <textarea rows={5} cols={43} className='bg-dark text-light rounded' placeholder='Write Something' > </textarea><br/>
            <button className='rounded btn btn-success mt-3'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
