import galleryList from './items-campaigns.json';
import Layout from '../../../components/layout'
import React from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
import Button from '@material-ui/core/Button';

export default function Comment() {
  const router = useRouter();
  const {id, itemselected} = router.query;
  return (
    <Layout>
      <div className="fixed backbtn">
        <Link  href='/web/[id]' as='/web/index'>
          <a><ArrowLeftRounded style={{fontSize: 90}}/></a>
        </Link>
      </div>
      <div className="container">
        {galleryList.map(obj => {
          if (itemselected == obj.order) {
            return <div>
              <div className="row">
                <div className="col-sm-12  col-lg-4 add-centering">
                    <img src={obj.image} className='aside-webimg' alt=""/>
                   <br />
                    <Button a href={obj.live} variant="outlined" color="primary">Live Site</Button>&nbsp;
                    <Button a href={obj.github} variant="outlined" color="primary">Github</Button>
                </div>
                <div className="col-sm-12  col-lg-8">
                <h1>{obj.title}</h1>
                  <p>
                    <b>My role:</b> {obj.role}<br/>
                    <b>Built with: </b> {obj.tech.join(', ')}<br/>
                    <b>APIs and libraries used: </b> {obj.libapi.join(', ')}<br/>
                    <b>Project timeframe: </b>
                    {obj.timeframe}
                  </p>
                  <h3>About the project</h3>
                  <p>{obj.description}</p>
                  <h3>Purpose</h3>
                  <p>{obj.problem}</p>
                  <h3>Process</h3>
                  <p>{obj.process}</p>
                  <h3>Result and Future Developments</h3>
                  <p>{obj.future}</p>
                </div>
              </div>
            </div>
          }
        })}
      </div>
    </Layout>
  )
}

//export default Comment