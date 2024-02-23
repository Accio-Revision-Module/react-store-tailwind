function Error({e}) {
  return (
    <div>
        <p className="bg-red-500 text-white rounded p-4">Error: {e.toString()}</p>
    </div>
  )
}

export default Error