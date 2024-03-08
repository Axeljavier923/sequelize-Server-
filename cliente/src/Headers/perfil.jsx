import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../stilos/Perfil.css';

const Perfil = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('Sin archivos seleccionados');
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [loading, setLoading] = useState(false);  // Debería comenzar como falso
  const { id } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);  // Marca como cargando antes de la solicitud

        const response = await fetch(`http://localhost:3000/auth/user/${id}`);
        const userData = await response.json();
        const fotoUsuario = userData.unUsuario.fotoUser;
        console.log("foto usuario", fotoUsuario);

        // Verifica si hay una foto de usuario
        const mostrarFoto = () => {
            if (fotoUsuario) {
            setCurrentPhoto(fotoUsuario);
          }
        };
      

        setLoading(false);  // Marca como no cargando después de la solicitud
      } catch (error) {
        console.error('Error al obtener datos del usuario', error);
        setLoading(false);  // Asegúrate de marcar como no cargando en caso de error
      }
    };

    fetchUserProfile();
  }, [id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileName(file ? file.name : 'Sin archivos seleccionados');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('fotoUser', selectedFile);

      const response = await fetch(`http://localhost:3000/auth/foto/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        setCurrentPhoto(URL.createObjectURL(selectedFile));
        alert('Foto de perfil actualizada con éxito');
      } else {
        alert('Error al actualizar la foto de perfil');
        console.error(await response.json());
      }
    } catch (error) {
      alert('Error de red al actualizar la foto de perfil', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container-perfil-foto">
      <h1>Editar perfil</h1>
      <hr className="divider" />

      {loading ? (
        // Muestra un mensaje o componente de carga mientras la foto se está cargando
        <p>Cargando foto de perfil...</p>
      ) : (
        <div className="profile-image">
          <img
            name="image"
            src={currentPhoto}
            alt="Foto de perfil"
            className="profile-picture"
          />
        </div>
      )}

      <div className="change-photo">
        <label htmlFor="image">Seleccionar archivo</label>
        <input
          type="file"
          name="image"
          id="image"
          className="file-input"
          onChange={handleFileChange}
        />
        <span className="file-name">{fileName}</span>
      </div>

      <button type="submit" className="submit-button">
        Guardar cambios
      </button>
    </form>
  );
};

export default Perfil;
