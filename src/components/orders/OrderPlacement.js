'use client'

import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const laundryItems = [
  { id: 'shirt', name: 'Shirt', price: 20 },
  { id: 'pants', name: 'Pants', price: 30 },
  { id: 'jeans', name: 'Jeans', price: 40 },
  { id: 't-shirt', name: 'T-Shirt', price: 15 },
  { id: 'sweater', name: 'Sweater', price: 50 },
  { id: 'jacket', name: 'Jacket', price: 60 },
  { id: 'dress', name: 'Dress', price: 45 },
  { id: 'skirt', name: 'Skirt', price: 35 },
  { id: 'blazer', name: 'Blazer', price: 55 },
  { id: 'coat', name: 'Coat', price: 70 }
]

export default function OrderPlacement() {
  const [selectedItems, setSelectedItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const onDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(selectedItems)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    setSelectedItems(items)
  }

  const handleItemClick = (item) => {
    if (selectedItems.some((selected) => selected.id === item.id)) {
      setSelectedItems(selectedItems.filter((selected) => selected.id !== item.id))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const handleSubmit = () => {
    setLoading(true)
    // Simulate order submission
    setTimeout(() => {
      setSuccess(true)
      setSelectedItems([])
      setLoading(false)
      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000)
    }, 1000)
  }

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Place Your Order</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Available Items */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Available Items</h3>
          <div className="grid grid-cols-2 gap-4">
            {laundryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedItems.some((selected) => selected.id === item.id)
                    ? 'bg-indigo-100 border-indigo-500'
                    : 'hover:bg-gray-50'
                }`}
              >
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Items */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Selected Items</h3>
          {selectedItems.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              Click on items to add them to your order
            </p>
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="selected-items">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-2"
                  >
                    {selectedItems.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                          >
                            <div className="flex justify-between items-center">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-600">₹{item.price}</p>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}

          {selectedItems.length > 0 && (
            <div className="mt-6">
              <div className="border-t pt-4">
                <p className="text-lg font-semibold flex justify-between">
                  <span>Total:</span>
                  <span>₹{totalPrice}</span>
                </p>
              </div>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Placing Order...' : 'Place Order'}
              </button>
            </div>
          )}
        </div>
      </div>

      {success && (
        <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md text-center">
          Order placed successfully! We'll contact you shortly.
        </div>
      )}
    </div>
  )
} 