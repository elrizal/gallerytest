import galleryList from './illust.json';
import React from 'react';
import {useRouter} from 'next/router'
import Layout from '../../../components/layout';
import BackBtn from '../../../components/back';
const Comment = () => {
  const router = useRouter();
  const {id, itemselected} = router.query;

  return  <Layout>
      <BackBtn/>
      <div className="container">
        {galleryList.map(obj => {
          if (itemselected == obj.endpoint) {
            return <div>
              <div className="row animated fadeIn">
                <div className="col-sm-12  col-lg-6">
                <a href={obj.img} target="_blank">
                <img loading="lazy" src={obj.img} alt="Case" className='aside-caseimg  add-centering'/>
                </a>
                </div>
                <div className="col-sm-12  col-lg-6">
                <h1>{obj.title}</h1>
                <h2>{obj.company}</h2>
                  <p>
                    <b>Responsibilities:</b> {obj.role}<br/>
                    <b>Project timeframe: </b>
                    {obj.timeframe}
                  </p>
                  <h3>About the project</h3>
                  <p>{obj.description}</p>
                  <h3>The process</h3>
                  <p>{obj.process}</p>
                </div>
              </div>
            </div>
          }
        })}
      </div>
    </Layout>
}

export default Comment