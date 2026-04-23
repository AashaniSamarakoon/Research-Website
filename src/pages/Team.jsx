export default function Team() {
  const members = [
    "Ashani Samarakoon",
    "N. A. Dias",
    "S. C. Gallearachchi",
    "W. S. R. Dayarathna"
  ]

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-6">Research Team</h1>
      {members.map((member, index) => (
        <div key={index} className="bg-white shadow p-4 rounded mb-3">
          {member}
        </div>
      ))}
    </div>
  )
}
