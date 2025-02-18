import { useState, useEffect } from 'react'
import './App.css'

const API_URL = 'http://localhost:5000/api'

function App() {
  const [items, setItems] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  })

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_URL}/items`)
      if (!response.ok) {
        throw new Error('Error fetching items')
      }
      const data = await response.json()
      console.log('Items fetched:', data) // Para debug
      setItems(data)
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name.trim()) return
    
    try {
      const response = await fetch(`${API_URL}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        setFormData({ name: '', description: '' })
        fetchItems()
      }
    } catch (error) {
      console.error('Error creating item:', error)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/items/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        fetchItems()
      }
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  const handleUpdate = async (id, updatedData) => {
    try {
      const response = await fetch(`${API_URL}/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      })
      if (response.ok) {
        fetchItems()
      }
    } catch (error) {
      console.error('Error updating item:', error)
    }
  }

  return (
    <div className="container">
      <h1>CRUD con React.js + Node.js</h1>
      
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descripción"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
          <button type="submit">Crear</button>
        </form>
      </div>

      <div className="items-container">
        {items.length === 0 ? (
          <p className="no-items">No hay items para mostrar</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="item-actions">
                <button 
                  className="delete"
                  onClick={() => handleDelete(item.id)}
                >
                  Eliminar
                </button>
                <button 
                  className="update"
                  onClick={() => handleUpdate(item.id, {
                    ...item,
                    name: prompt('Nuevo nombre:', item.name) || item.name,
                    description: prompt('Nueva descripción:', item.description) || item.description
                  })}
                >
                  Actualizar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default App
