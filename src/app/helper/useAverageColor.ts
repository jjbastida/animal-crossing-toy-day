function componentToHex(value: number): string {
  const hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getAverageColor(imgElement: HTMLImageElement): string {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    return "#808080";
  }

  canvas.width = 1;
  canvas.height = 1;
  context.drawImage(imgElement, 0, 0, 1, 1);

  const data = context.getImageData(0, 0, 1, 1).data;
  return rgbToHex(data[0], data[1], data[2]);
}

export default getAverageColor;
