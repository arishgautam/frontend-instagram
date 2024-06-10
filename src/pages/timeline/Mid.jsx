import React, { useState } from 'react';
import "./Mid.css";
import Sugesstions from './Sugesstions';
import Post from './posts/Post';

function Mid() {
  const [posts , setPosts]= useState ([
    {
      user:"Lucifer",
      postImage:"https://imgs.search.brave.com/9Jka2VzdaFci-u6bROeSVHrgJVYhBmFUN57zYrNwqjU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMTQ0NzM2MjY0/NC5qcGc",
      likes:"34",
      timestamp:"20min",
    },

    {
      user:"Joordan",
      postImage:"https://imgs.search.brave.com/tbbxPOckkfUh5roVl9o8iQitzyDWJOr2bNHYMMduyWo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTdRb3Zy/SDA4TFRIQkhacFJk/dElqOS82NjQ1MTVi/MTA5ODM4NmIzZGE3/OTRkOGMxMDk2MmU2/Ni9hZXJpYWwtaW1h/Z2VzLWNhcmQuanBn",
      likes:"21",
      timestamp:"3d",
    },
    {
      user:"Rayana",
      postImage:"https://imgs.search.brave.com/P4qDu4W_DkXK1UXJ1lXCbmHTOWTWfrGrMRk4FW2Q0sY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/YXV0dW1uLXBob3Rv/Z3JhcGhlci10YWtp/bmctcGljdHVyZS5q/cGc_d2lkdGg9MTAw/MCZmb3JtYXQ9cGpw/ZyZleGlmPTAmaXB0/Yz0w",
      likes:"56",
      timestamp:"7h",
    },
    {
      user:"Mariuss",
      postImage:"https://imgs.search.brave.com/niEDuvZhqLgFRt3UNGZAy_y4XBSLaISuW-zjMvFPAdo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE3/MTY4NDcyMTQ1Njkt/NjMxY2I3ZjE3NTFj/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4bFpH/bDBiM0pwWVd3dFpt/VmxaSHcyZkh4OFpX/NThNSHg4Zkh4OA",
      likes:"12",
      timestamp:"5d",
    },
  ])
  return (
    <div className='mid'>
    <div className='mid__left'>
        <div className='mid__posts'>
            {posts.map((post) => (
              <Post user= {post.user}
             postImage= {post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}/>
           ))}
        </div>
    </div>
    <div className='mid__right'>
        <Sugesstions/>
        </div>

    </div>
  )
}

export default Mid