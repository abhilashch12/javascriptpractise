
function App(){
const message = import.meta.env.VITE_TEST_MESSAGE;
console.log(message);
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
    <div className="flex gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Primary</button>
        <button className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300">Secondary</button>
        <button className=" bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Danger</button>
    </div>
    <div>
      <div className="relative inline-block">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-yellow-200">image</div>
      <p className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500"></p>
      </div>
      <p>Abhilash</p>
      <p>title</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       <div className="h-24 bg-purple-200 rounded flex items-center justify-center">box1</div>
       <div className="h-24 bg-purple-200 rounded flex items-center justify-center">box2</div>
       <div className="h-24 bg-purple-200 rounded flex items-center justify-center">box3</div>
       <div className="h-24 bg-purple-200 rounded flex items-center justify-center">box4</div>
       <div className="h-24 bg-purple-200 rounded flex items-center justify-center">box5</div>
       <div className="h-24 bg-purple-200 rounded flex items-center justify-center">box6</div>

    </div>
    <p>{message}</p>
    </div>
  )
}
export default App;