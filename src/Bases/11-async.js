const getImagen = async () => {
  const apiKey = 'x2Rj7uR6oifrsBpvrmuGRAxUBHzrlPof';
  const resp = await fetch(
    `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );
  const { data } = await resp.json();
  const { url } = data.images.original;
  const img = document.createElement('img');
  img.src = url;
  document.body.appendChild(img);
};

getImagen();
