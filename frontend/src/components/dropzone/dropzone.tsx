import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import * as S from './styles';
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
    <S.Dropzone className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFile ? (
        <S.Img src={selectedFile} alt="Ponto de coleta thumbnail" />
      ) : (
        <S.P>
          <S.Svg>
            <FiUpload size={32} />
          </S.Svg>
          Faça upload de uma imagem do estabelecimento.
        </S.P>
      )}
    </S.Dropzone>
  );
};
export default DropzoneUpload;
