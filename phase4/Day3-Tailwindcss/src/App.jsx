function App(){


  return(
    <div>
    <nav className="flex justify-between items-center p-4 bg-red-50 border-solid border-black">
      <div>
         Logo
      </div>
      <div className="flex gap-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
      </div>
    </nav>
    <div className="box">
        <p>box model</p>
    </div>
    <div className="p-4 my-8 w-[300px] ">
      <p>tailwind box model</p>
    </div>
    <div className="flex flex-col gap-2 p-4 border rounded-lg w-64">
       <div className="bg-red-100 h-32">
        image
       </div>
       <h1 className="text-xl font-bold">Title</h1>
       <p>decription</p>
    </div>
    <div className="flex flex-wrap  border gap-4">
      <div className="h-24 w-24 bg-blue-200">box1</div>
      <div className="h-24 w-24 bg-blue-200">box2</div>
      <div className="h-24 w-24 bg-blue-200">box3</div>
      <div className="h-24 w-24 bg-blue-200">box4</div>
      <div className="h-24 w-24 bg-blue-200">box5</div>
      <div className="h-24 w-24 bg-blue-200">box6</div>
    </div>
    </div>
  )
}
export default App;