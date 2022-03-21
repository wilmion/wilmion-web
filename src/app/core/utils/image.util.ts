export function getImageFromFile(
  file: File,
  cb: (url: string, size: string) => any
) {
  const reader = new FileReader();

  reader.addEventListener('load', (e) => {
    const url = e.target?.result as string;
    const image = new Image();

    image.onload = () => {
      const size = image.width + 'x' + image.height;

      cb(url, size);
    };

    image.src = url;
  });

  reader.readAsDataURL(file);
}

export async function getFileFromUrl(url: string, name: string) {
  const file = await fetch(url);

  const blob = await file.blob();

  return blobToFile(blob, name);
}

function blobToFile(blob: Blob, name: string) {
  var b: any = blob;

  b.lastModifiedDate = new Date();
  b.name = name;

  //Cast to a File() type
  return <File>b;
}
