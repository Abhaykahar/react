import './app.css'

function App() {
  let todo=[
    {
      id:1,
      task:"reading",
    },
    {
      id:2,
      task:"singing",
    },
    {
      id:3,
      task:"write",
    },
  ];
  let product=[
    {
      id:1,
      Name:"iphone",
      price:"50000",
      desc:"nice phone",
      image:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70&crop=false"
    },
    {
      id:2,
      Name:"watch",
      desc:"nice watch",
      price:"500",
      image:"https://rukminim2.flixcart.com/image/832/832/klfhk7k0/watch/x/d/6/fs5268i-fossil-original-imagyk7g8xchsgft.jpeg?q=70&crop=false"
    },
    {
      id:3,
      Name:"game",
      desc:"nice game",
      price:"1000",
      image:"https://rukminim2.flixcart.com/image/416/416/xif0q/physical-game/u/3/a/no-standard-edition-ps5-f1-23-single-player-multi-user-ps5-original-imagpv2hpcg3qhqy.jpeg?q=70&crop=false",
    },
  ]
  return (
    <div className="App">
      <header>
        <div className="logo">
          <h1>L o g o</h1>
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Support</li>
            <li>contact</li>
          </ul>
        </div>
      </header>
      <section className='must'>
        <div className='container'>
          <div className='row'>
         <div className='alt'>
         <div className='w-6'>
          <img src="https://t4.ftcdn.net/jpg/03/20/70/67/360_F_320706748_9EHt2oP8NgekFXsM3INJtN7HhdRHOTJN.jpg"></img>
            </div>
            <div className='w-6'>
              <div className='muct-content'>
                <h2>Find out about us in history</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#">Install Now</a>
                <a href="#" className='b1'>Watch Totorial</a>
              </div>
            </div>
         </div>
          </div>
        </div>
      </section>
      <div className='main-section'>
        <div className='container'>
          <div className='row'>

            <div className='main'>


              <div className='todo'>

              <ul>
                {
                  todo.map((val)=>{
                    return(
                      <li>
                  <a href="#">{val.task}</a>
                </li>
                    )
                  })
                }
              </ul>
              </div>
              <div className='card'>

                <div className='main-box'>
                  {
                    product.map((item)=>{
                      return(
                    <div className='box'>
                     <div className='box-body'>
                     <img src={item.image}/>
                     <h3> Name :- {item.Name}</h3>
                     <h5> Price :- {item.price}</h5>
                     <p>Description :- {item.desc} </p>

                      </div>
                    </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

