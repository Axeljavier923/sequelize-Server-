import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../stilos/Perfil.css';

const Perfil = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('Sin archivos seleccionados');
  const [currentPhoto, setCurrentPhoto] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:3000/auth/user/${id}`);
        const userData = await response.json();
        const fotoUsuario = userData.unUsuario.fotoUser;

        // Verifica si hay una foto de usuario
        if (fotoUsuario) {
          setCurrentPhoto(fotoUsuario);
        }
      } catch (error) {
        console.error('Error al obtener datos del usuario', error);
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
        // Actualiza el estado con el nombre del archivo de la nueva foto
        setCurrentPhoto(selectedFile.name);
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

      <div className="profile-image">
        <img
          name="image"
          type="file"
          src={currentPhoto ? `/img_foto/${currentPhoto}` : ''}
          alt={`Imagen de perfil ${currentPhoto}`}
          className="profile-picture"
        />
      </div>

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
