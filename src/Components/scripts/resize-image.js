export default async function resizeImage(imageSource, width, height) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const image = await loadImage(imageSource);
  const newSize = proportionalScaling(image, width, height);

  canvas.width = newSize.width;
  canvas.height = newSize.height;
  context.drawImage(image, 0, 0, newSize.width, newSize.height);

  return await canvasToPNGImage(canvas);
}

const loadImage = async (image) => {
  const resizedImage = new Image();
  resizedImage.src = image;

  await new Promise((result) => (resizedImage.onload = result));

  return resizedImage;
};

const proportionalScaling = (image, width, height) => {
  let newWidth = image.width;
  let newHeight = image.height;

  if (newWidth > newHeight) {
    newHeight *= width / newWidth;
    newWidth = width;
  } else {
    newWidth *= height / newHeight;
    newHeight = height;
  }

  return { width: newWidth, height: newHeight };
};

const canvasToPNGImage = async (canvas) => {
  const canvasToDataURL = canvas.toDataURL("image/png");
  const DataURLToBlob = await fetch(canvasToDataURL);
  const BlobToFile = await DataURLToBlob.blob();

  return BlobToFile;
};
