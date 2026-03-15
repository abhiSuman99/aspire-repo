import React, { useState } from "react"

type Props = {
  onClose: () => void
  onAdd: (name: string) => void
}

const AddCardModal: React.FC<Props> = ({ onClose, onAdd }) => {

  const [name, setName] = useState("")

  const submit = () => {
    if (!name.trim()) return
    onAdd(name)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-[350px]">

        <h2 className="text-lg font-semibold mb-4">
          Add New Card
        </h2>

        <input
          className="border w-full p-2 rounded mb-4"
          placeholder="Card holder name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex justify-end gap-3">

          <button
            className="border px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={submit}
          >
            Add Card
          </button>

        </div>

      </div>

    </div>
  )
}

export default AddCardModal