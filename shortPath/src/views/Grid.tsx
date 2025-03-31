import "../index.css";

const rows = 3;
const cols = 3;
const totalCells = rows * cols 


const Grid = () => {
  return (

    <div className="grid grid-cols-3 gap-4 p-5">
        {[...Array(totalCells)].map((_,index) =>(
            <div
            key={index}
            id={`cell-${index+1}`} // unique ID
            className="bg-blue-500 text-white p-5 text-center font-bold"
            
            >
                Cell {index+1}
            </div>
        ))}
    </div>
  )
}

export default Grid