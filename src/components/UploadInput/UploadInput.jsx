import s from './UploadInput.module.scss';

const UploadInput = ({ file, setFile, error, setError, marginBottom }) => {
  // const [error, setError] = useState(null);

  const handleUploadFile = e => {
    // очищаем ошибки
    setError(prev => ({ ...prev, file: null }));
    setFile(null);

    //   для удобности файл в переменую записуем
    const fileTmp = e.currentTarget.files[0];

    // если файл больше 5мб ошибку выводим
    if (fileTmp.size > 5242880) {
      setError(prev => ({ ...prev, file: 'The photo size must not be greater than 5 Mb' }));
      return;
    }

    //   проверяем размер изображения должен быть больше 70х70
    let img = new Image();
    img.src = window.URL.createObjectURL(e.target.files[0]);
    img.onload = () => {
      if (img.width < 70 || img.height < 70) {
        setError(prev => ({ ...prev, file: 'Minimum size of photo 70x70px' }));
        return;

        // upload logic here
      } else {
        setFile(fileTmp);
      }
    };
  };

  return (
    <fieldset className={s.wrap} style={{ marginBottom }}>
      <input
        type="file"
        onChange={handleUploadFile}
        id="file_upload"
        className={s.input}
        name="image"
        accept="image/jpg"
        size={5242880}
        required
      />
      <label
        className={s.label}
        style={error && { borderColor: '#CB3D40', borderWidth: 2 }}
        htmlFor="file_upload"
      >
        Upload
      </label>
      <span
        className={s.span}
        onClick={() => console.log(file)}
        style={
          file
            ? { color: 'rgba(0, 0, 0, 0.87)' }
            : error && { borderColor: '#CB3D40', borderWidth: 2 }
        }
      >
        {file ? file.name : 'Upload your photo'}
      </span>
      {error && <p className={s.error}>{error}</p>}
    </fieldset>
  );
};

export default UploadInput;
