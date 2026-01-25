// src/services/api.js

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000/api';

/**
 * Función genérica para hacer peticiones al backend
 * Maneja automáticamente el token de autenticación si existe
 */
async function fetchAPI(endpoint, options = {}) {
  const token = localStorage.getItem('capypay_token');
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, config);
    
    // Si el token expiró (401), redirigir al login
    if (response.status === 401) {
      localStorage.removeItem('capypay_token');
      localStorage.removeItem('capypay_user');
      window.location.href = '/login'; 
      return null;
    }

    let data;
    try {
        data = await response.json();
    } catch (error) {
        // Si la respuesta no es JSON (ej. error 404 HTML del servidor)
        if (!response.ok) {
             throw new Error(`Error ${response.status}: ${response.statusText}`); 
        }
    }
    
    // Si el backend devuelve un error 400-500 y pudimos parsear el JSON
    if (!response.ok) {
      // Buscamos 'message' o 'error' porque tu backend usa ambos
      const mensaje = data?.message || data?.error || 'Error en la petición';
      throw new Error(mensaje);
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Servicios de Autenticación
export const authService = {
  login: async (email, password) => {
    // Backend route: POST /api/login
    const response = await fetchAPI('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    // Guardamos el token y el usuario si el login es exitoso
    // Asumimos que la respuesta trae { token, user: { id, ... } }
    if (response.token) {
      localStorage.setItem('capypay_token', response.token);
    }
    // IMPORTANTE: Tu backend devuelve 'usuarioId', no 'user' o 'id' suelto
    if (response.usuarioId) {
        // Construimos un objeto de usuario local para guardar
        const userToSave = {
            id: response.usuarioId,
            nombre: response.nombre,
            cedula: response.cedula,
            balance: response.balance
        };
        localStorage.setItem('capypay_user', JSON.stringify(userToSave));
    } else if (response.user || response.usuario || response.id) {
       // Fallback por si cambia la estructura
       const userToSave = response.user || response.usuario || response;
       localStorage.setItem('capypay_user', JSON.stringify(userToSave));
    }
    
    return response;
  },
  
  register: async (userData) => {
    // Backend route: POST /api/registro
    return fetchAPI('/registro', {
      method: 'POST',
      body: JSON.stringify(userData), // nombre, email, password, etc.
    });
  },
  
  logout: () => {
    localStorage.removeItem('capypay_token');
    localStorage.removeItem('capypay_user');
    window.location.href = '/index'; 
  },

  // Helper para obtener el usuario guardado
  getCurrentUser: () => {
    const user = localStorage.getItem('capypay_user');
    return user ? JSON.parse(user) : null;
  }
};

// Servicios de Usuario y Transacciones
export const userService = {
  // Backend route: GET /api/usuario/:id
  getProfile: async (id) => {
    // Si no pasan ID, intentamos obtenerlo del storage
    let userId = id;
    if (!userId) {
       const storedUser = authService.getCurrentUser();
       userId = storedUser?.id || storedUser?.user_id;
    }
    
    if (!userId) throw new Error("ID de usuario no encontrado");
    
    return fetchAPI(`/usuario/${userId}`);
  },
  
  // Backend route: GET /api/historial
  getHistory: async () => {
    return fetchAPI('/historial');
  }
};

export const transactionService = {
  // Backend route: POST /api/recargar
  recharge: async (data) => {
     return fetchAPI('/recargar', {
        method: 'POST',
        body: JSON.stringify(data) 
     });
  },
  
  // Backend route: POST /api/transferir
  transfer: async (data) => {
      return fetchAPI('/transferir', {
          method: 'POST',
          body: JSON.stringify(data)
      });
  },
  
  // Backend route: GET /api/tasa
  getRate: async () => {
      return fetchAPI('/tasa');
  }
};
