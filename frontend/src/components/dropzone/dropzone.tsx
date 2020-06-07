import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import './styles.css';
import { FiUpload } from 'react-icons/fi';
import { useState } from 'react';

type FileUploader = {
  onFileUploader: (file: File) => void;
};

const DropzoneUpload: React.FC<FileUploader> = ({ onFileUploader }) => {
  const [selectedFile, setSelectedFile] = useState('');

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileURL = URL.createObjectURL(file);
      setSelectedFile(fileURL);
      onFileUploader(file);
    },
    [onFileUploader],
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFile ? (
        <img src={selectedFile} alt="Ponto de coleta thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Faça upload de uma imagem do estabelecimento.
        </p>
      )}
    </div>
  );
};
export default DropzoneUpload;
