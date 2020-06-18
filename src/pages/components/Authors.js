import React, { Component } from 'react'

export class Authors extends Component {
  render() {
    const info = {
      names : ["Fan", "Harry", "Henry", "Horatiu"],
      avatar : [
          "https://i.imgur.com/KHTLGyV.png",
          "https://i.imgur.com/N1uPhT7.png",
          "https://i.imgur.com/GjDI6Wq.png",
          "https://i.imgur.com/cXiOkCh.png"
        ],
      githubLink : [
            "https://github.com/fansfansfansfans",
            "https://github.com/HpwClifford/",
            "https://github.com/blackhaj",
            "https://github.com/hmitrea"
          ],
      linkedinLink : [
          "https://www.linkedin.com/in/fan-shao-85312ab4/",
          "https://www.linkedin.com/in/harry-clifford-3788951a9/",
          "https://www.linkedin.com/in/henryblack1/",
          "https://www.linkedin.com/in/horatiu-mitrea-515704137/"
        ],
    }
  
  

   const profile = [];

  for (let i = 0; i < info.names.length; i++){
    profile.push(
      <div className="profileDiv" key={i}>
        <span className="authorName">{info.names[i]}</span> <br />
        <img className="profile" src={info.avatar[i]} /> <br />
        <a href={info.githubLink[i]} target="_blank" className="authorLink">Github</a> &nbsp; &nbsp; | &nbsp; &nbsp;
        <a href={info.linkedinLink[i]} target="_blank" className="authorLink">LinkedIn</a>
      </div>
      )
  }
    return (
    <div className="authors"><a id="authors"></a>
      <div className="authors-title">
        <div className="info-header">
          <h2>Authors</h2>
        </div>
        
      </div>
      <div className="authors-profile">
        {profile}
      </div>
    </div>

    )
  }
}

export default Authors











// for (let names in info){
//   info[names].forEach((person) => {

//   })
// }
 // const names = ["Fan", "Harry", "Henry", "Horatiu"]
 // const avatar = [
 //   "https://i.imgur.com/KHTLGyV.png",
 //   "https://i.imgur.com/N1uPhT7.png",
 //   "https://i.imgur.com/GjDI6Wq.png",
 //   "https://i.imgur.com/cXiOkCh.png"
 // ]
 // const githubLink = [
 //   "https://github.com/fansfansfansfans",
 //   "https://github.com/HpwClifford/",
 //   "https://github.com/blackhaj",
 //   "https://github.com/hmitrea"
 // ]
 // const linkedinLink = [
 //   "https://www.linkedin.com/in/fan-shao-85312ab4/",
 //   "https://www.linkedin.com/in/harry-clifford-3788951a9/",
 //   "https://www.linkedin.com/in/henryblack1/",
 //   "https://www.linkedin.com/in/horatiu-mitrea-515704137/"
 // ]
 // Fan: ["Fan", "https://i.imgur.com/KHTLGyV.png", "https://github.com/fansfansfansfans", "https://www.linkedin.com/in/fan-shao-85312ab4/"],
 // Harry: ["Harry", "https://i.imgur.com/N1uPhT7.png", "https://github.com/HpwClifford/", "https://www.linkedin.com/in/harry-clifford-3788951a9/"],
 // Henry: ["Henry", "https://i.imgur.com/GjDI6Wq.png", "https://github.com/blackhaj", "https://www.linkedin.com/in/henryblack1/"],
 // Horatiu: ["Horatiu", "https://i.imgur.com/cXiOkCh.png", "https://github.com/hmitrea", "https://www.linkedin.com/in/horatiu-mitrea-515704137/"]

// <h2>Contributors</h2><p></p>
// <div className="profileDiv">
//   <span class="authorName">Fan</span> <br />
//   <img className="profile" src="https://i.imgur.com/KHTLGyV.png" /> <br />
//   <a href="https://github.com/fansfansfansfans" target="_blank" className="profileLink">Github</a> | <a href="https://www.linkedin.com/in/fan-shao-85312ab4/" target="_blank" className="profileLink">LinkedIn</a>
// </div>
// <div className="profileDiv">
//   Harry <br />
//   <img className="profile" src="https://i.imgur.com/N1uPhT7.png" /> <br />
//   <a href="" target="_blank">Github</a> | <a href="" target="_blank">LinkedIn</a>
// </div>
// <div className="profileDiv">
//   Henry <br />
//   <img className="profile" src="https://i.imgur.com/GjDI6Wq.png" /> <br />
//   <a href="" target="_blank">Github</a> | <a href="" target="_blank">LinkedIn</a>
// </div>
// <div className="profileDiv">
//   Horatiu <br />
//   <img className="profile" src="https://i.imgur.com/cXiOkCh.png" /> <br />
//   <a href="" target="_blank">Github</a> | <a href="" target="_blank">LinkedIn</a>
// </div>











