export default function Practice() {
  return (
    <div>
        <h1 className="text-center text-4xl font-bold my-10">Playing Around with The CSS Box model</h1>

        <div className="container">
            {/* .box*9#box-$>{box-$} */}
            <div className="box bg-blue-600" id="box-1">cdgfdfhjhjjhhjv</div>
            <div className="box bg-red-600 mt-40" id="box-2">box-2</div>
            <div className="box bg-orange-600 mt-80" id="box-3">box-3</div>
            <div className="box bg-green-600 mt-40" id="box-4">box-4</div>
            <div className="box bg-yellow-600 " id="box-5">box-5</div>
            <div className="box bg-indigo-600 mt-40" id="box-6">box-6</div>
            <div className="box bg-sky-600 mt-80" id="box-7">box-7</div>
            <div className="box bg-gray-600 mt-40" id="box-8">box-8</div>
            <div className="box bg-white" id="box-9">box-9</div>
        </div>
    </div>
  )
}
